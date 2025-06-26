const express = require('express');
middleware = express.Router();



module.exports = function auth(req, res, next)  {
    next();
}