const uaa = require('express').Router();

uaa.use('/userinfo', require('./userinfo'));

module.exports = uaa;
