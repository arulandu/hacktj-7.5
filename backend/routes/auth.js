const express = require('express');
const router = express.Router();
const User = require('../models/User')
const generateToken = require('../lib/generateToken')

// POST - creates a message document in the messages collection
router.post('/login/', async (req, res) => {
    let username = req.body.username;

    try {
        if(!username){
            throw Error("no username provided")
        }

        res.json({
            token: generateToken(username),
            success: true,
        })

    } catch (er) {
        res.json({
            message: er
        })
    }
})

module.exports = router