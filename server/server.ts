import express from 'express'
import * as Path from 'node:path'
import projectsRoutes from './routes/projects'
import cors from 'cors'
const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/api/v1/projects', projectsRoutes)

server.use(express.static(Path.resolve('public')))

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
