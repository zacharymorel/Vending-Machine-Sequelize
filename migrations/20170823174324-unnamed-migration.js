'use strict'

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.changeColumn('Items', 'Quantity', {
      type: Sequelize.INTEGER,
      allowNull: false
    })
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.changeColumn('Items', 'Quantity', {
      type: Sequelize.INTEGER,
      allowNull: true
    })
  }
}
