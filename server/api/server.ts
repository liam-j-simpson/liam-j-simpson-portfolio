import express from 'express'
import * as Path from 'node:path'
import projectsRoutes from './routes/projects'
import cors from 'cors'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1/projects', projectsRoutes)

app.use(express.static(Path.resolve('public')))

app.listen(3000, () => {
  console.log(`Server ready on port ${PORT}`)
})

export default app
