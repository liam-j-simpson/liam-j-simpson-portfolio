import { Router } from 'express'
import {
  addProject,
  deleteProject,
  editProject,
  getAllProjects,
  getProjectById,
} from 'server/db/projects'

const router = Router()

import { auth } from 'express-oauth2-jwt-bearer'
import { checkPermissions } from 'server/middleware/checkPermissions'

const checkJwt = auth({
  audience: 'https://liamsimpsonportfolio/api',
  issuerBaseURL: 'https://dev-wboo3txpyqmiudzh.au.auth0.com/',
  tokenSigningAlg: 'RS256',
})

router.get('/', async (_req, res, next) => {
  try {
    const projects = await getAllProjects()
    res.json({ projects })
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const project = await getProjectById(id)
    res.json({ project })
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

router.post(
  '/',
  checkJwt,
  checkPermissions('add:project'),
  async (req, res, next) => {
    const project = req.body
    try {
      await addProject(project)
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
  async (req, res, next) => {
    const id = Number(req.params.id)
    const changes = req.body
    try {
      await editProject(id, changes)
      res.sendStatus(201)
    } catch (error) {
      next(error)
    }
  },
)

export default router
