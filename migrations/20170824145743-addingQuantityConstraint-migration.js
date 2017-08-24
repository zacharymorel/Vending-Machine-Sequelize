'use strict'

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.addConstraint('Items', ['Quantity'], {
      name: 'greateThanZeroForQuantity',
      type: 'check',
      where: {
        Quantity: { $gt: 0 }
      }
    })
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.removeConstraint('Items', 'greateThanZeroForQuantity')
  }
}
