const { Schema }= require('mongoose')

const teamSchema = new Schema (
    {
        name: {type: String, require: true},
        img: {type: String, require: true},
        current_rank: {type: Number, require: true},
        points: {type: Number, require: true},
        drivers: {type: String, require: true},
        Bio: {type: String, require: true}

    },
    {
        timestamps: true 
    }
)



module.exports = teamSchema 
