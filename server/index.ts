import app from './server'

const PORT = process.env.PORT || 3000

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server ready on port', PORT)
})

export default app
