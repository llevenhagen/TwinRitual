const models = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const merch = await models.merch.findAll({
        limit: 20
      })
      res.send(merch)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the merch.'
      })
    }
  },
  async post (req, res) {
    try {
      const merch = await models.merch.create(req.body)
      res.send(merch)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying create merch.'
      })
    }
  }
}
