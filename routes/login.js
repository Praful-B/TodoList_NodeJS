const express = require('express');
const router = express.Router();
const auth = require('/middleware/auth');


router.get('/', auth,(req, res) => {
    res.render('/login');
})

module.exports = router;