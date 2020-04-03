const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const router = require('./router')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use('/', router)

const server = app.listen(18082, () => {
  const {
    address,
    port
  } = server.address()
  console.log('Http Server is running on http://%s:%s', address, port)
})
