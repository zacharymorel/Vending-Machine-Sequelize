const express = require('express')
const vendor = express.Router()
const models = require('../models')

// GETTING ALL PURCHASES BY API
vendor.get('/api/vendor/purchases', (request, response) => {
  models.Purchases
    .findAll()
    .then(purchases => {
      response.json(purchases)
    })
    .catch(err => {
      console.log(err)
    })
})
// SUMING ALL THE COLUNM MoneyInMachine
vendor.get('/api/vendor/money', (request, response) => {
  models.Purchases.sum('MoneyInMachine').then(sum => {
    response.json(sum)
  })
})

// Create a new item not previously exsisting.
vendor.post('/api/vendor/items', (request, response) => {
  const item = models.Items
    .build({
      nameOfItem: request.body.nameOfItem,
      ItemCost: request.body.ItemCost,
      Quantity: request.body.Quantity
    })
    .save()
    .then(item => {
      response.json(item)
    })
})

// UPDATE AN ITEM, UQANTITY, COST
vendor.put('/api/vendor/items/:itemId', (request, response) => {})
module.exports = vendor
