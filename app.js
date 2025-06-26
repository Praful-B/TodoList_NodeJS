const express = require('express');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const home_route = require('./routes/home');
const login_route = require('./routes/login');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/home', home_route);
app.use('/login', login_route);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.redirect('/login');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})