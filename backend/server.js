const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import mongoose library
const app = express();
const getFormattedTimestamp = require('./utils/timestamp.js');
const connectToDatabase = require('./DB/db_config.js');
const booksRoute = require('./routes/booksRoute.js');
require('dotenv').config();

app.use(express.json()); //middleware for parsing incoming request bodies
app.use(cors()) 

app.use('/books', booksRoute);
app.get('/', (req, res)  => {
  res.status(200).send('application route sucessfull response')
})

//console.log(process.env);
const port = process.env.PORT || 3000;
console.log(port);
//connectToDatabase(); // Call the function to connect to MongoDB
const reset = "\x1b[0m";
const timestamp = getFormattedTimestamp();
const url = `http://localhost:${port}`;
app.listen(port, () => {
    connectToDatabase(); // Call the function to connect to MongoDB
    console.log(`Run server on port --->\n${url}${reset}\n${timestamp}`);
});


