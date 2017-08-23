'use strict'

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.changeColumn('Items', 'ItemCost', {
      type: Sequelize.DECIMAL,
      allowNull: false
    })
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.changeColumn('Items', 'ItemCost', {
      type: Sequelize.DECIMAL,
      allowNull: true
    })
  }
}
