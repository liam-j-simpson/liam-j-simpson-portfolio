import { Router } from 'express'
import {
  addProject,
  deleteProject,
  getAllProjects,
  getProjectById,
} from 'server/db/projects'

const router = Router()

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
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  const project = req.body
  try {
    await addProject(project)
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  const id = Number(req.params.id)
  try {
    await deleteProject(id)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

//router.put

export default router
