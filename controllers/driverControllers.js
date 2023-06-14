const getCRUD = require('./controllers/crudControllers')
const { Drivers } = require('../models')


////create/////

const createDriver = async (req, res) => {
    getCRUD.createObject(req, res, Drivers);
};

////update/////

const updateDriver = async (req, res) => {
    getCRUD.updateObjectByID(req, res, Drivers);
};

/////// Delete //////
const deleteDriver = async (req, res) => {
    someCRUD.deleteObjectByID(req, res, Drivers);
};


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
    getDriversById,
    createDriver,
    updateDriver,
    deleteDriver,
}
