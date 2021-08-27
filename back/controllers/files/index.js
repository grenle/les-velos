const express = require('express')
const jwt = require('jsonwebtoken')

const utils = require('../utils')

const db = require('../../db')

const router = express.Router()

const {
    JWT_SECRET
} = process.env

router.use('/', [utils.weaveUser, utils.userOrQuit])

router.get('/', async (req, res) => {
    const files = db.getFilesByUserId(req.user.id)
    res.json({success: true, payload: files})
})

module.exports = router

