import express from 'express'
import projectsRoutes from './routes/projects'

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/projects', projectsRoutes)

export default server
