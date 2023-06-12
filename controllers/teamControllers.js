const db = require('../db')
const { Teams } = require('../models')



    const getAllTeams = async (req, res) => {
        const everyTeam = await Teams.find()
        res.json(everyTeam)
    }

    const getTeamsDecending = async (req, res) => {
        const hightLow = await Teams.find().sort({current_rank: 1})
        console.log(hightLow)
        res.json(hightLow)
    }

    const getTeamsById  = async (req, res) => {
        try{
            const {id} = req.params
            const teamId = await Teams.findById(_id)
            if (!movie) throw Error('team not found!')
            res.json(teamId)
        } catch (e){
            console.log(e)
            res.send('team not found ')
        }
    }


module.exports = {
    getAllTeams,
    getTeamsDecending,
    getTeamsById,
}


// const run = async () => {
//     await getTeamsDecending()
//     db.clsoe()
// }

// run()