const gertCRUD = require('../controllers/crudControllers')
const { Teams } = require('../models')


////create/////

const createTeam = async (req, res) => {
    getCRUD.createObject(req, res, Teams);
};

////update/////

const updateTeam = async (req, res) => {
    getCRUD.updateObjectByID(req, res, Teams);
};

/////// Delete //////
const deleteTeam = async (req, res) => {
    someCRUD.deleteObjectByID(req, res, Teams);
};


const getAllTeams = async (req, res) => {
    const everyTeam = await Teams.find()
    res.json(everyTeam)
}

const getTeamsDecending = async (req, res) => {
    const hightLow = await Teams.find().sort({current_rank: 1})
    console.log(hightLow)
    res.json(hightLow)
}

    const getTeamsByName  = async (req, res) => {
        try{
            const {name}= req.params
            const teamId = await Teams.findOne({name})
            if (!teamId) throw Error('team not found!')
            res.json(teamId)
        } catch (e){
            console.log(e)
            res.send('team not found ')
        }
    }


module.exports = {
    getAllTeams,
    getTeamsDecending,
    getTeamsByName,
    createTeam,
    updateTeam,
    deleteTeam
    
}


// const run = async () => {
//     await getTeamsDecending()
//     db.clsoe()
// }

// run()