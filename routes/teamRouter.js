const Router = require('express').Router()
const controller = require('../controllers/teamControllers.js')

Router.get('/', controller.getAllTeams)
Router.get('/:name', controller.getTeamsByName)
Router.put('/', controller.createTeam)
Router.post('/:id', controller.updateTeam)
Router.delete('/:id', controller.deleteTeam)

module.exports = Router 