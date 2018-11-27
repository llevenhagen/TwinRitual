module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {})

  cart.associate = function (models) {
    cart.belongsTo(models.user)
    cart.belongsTo(models.merch)
  }

  return cart
}
