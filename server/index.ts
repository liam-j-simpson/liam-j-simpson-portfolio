import dotenv from 'dotenv'
dotenv.config()

import server from './server.ts'

console.log('🚀 SERVER STARTING UP!!!')
console.log('==========================')

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`listening on port ${port}`)
  console.log(`Environment: ${process.env.NODE_ENV}`)
})
