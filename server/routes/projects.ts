import { Router } from 'express'
import { getProjects } from 'server/db/projects'

const router = Router()

router.get('/', async (req, res, next) => {
  try {
    const projects = await getProjects()
    res.json({ projects })
  } catch (error) {
    next(error)
  }
})

//router.get by id

//router.post

//router.put

//router.del

export default router
