const { Schema } = require('mongoose')

const driverSchema = new Schema (
    {
        name: {type: String, required: true },
        current_ranking: {type: Number, required: true},
        points: {type: String, required: true},
        img: {type: String, required: true},
        team: {type: Schema.Types.ObjectId, ref: "Teams"}

    },
    {
        timestamps: true
    }

)

module.exports = driverSchema