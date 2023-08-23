const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');

const db = require('./configs/dbConfig');
const quotesRouter = require('./Routes/quoteRouter');



const app = express()
    // Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// App Home Routes
app.get('/', (req, res) => {
    res.send('Welcome to the quotes API');
});

// Register Routes
app.use('/quotes', quotesRouter);

// Calling the db connection function.
db();
module.exports = app;