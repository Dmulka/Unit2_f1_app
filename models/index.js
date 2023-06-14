const mongoose = require('mongoose')
const teamSchema = require('./teams')
const driverSchema = require('./drivers')
const commentSchema = require('./comment')

const Teams = mongoose.model('Teams', teamSchema)
const Drivers = mongoose.model('Drivers', driverSchema)
const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
    Teams,
    Drivers,
    Comment 
}



