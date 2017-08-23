'use strict'

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.changeColumn('Items', 'nameOfItem', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.changeColumn('Items', 'nameOfItem', {
      type: Sequelize.STRING,
      allowNull: true
    })
  }
}
