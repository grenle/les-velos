const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const db = require('../../db')

const {
    JWT_SECRET
} = process.env

router.post('/', async (req, res) => {
    const user = req.body
    const dbUser = db.saveUser(user)
    const { id, name } = dbUser
    const token = jwt.sign({id, name}, JWT_SECRET)
    res.json({success: true, name, token})
})

module.exports = router