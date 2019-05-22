const express = require('express')
// console.log(express)
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/contacts-db')

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database connected')
})

const contactRoute = require('./api/routes/contactRoutes')
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 7000

// app.use((req, res, next) => {
//     console.log('middleware function')
//     next()
// })

app.use('/api/contacts', contactRoute)

app.get('/', (req, res) => {
    res.send('<div><h1>Welcome to express server</h1><p>Welcome Maruf</p></div>')
})


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})