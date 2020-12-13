const mongoose = require('mongoose')

const NumberSchema = mongoose.Schema({
    num: {
        type: String,
        required: true
    },
    sent: {
        type: Boolean,
        default: false,
        required: true
    }
})

module.exports = mongoose.model('Numbers', NumberSchema)