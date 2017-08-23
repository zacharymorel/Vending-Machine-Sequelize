'use strict'
module.exports = function(sequelize, DataTypes) {
  var Purchases = sequelize.define(
    'Purchases',
    {
      ItemId: DataTypes.INTEGER,
      Purchase: DataTypes.DATE,
      MoneyInMachine: DataTypes.DECIMAL,
      ChangeBack: DataTypes.DECIMAL
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  )

  return Purchases
}
