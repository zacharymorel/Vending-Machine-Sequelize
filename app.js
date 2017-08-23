const express = require('express')
const bodyParser = require('body-parser')
const customer = require('./routes/customer')
const vendor = require('./routes/vendor')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.use(customer)
app.use(vendor)

app.listen(3000, () => {
  console.log("We're listening on 3000!")
})
