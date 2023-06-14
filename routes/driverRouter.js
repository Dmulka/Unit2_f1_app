const Router = require('express').Router()
const controller = require('../controllers/driverControllers.js')

Router.get('/', controller.getAllDrivers)
Router.get('/:id', controller.getDriversById)

module.exports = Router