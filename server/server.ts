import express from 'express'
import dotenv from 'dotenv'
import * as Path from 'node:path'
import cors from 'cors'
import projectsRoutes from './routes/projects'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1/projects', projectsRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(Path.resolve('uploads')))
  app.use('/assets', express.static(Path.resolve('./dist/assets')))
  app.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default app
