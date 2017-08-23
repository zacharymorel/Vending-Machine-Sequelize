'use strict'

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.addColumn('Purchases', 'ChangeBack', {
      type: Sequelize.DECIMAL
    })
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.removeColumn('Purchases', 'ChangeBack')
  }
}
