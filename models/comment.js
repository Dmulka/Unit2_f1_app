const { Schema } = require('mongoose')

const commentSchema = new Schema (
{
    name: {type: String, required: true},
    team: {type: Schema.Types.ObjectId, ref: "Teams"},
    driver: {type: Schema.Types.ObjectId, ref: "Drivers"},
    driver_comment:{type: String, required: true}, 
},
{
    timeseries: true
}

)

module.exports = commentSchema










