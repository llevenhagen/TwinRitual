const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const MerchController = require('./controllers/MerchController'
)
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
}
