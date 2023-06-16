const { Schema } = require('mongoose')

const commentSchema = new Schema (
{
    name: {type: String, required: true},
    comment:{type: String, required: true}, 
},
{
    timeseries: true
}

)

module.exports = commentSchema










