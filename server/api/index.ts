import express from 'express'
import * as Path from 'node:path'
import { getAllProjects, getProjectById } from './db/projects'
// import projectsRoutes from './routes/projects'

const server = express()

server.use(express.json())

server.use(express.static(Path.resolve('public')))

server.get('/', (req, res) => {
  res.send('Express on Vercel')
})

// server.use('/api/v1/projects', projectsRoutes)

// GET ALL PROJECTS
server.get('/all', async (_req, res, next) => {
  try {
    const projects = await getAllProjects()
    res.json({ projects })
  } catch (error) {
    next(error)
  }
})

// GET ONE PROJECT
server.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const project = await getProjectById(id)
    res.json({ project })
  } catch (error) {
    next(error)
  }
})

server.listen(3000, () => {
  console.log('Server ready on port 3000')
})

export default server
