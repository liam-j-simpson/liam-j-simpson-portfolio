import express from 'express'
// import * as Path from 'node:path'
import projectsRoutes from './routes/projects'

const app = express()

// app.use(express.json())

// app.use(express.static(Path.resolve('public')))

app.get('/', (req, res) => {
  res.send('Express on Vercel')
})

app.use('/api/v1/projects', projectsRoutes)

app.listen(3000, () => {
  console.log('Server ready on port 3000')
})

export default app
