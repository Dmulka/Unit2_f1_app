const express = require('express')
const cors = require('cors')
const  PORT = 3001
const db = require('./db')
const AppRouter = require('./routes/AppRouter')


const app = express()
app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.use('/', AppRouter)



