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

customer.post('/api/customer/items/:itemId/purchases', (request, response) => {
  // Purchasing an Item
  models.Items.findById(request.params.itemId).then(item => {
    let changeBack = request.body.amount - item.ItemCost
    // console.log(request.body.amount, item.ItemCost)
    const purchase = models.Purchases.build({
      MoneyInMachine: item.ItemCost,
      ItemId: item.id,
      Purchase: Date.now()
    })
    purchase.save().then(moneyReturnToUser => {
      response.json(moneyReturnToUser)
    })
  })
  // <-- SELECT
  // <--- look at request body, and subract amound given from cost
  // <--- take that number and INSERT a purchase
  // response.json(purchase) <-- then respond with the purchase
})
module.exports = customer
