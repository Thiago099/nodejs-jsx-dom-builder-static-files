import express from 'express'
const app = express()
const port = 3000

app.use(express.static('./dist'))

app.get('/api', (req, res) => {
  res.send({ message: 'Hello from Express API!' })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})