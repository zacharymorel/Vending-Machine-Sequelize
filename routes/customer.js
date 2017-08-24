const express = require('express')
const customer = express.Router()
const models = require('../models')

// SHOWING ALL THE ITEM OPTIONS FOR CUSTOMER
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
    if (item.Quantity > 0) {
      let changeBack = request.body.amount - item.ItemCost
      const purchase = models.Purchases.build({
        MoneyInMachine: item.ItemCost,
        ItemId: item.id,
        Purchase: Date.now(),
        ChangeBack: changeBack
      })

      item.Quantity -= 1
      item.save().then(item => {})
      purchase.save().then(moneyReturnToUser => {
        response.json(moneyReturnToUser)
      })
    } else {
      response.json('sorry, we do not have this item in our inventory.')
    }
  })
  // <-- SELECT *
  // <--- look at request body, and subract amound given from cost *
  // <--- take that number and INSERT a purchase *
  // <--- Minus purchase quant: 1 from quanity when purchasing *
  // <--- Add constraint to Quanity in Item table so that if 0 quanity, transaction rolls back to start.
  //  ^^HARD MODE
  // response.json(purchase) <-- then respond with the purchase *
})
module.exports = customer
