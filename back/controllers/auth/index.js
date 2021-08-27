const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const db = require('../../db')

const router = express.Router()

const {
    JWT_SECRET
} = process.env

router.post('/', async (req, res) => {
    const { email, password } = req.body
    console.log('post /auth')
    console.log(email, password)
    const maybeUser = db.getUserByEmail(email)
    const passwordOk = await bcrypt.compare(password, maybeUser.password)
    if(maybeUser && passwordOk){
        const id = maybeUser.id
        const name = maybeUser.name
        const token = jwt.sign({id}, JWT_SECRET)
        res.json({success: true, token, name})
    }else{
        res.json({success: false, payload: 'nope'})
    }
})

module.exports = router

