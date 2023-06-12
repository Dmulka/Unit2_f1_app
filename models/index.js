const mongoose = require('mongoose')
const teamSchema = require('./teams')
const driverSchema = require('./drivers')

const Teams = mongoose.model('Teams', teamSchema)
const Drivers = mongoose.model('Drivers', driverSchema)

module.exports = {
    Teams,
    Drivers
}



