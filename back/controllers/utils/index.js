const db = require('../../db')

const jwt = require('jsonwebtoken')

const {
    JWT_SECRET
} = process.env

function weaveUser(req, res, next){
    const { token } = req.body
    const { id } = jwt.verify(token, JWT_SECRET)
    req.user = db.getUserById(String(id))
    next()
}

function userOrQuit(req, res, next){
    if(req.user){
        next()
    }else{
        res.json({success: false, payload: 'nope'})
    }
}

module.exports = {
    weaveUser,
    userOrQuit,
}