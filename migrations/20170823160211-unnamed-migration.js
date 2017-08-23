'use strict'

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.addConstraint('Purchases', ['ItemId'], {
      type: 'FOREIGN KEY',
      name: 'Purchases_ItemId_FK',
      references: {
        table: 'Items',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.removeConstraint('Purchases', 'Purchases_ItemId_FK')
  }
}
