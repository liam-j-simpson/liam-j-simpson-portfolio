import { Router } from 'express'
import {
  addProject,
  deleteProject,
  editProject,
  getAllProjects,
  getProjectById,
} from 'server/db/projects'
import { MulterFiles } from 'models/projects'
import dotenv from 'dotenv'
import multer from 'multer'
import { auth } from 'express-oauth2-jwt-bearer'
import { checkPermissions } from 'server/middleware/checkPermissions'
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
dotenv.config()

cloudinary.config({
  cloud_name: 'dubbie1ur',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname)
  },
})
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_URL,
  tokenSigningAlg: process.env.AUTH0_SIGNING_ALG,
})
const upload = multer({ storage })
const router = Router()

// GET ALL PROJECTS
router.get('/', async (_req, res, next) => {
  try {
    const projects = await getAllProjects()
    res.json({ projects })
  } catch (error) {
    next(error)
  }
})

// GET ONE PROJECT
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const project = await getProjectById(id)
    res.json({ project })
  } catch (error) {
    next(error)
  }
})

// CREATE PROJECT
router.post(
  '/',
  checkJwt,
  checkPermissions('add:project'),
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'gallery', maxCount: 5 },
  ]),
  async (req, res, next) => {
    const { name, summary, description, tags, url, date } = req.body
    const files = req.files as MulterFiles
    const thumbnail = files.thumbnail?.[0].path
    const gallery = await files.gallery?.map((item) =>
      cloudinary.uploader.upload(item.path),
    )
    // const galleryResult = gallery.map((item) => item.secure_url)
    const result = await cloudinary.uploader.upload(thumbnail)

    // async function galleryResult() {
    //   return await gallery.map((item) => await cloudinary.uploader.upload(item))
    // }

    console.log('gallery', gallery)
    // console.log('galleryResult', galleryResult)
    // console.log('thumbnail url', result.secure_url)

    const project = {
      name,
      summary,
      description,
      tags,
      url,
      date,
      thumbnail: result.secure_url,
      gallery,
    }
    try {
      await addProject(project)
      fs.unlinkSync(thumbnail)
      res.sendStatus(201)
    } catch (error) {
      next(error)
    }
  },
)

//EDIT PROJECT
router.patch(
  '/:id',
  checkJwt,
  checkPermissions('edit:project'),
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'gallery', maxCount: 10 },
  ]),
  async (req, res, next) => {
    const id = req.params.id
    const changes = req.body
    const files = req.files as MulterFiles
    const thumbnail = files.thumbnail?.[0].path
    const gallery = files.gallery?.map((item) => item.path) || []

    if (gallery.length > 0) {
      changes.gallery = gallery
    }
    if (thumbnail != undefined) {
      changes.thumbnail = thumbnail
    }
    try {
      await editProject(id, changes)
      res.sendStatus(201)
    } catch (error) {
      next(error)
    }
  },
)

// DELETE PROJECT
router.delete(
  '/:id',
  checkJwt,
  checkPermissions('delete:project'),
  async (req, res, next) => {
    const id = req.params.id
    try {
      await deleteProject(id)
      res.sendStatus(204)
    } catch (error) {
      next(error)
    }
  },
)

export default router
