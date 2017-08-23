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

customer.post('/api/customer/items/:id/purchases', (request, response) => {
  // Purchasing an Item // <-- SELECT
  models.Items.findById(request.params.id).then(item => {
    let userMoney = request.body.amount - item.ItemCost
    console.log(request.body.amount, item.ItemCost)
    const purchase = models.Purchases.build({
      MoneyInMachine: userMoney,
      ItemId: item.id
    })
    purchase.save().then(moneyReturnToUser => {
      response.json(moneyReturnToUser)
    })
  })

  // <--- look at request body, and subract amound given from cost
  // <--- take that number and INSERT a purchase
  // response.json(purchase) <-- then respond with the purchase
})
module.exports = customer
