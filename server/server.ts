import express from 'express'
import * as Path from 'node:path'
import projectsRoutes from './routes/projects'
import dotenv from 'dotenv'

dotenv.config()
const server = express()


server.use(express.json())

server.use('/api/v1/projects', projectsRoutes)

server.use(express.static(Path.resolve('public')))

if (process.env.NODE_ENV === 'production') {
  server.use(express.static('./dist/client'))
  
}

export default server
