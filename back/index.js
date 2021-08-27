require('dotenv').config()

const express = require('express')
const cors = require('cors')

const users = require('./controllers/users')
const auth = require('./controllers/auth')
const files = require('./controllers/files')

const app = express()
app.use(cors())
app.use(express.json())

// you baby the ronettes christmas 1965 music video
// the ronettes be my baby live @ the moulin rouge club

//curl -d '{"email":"g@g.com", "password":"123"}' -H "Content-Type: application/json" -X POST http://localhost:8000/auth && echo
//curl -d '{"email":"g@g.com", "password":"123", "name": "whoop"}' -H "Content-Type: application/json" -X POST http://localhost:8000/users && echo
// valid token
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6Indob29wIiwiaWF0IjoxNjI5OTI0NDc4fQ.ThIZBjilQT2PUx_TbQF1_-J5qh74CivZ39gA0-d_-8I
//curl -d '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6Indob29wIiwiaWF0IjoxNjI5OTI0NDc4fQ.ThIZBjilQT2PUx_TbQF1_-J5qh74CivZ39gA0-d_-8I"}' -H "Content-Type: application/json" -X GET http://localhost:8000/files && echo

const {
    PROJECT_NAME,
    HTTP_PORT,
    HTTP_HOST,
} = process.env

app.listen(Number(HTTP_PORT), () => {
    console.log(`[HTTP] listening on port ${HTTP_PORT}`)
})

app.get('/', (req, res) => {
    res.json({sucess: true, payload: `welcome ${PROJECT_NAME} API`})
})

app.use('/users', users)
app.use('/auth', auth)
app.use('/files', files)