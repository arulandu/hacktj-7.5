const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    content: {
        type: String,
        default: "",
        required: true
    }
})

module.exports = mongoose.model('Messages', MessageSchema)