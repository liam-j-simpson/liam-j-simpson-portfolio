import dotenv from 'dotenv'
dotenv.config()
import server from './server.ts'

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err)
})

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`listening on port ${port}`)
  console.log(`Environment: ${process.env.NODE_ENV}`)
})
