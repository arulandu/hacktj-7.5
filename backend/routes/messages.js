const express = require('express');
const router = express.Router();
const Message = require('../models/Message')

// GET - returns all messages in messages collection
router.get('/all', async (req, res) => {
    try {
        const messages = await Message.find()

        res.json({
            "messages": messages
        })
    } catch (er) {
        res.json({
            message: er
        })
    }
})

// GET - returns a random message from messages collection
router.get('/random', async (req, res) => {
    try {
        const msgCount = await Message.countDocuments()
        const random = await Message.findOne().skip(Math.floor(Math.random() * msgCount))

        res.json(random)
    } catch (er) {
        res.json({
            message: er
        })
    }
})

// POST - creates a message document in the messages collection
router.post('/create/', async (req, res) => {
    const message = new Message({
        content: req.body.content
    })

    try {
        const savedMessage = await message.save()
        res.json(savedMessage)

    } catch (er) {
        res.json({
            message: er
        })
    }
})

module.exports = router