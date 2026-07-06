const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require("./db/db");
connectToDb();
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("hello World");
});

// Suppress favicon.ico 404 error in browser
app.get('/favicon.ico', (req, res) => res.status(204).end());


app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
module.exports = app;

