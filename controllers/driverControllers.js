const db = require('../db')
const { Drivers } = require('../models')


    const getAllDrivers = async (req, res) => {
        const everyDriver = await Drivers.find()
        res.json(everyDriver)
    }

    const getDriversDecendin = async (req, res) => {
        const hightLow = await Drivers.find().sort({current_ranking: 1})
        console.log(hightLow)
        res.json(hightLow)
    }

    const getDriversById  = async (req, res) => {
        try{
            const {id} = req.params
            const driverId = await Drivers.findById(id)
            if (!driverId) throw Error('driver not found!')
            res.json(driverId)
        } catch (e){
            console.log(e)
            res.send('drive not found')
        }
    }


module.exports = {
    getAllDrivers,
    getDriversDecendin,
    getDriversById

}
