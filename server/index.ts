import dotenv from 'dotenv'
import server from './server.ts'

dotenv.config()
const port = process.env.PORT || 3000

server.get('/', (req, res) => {
  res.send('Server is running')
})

server.listen(port, () => {
  console.log(
    `Environment: ${process.env.NODE_ENV}, listening on port: ${port}.`,
  )
})
