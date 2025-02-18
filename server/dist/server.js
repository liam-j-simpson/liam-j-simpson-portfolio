// api/index.ts
import express from "express";
import * as Path from "node:path";

// api/routes/projects.ts
import { Router } from "express";

// api/db/connection.ts
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
var url = process.env.MONGODB_URI;
var dbName = process.env.DB_NAME;
var client;
async function connectToDb() {
  try {
    if (!url || !dbName) {
      throw new Error("Missing MONGODB_URI or DB_NAME in environment variables");
    }
    if (!client) {
      client = new MongoClient(url);
      await client.connect();
      console.log("Connected successfully to MongoDB");
    }
    return client.db(dbName);
  } catch (err) {
    console.error("Could not connect to MongoDB:", err);
    throw err;
  }
}

// api/db/projects.ts
import { ObjectId } from "mongodb";
async function connectProjectCollection() {
  const db = await connectToDb();
  const collection = db.collection("projects");
  return collection;
}
async function getAllProjects() {
  const collection = await connectProjectCollection();
  try {
    const projects = await collection.find({}).toArray();
    const projectsWithId = projects.map((project) => {
      const { _id, ...rest } = project;
      return { id: _id, ...rest };
    });
    return projectsWithId;
  } catch (error) {
    throw new Error(`Error getting projects, ${error}`);
  }
}
async function getProjectById(id) {
  const collection = await connectProjectCollection();
  try {
    const project = await collection.findOne({ _id: new ObjectId(id) });
    return project;
  } catch (error) {
    throw new Error(`Error getting project:${id}, ${error}`);
  }
}
async function addProject(project) {
  const collection = await connectProjectCollection();
  try {
    collection.insertOne(project);
  } catch (error) {
    throw new Error(`Error creating project, ${error}`);
  }
}
async function editProject(id, changes) {
  const collection = await connectProjectCollection();
  try {
    collection.updateOne({ _id: new ObjectId(id) }, { $set: changes });
  } catch (error) {
    throw new Error(`Error editing project:${id}, ${error}`);
  }
}
async function deleteProject(id) {
  const collection = await connectProjectCollection();
  try {
    return await collection.deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    throw new Error(`Error deleting project:${id}, ${error}`);
  }
}

// api/routes/projects.ts
import dotenv2 from "dotenv";
import multer from "multer";
import { auth } from "express-oauth2-jwt-bearer";

// api/middleware/checkPermissions.ts
var checkPermissions = (requiredPermission) => {
  return (req, res, next) => {
    {
      const userPermissions = req.auth?.payload.permissions;
      if (userPermissions.includes(requiredPermission)) {
        return next();
      } else {
        res.status(403).json({
          error: "Incorrect Permissions"
        });
        return;
      }
    }
  };
};

// api/routes/projects.ts
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
dotenv2.config();
cloudinary.config({
  cloud_name: "dubbie1ur",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});
var checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_URL,
  tokenSigningAlg: process.env.AUTH0_SIGNING_ALG
});
var upload = multer({ storage });
var router = Router();
router.get("/", async (_req, res, next) => {
  try {
    const projects = await getAllProjects();
    res.json({ projects });
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const project = await getProjectById(id);
    res.json({ project });
  } catch (error) {
    next(error);
  }
});
router.post(
  "/",
  checkJwt,
  checkPermissions("add:project"),
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 5 }
  ]),
  async (req, res, next) => {
    const { name, summary, description, tags, url: url2, date } = req.body;
    const files = req.files;
    const thumbnail = await cloudinary.uploader.upload(
      files.thumbnail?.[0].path
    );
    const gallery = await Promise.all(
      files.gallery?.map(
        (item) => cloudinary.uploader.upload(item.path)
      )
    );
    const project = {
      name,
      summary,
      description,
      tags,
      url: url2,
      date,
      thumbnail: thumbnail.secure_url,
      thumbnailId: thumbnail.public_id,
      gallery: gallery.map((item) => item.secure_url),
      galleryId: gallery.map((item) => item.public_id)
    };
    try {
      await addProject(project);
      fs.unlinkSync(files.thumbnail?.[0].path);
      files.gallery?.map(
        (item) => fs.unlinkSync(item.path)
      );
      res.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  "/:id",
  checkJwt,
  checkPermissions("edit:project"),
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 10 }
  ]),
  async (req, res, next) => {
    const id = req.params.id;
    const project = await getProjectById(id);
    const changes = req.body;
    const files = req.files;
    const thumbnail = files.thumbnail?.[0].path;
    const gallery = files.gallery?.map((item) => item.path) || [];
    if (gallery.length > 0) {
      await Promise.all(
        project?.galleryId.map(
          (item) => cloudinary.uploader.destroy(item)
        )
      );
      const gallery2 = await Promise.all(
        files.gallery?.map(
          (item) => cloudinary.uploader.upload(item.path)
        )
      );
      files.gallery?.map(
        (item) => fs.unlinkSync(item.path)
      );
      changes.gallery = gallery2.map(
        (item) => item.secure_url
      );
      changes.galleryId = gallery2.map(
        (item) => item.public_id
      );
    }
    if (thumbnail != void 0) {
      await cloudinary.uploader.destroy(project?.thumbnailId);
      const thumbnail2 = await cloudinary.uploader.upload(
        files.thumbnail?.[0].path
      );
      fs.unlinkSync(files.thumbnail?.[0].path);
      changes.thumbnail = thumbnail2.secure_url;
      changes.thumbnailId = thumbnail2.public_id;
    }
    try {
      await editProject(id, changes);
      res.sendStatus(201);
    } catch (error) {
      next(error);
    }
  }
);
router.delete(
  "/:id",
  checkJwt,
  checkPermissions("delete:project"),
  async (req, res, next) => {
    const id = req.params.id;
    const project = await getProjectById(id);
    const thumbnailId = project?.thumbnailId;
    const galleryId = project?.galleryId;
    try {
      await cloudinary.uploader.destroy(thumbnailId);
      await Promise.all(
        galleryId.map((item) => cloudinary.uploader.destroy(item))
      );
      await deleteProject(id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
);
var projects_default = router;

// api/index.ts
var server = express();
server.use(express.json());
server.use(express.static(Path.resolve("public")));
server.get("/", (req, res) => {
  res.send("Express on Vercel");
});
server.use("/api/v1/projects", projects_default);
server.listen(3e3, () => {
  console.log("Server ready on port 3000");
});
var index_default = server;
export {
  index_default as default
};
