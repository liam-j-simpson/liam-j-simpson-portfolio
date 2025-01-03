import server from './server.ts'

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
  console.log(`Environment: ${process.env.NODE_ENV}`)
})
