const express = require('express')
const customer = express.Router()
const models = require('../models')

customer.get('/api/customer/items', (request, response) => {
  models.Items
    .findAll()
    .then(items => {
      response.json(items)
    })
    .catch(err => {
      console.log(err)
    })
})

customer.post('/api/customer/items:ItemId/puschases', (request, response) => {
  // Purchasing an Item
})
module.exports = customer
