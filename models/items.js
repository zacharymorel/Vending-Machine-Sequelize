'use strict'
module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define(
    'Items',
    {
      nameOfItem: DataTypes.STRING,
      ItemCost: DataTypes.DECIMAL,
      Quantity: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  )
  return Items
}
