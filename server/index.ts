import dotenv from 'dotenv'
import server from './server.ts'

dotenv.config()

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(
    `Environment: ${process.env.NODE_ENV}, listening on port: ${port}.`,
  )
})
