'use strict'
module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define(
    'Items',
    {
      nameOfItem: DataTypes.STRING,
      ItemCost: DataTypes.DECIMAL,
      Quantity: {
        type: DataTypes.INTEGER,
        valdate: { min: 0 }
      }
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
