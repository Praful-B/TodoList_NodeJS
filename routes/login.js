const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');


router.get('/', auth,(req, res) => {
    res.render('login');
})


router.post('/', auth,(req, res) => {
    const { username, password } = req.body;
    res.redirect('/home');
})

module.exports = router;