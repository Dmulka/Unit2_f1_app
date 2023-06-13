const Router = require('express').Router()
const controller = require('../controllers/driverControllers.js')

Router.get('/drivers', controller.getAllDrivers)
Router.get('/drivers/:id', controller.getDriversById)

module.exports = Router