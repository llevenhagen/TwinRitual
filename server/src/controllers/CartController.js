const models = require('../models')

module.exports = {
  async index (req, res) {
    console.log('looking at cart')
    try {
      const cart = await models.cart.findOne({
        where: {
          merchId: req.query.merchId,
          userId: req.query.userId
        }
      })
      res.send(cart || null)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the cart.'
      })
    }
  },
  async cart (req, res) {
    console.log(req.params, 'YOU ARE LOOKING AT THE CARRRRRRRRTTTTT')
    let userId = req.params.userId
    try {
      let cart = await models.cart.findAll({
        where: {
          userId: userId
        }
      })
      console.log(cart[0].merchId)
      let cartArray = []
      let objectArray = []
      for (let i = 0; i < cart.length; i++) {
        cartArray.push(cart[i].merchId)
      }
      for (let i = 0; i < cartArray.length; i++) {
        let item = await models.merch.findById(cartArray[i])
        objectArray.push(item)
      }
      console.log('this is objectarray', objectArray)
      res.send(objectArray)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the cart.'
      })
    }
  },
  async post (req, res) {
    console.log(req.body.params.merchId)
    try {
      const item = req.body.params
      const newItem = await models.cart.create({
        merchId: item.merchId,
        userId: item.userId
      })
      res.send(newItem)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occurred trying to add to cart.'
      })
    }
  },
  async delete (req, res) {
    console.log(req.params)
    try {
      const itemId = req.params.itemId
      const userId = req.params.userId
      // const item = models.cart.findById(itemId)
      // console.log(item)
      await models.cart.destroy({
        where: {
          merchId: itemId,
          userId: userId
        }
      })
      res.send(req.params)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to delete this item from your cart.'
      })
    }
  }
}
