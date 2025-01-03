import { Router } from 'express'
import { getAllProjects, getProjectById } from 'server/db/projects'

const router = Router()

router.get('/', async (req, res, next) => {
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
  try {
  } catch (error) {
    next(error)
  }
})

//router.post

//router.put

//router.del

export default router
