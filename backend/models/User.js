const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        default: "",
        required: true
    },
    password: {
        type: String,
        default: "",
        required: true
    },
    email: {
        type: String,
        default: "",
        required: true
    },
    name: {
        type: String,
        default: "",
        required: true
    },
    institution: {
        type: String,
        default: "",
        required: false
    },
})

module.exports = mongoose.model('users', UserSchema)