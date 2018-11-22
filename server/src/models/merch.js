module.exports = (sequelize, DataTypes) => {
  const merch = sequelize.define('merch', {
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    inStock: DataTypes.BOOLEAN
  })
  return merch
}
