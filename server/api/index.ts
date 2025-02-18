import express from 'express'
import * as Path from 'node:path'
import projectsRoutes from './routes/projects'

const server = express()

server.use(express.json())

server.use(express.static(Path.resolve('public')))

server.get('/', (req, res) => {
  res.send('Express on Vercel')
})

server.use('/api/v1/projects', projectsRoutes)

server.listen(3000, () => {
  console.log('Server ready on port 3000')
})

export default server
