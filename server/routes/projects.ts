import { Router } from 'express'
import {
  addProject,
  deleteProject,
  editProject,
  getAllProjects,
  getProjectById,
} from 'server/db/projects'
import dotenv from 'dotenv'
dotenv.config()

import multer from 'multer'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname)
  },
})
const upload = multer({ storage })

const router = Router()

import { auth } from 'express-oauth2-jwt-bearer'
import { checkPermissions } from 'server/middleware/checkPermissions'

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_URL,
  tokenSigningAlg: process.env.AUTH0_SIGNING_ALG,
})

router.get('/', async (_req, res, next) => {
  try {
    console.log('Attempting to fetch projects...')
    const projects = await getAllProjects()
    console.log('Projects fetched successfully:', projects.length)
    res.json({ projects })
  } catch (error) {
    console.error('Error fetching projects:', error)
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const project = await getProjectById(id)
    res.json({ project })
  } catch (error) {
    next(error)
  }
})

router.post(
  '/',
  checkJwt,
  checkPermissions('add:project'),
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'gallery', maxCount: 10 },
  ]),
  async (req, res, next) => {
    const project = req.body
    const thumbnail = req.files?.thumbnail?.[0].path
    const gallery = req.files?.gallery?.map((item) => item.path) || []

    try {
      await addProject(project, thumbnail, gallery)
      res.sendStatus(201)
    } catch (error) {
      next(error)
    }
  },
)

router.delete(
  '/:id',
  checkJwt,
  checkPermissions('delete:project'),
  async (req, res, next) => {
    const id = Number(req.params.id)
    try {
      await deleteProject(id)
      res.sendStatus(204)
    } catch (error) {
      next(error)
    }
  },
)

router.patch(
  '/:id',
  checkJwt,
  checkPermissions('edit:project'),
  upload.fields([
    { name: 'thumbnail', maxCount: 1 },
    { name: 'gallery', maxCount: 10 },
  ]),
  async (req, res, next) => {
    const id = Number(req.params.id)
    const changes = req.body
    const thumbnail = req.files?.thumbnail?.[0].path
    const gallery = req.files?.gallery?.map((item) => item.path) || []

    try {
      await editProject(id, changes, thumbnail, gallery)
      res.sendStatus(201)
    } catch (error) {
      next(error)
    }
  },
)

export default router
