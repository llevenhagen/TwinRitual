const models = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const merch = await models.merch.findAll({
        where: {}
      })
      res.send(merch)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the merch.'
      })
    }
  },
  async show (req, res) {
    try {
      const item = await models.merch.findById(req.params.itemId)
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the item.'
      })
    }
  },
  async post (req, res) {
    try {
      const item = await models.merch.create(req.body)
      res.send(item)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying create this item.'
      })
    }
  },
  async put (req, res) {
    try {
      await models.merch.update(req.body, {
        where: {
          id: req.body.id
        }
      })
      console.log(req.body)
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurred trying to edit the item'
      })
    }
  },
  async delete (req, res) {
    try {
      console.log(req.params)
      await models.merch.destroy({
        where: {
          id: req.params.itemId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occurred trying to delete this item'
      })
    }
  }
}
