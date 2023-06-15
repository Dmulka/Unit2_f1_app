const Router = require('express').Router()

const DriverRouter = require('./driverRouter')
const TeamRouter = require('./teamRouter')
const CommentRouter = require('./commentRouter')



Router.use('/drivers', DriverRouter)
Router.use('/teams', TeamRouter)
Router.use('/comment',CommentRouter)


module.exports = Router 