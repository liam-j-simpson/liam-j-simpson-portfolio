// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import MongoProjectData from "../models/projects";

// Global Config
export const projectsRouter = express.Router();

projectsRouter.use(express.json());

// GET
projectsRouter.get("/", async (_req: Request, res: Response) => {
  try {
     const games = (await collections.projects.find({}).toArray()) as MongoProjectData[];

      res.status(200).send(games);
  } catch (error) {
      res.status(500).send(error.message);
  }
});


// POST

// PUT

// DELETE