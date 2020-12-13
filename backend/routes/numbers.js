const express = require('express');
const router = express.Router();
const Number = require('../models/Number');

// GET - returns all numbers in the numbers collection
router.get('/all', async (req, res) => {
    try {
        const numbers = await Number.find();
        res.json({
            "numbers": numbers
        })

    } catch (err) {
        res.json({
            message: err
        })
    }
})

// GET - returns all numbers with corresponding sent status in the numbers collection
router.get('/by-sent/:sent', async (req, res) => {
    try {
        var sentStatus = true
        if (req.params.sent == "false") {
            sentStatus = false
        }

        const numbers = await Number.find({
            sent: sentStatus
        })

        res.json({
            "numbers": numbers
        })

    } catch (err) {
        res.json({
            message: err
        })
    }
})

// POST - creates a number document in the numbers collection
router.post('/create/', async (req, res) => {
    const number = new Number({
        num: req.body.num,
        sent: false
    })

    try {
        const savedNumber = await number.save()
        res.json(savedNumber)
    } catch(err) {
        res.json({
            message: err
        })
    }
})

// POST - updates the send status of a given number document from _id in the numbers collection
router.post('/send/', async (req, res) => {
    try {
        const updatedNumber = await Number.findByIdAndUpdate(req.body._id,
            {
                "sent": true
            }
        )
        res.json(savedNumber)
    } catch(err) {
        res.json({
            message: err
        })
    }
})

module.exports = router