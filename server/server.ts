import * as Path from 'node:path'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import projectsRoutes from '../server/routes/projects'

const app = express()

app.use(express.json())

app.use('/api/v1/projects', projectsRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(Path.resolve('public')))
  app.use('/assets', express.static(Path.resolve('./dist/assets')))
  app.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default app
