import express from 'express'
import * as Path from 'node:path'
import projectsRoutes from './routes/projects'

const server = express()

server.use((req, res, next) => {
  console.error('==========================================')
  console.error('🔍 REQUEST RECEIVED:')
  console.error('📍 URL:', req.url)
  console.error('📝 Method:', req.method)
  console.error('==========================================')
  next()
})

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
