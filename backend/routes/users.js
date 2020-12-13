const express = require('express');
const router = express.Router();
const generateToken = require('../lib/generateToken');
const User = require('../models/User');

// POST - creates a message document in the messages collection
router.post('/sign-up/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        institution: req.body.institution,

    })

    try {
        const findUsersWithUsername = await User.findOne({
            'username': req.body.username
        })

        if(findUsersWithUsername){
            throw Error('username already found')
        }

        const savedUser = await user.save()
        res.json({
            savedUser: savedUser,
            token: generateToken(req.body.username),
            success: true
        })

    } catch (er) {
        console.log(er);
        res.json({
            message: er.toString(),
            success: false
        })
    }
})

module.exports = router