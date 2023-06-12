const express = require('express')
const cors = require('cors')
const  PORT = 3001
const db = require('./db')


const app = express()
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('This is rooot!')

})