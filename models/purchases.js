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
          Purchases.belongsTo(models.Items, { foreignkey: 'ItemId' })
        }
      }
    }
  )

  return Purchases
}
