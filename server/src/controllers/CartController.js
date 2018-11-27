const models = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const cart = await models.cart.findAll({
        where: {
          userId: req.query.userId
        }
      })
      res.send(cart)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the cart.'
      })
    }
  },
  async show (req, res) {
    try {
      let cart = await models.cart.findOne({
        where: {
          merchId: req.query.merchId
        }
      })
      if (!cart.userId) {
        cart = false
      }
      res.send(cart)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the cart.'
      })
    }
  }
}
