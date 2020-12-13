const jwt = require('jsonwebtoken')

function generateToken(username) {
    return jwt.sign(
        {
            username: username
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: '24h'
        })
}

module.exports = generateToken