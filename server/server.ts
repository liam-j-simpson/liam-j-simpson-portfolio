import express from 'express'
import * as Path from 'node:path'
import projectsRoutes from './routes/projects'

const server = express()

server.use((req, res, next) => {
  console.log('Request URL:', req.url)
  console.log('Request method:', req.method)
  console.log('Environment:', process.env.NODE_ENV)
  next()
})

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.use('/api/v1', projectsRoutes)

server.use(express.static(Path.resolve('public')))

if (process.env.NODE_ENV === 'production') {
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
