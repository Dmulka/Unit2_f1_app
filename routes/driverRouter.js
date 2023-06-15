const Router = require('express').Router()
const controller = require('../controllers/driverControllers.js')

Router.get('/', controller.getAllDrivers)
Router.get('/:name', controller.getDriversByName)
Router.put('/', controller.createDriver)
Router.put('/:id', controller.updateDriver)
Router.delete('/:id', controller.deleteDriver)

module.exports = Router