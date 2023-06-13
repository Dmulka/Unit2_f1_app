const Router = require('express').Router()

const DriverRouter = require('./driverRouter')
const TeamRouter = require('./teamRouter')

Router.use('/drivers', DriverRouter)
Router.use('/teams', TeamRouter)

module.exports = Router 