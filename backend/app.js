// import packages + create setup variables
require('dotenv/config');
const port = process.env.PORT || 3000;

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Add middle-wares
app.use(cors())
app.use(bodyParser.json())

app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))
app.use('/project-ideas', require('./routes/project-ideas'))

app.get('/', async (req, res) => {
    res.send('<p>HOME</p>');
})

// Connect to db
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false}, async () => {
    console.log('connected to DB!');
})

// Listen on the appropriate port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});