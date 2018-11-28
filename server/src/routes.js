const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const MerchController = require('./controllers/MerchController'
)
const CartController = require('./controllers/CartController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/merch',
    MerchController.index)

  app.get('/merch/:itemId',
    MerchController.show)

  app.post('/merch',
    MerchController.post)

  app.put('/merch/:itemId',
    MerchController.put)

  app.delete('/merch/:itemId',
    MerchController.delete)

  app.get('/cart',
    CartController.index)

  app.post('/cart',
    CartController.post)

  app.delete('/cart/:userId/:itemId',
    CartController.delete)

  app.get('/cart/:userId',
    CartController.cart)
}
