const models = require('../src/models')

const Promise = require('bluebird')
const items = require('./merch.json')
const users = require('./users.json')
const cart = require('./cart.json')

models.sequelize.sync({ force: true })
  .then(async function () {
    await Promise.all(
      users.map(user => {
        models.user.create(user)
      })
    )

    await Promise.all(
      items.map(item => {
        models.merch.create(item)
      })
    )
    await Promise.all(
      cart.map(cartitem => {
        models.cart.create(cartitem)
      })
    )
  })
