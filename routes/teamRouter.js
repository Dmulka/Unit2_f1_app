const Router = require('express').Router()
const controller = require('../controllers/teamControllers.js')

Router.get('/', controller.getAllTeams)
Router.get('/:id', controller.getTeamsById)


module.exports = Router 