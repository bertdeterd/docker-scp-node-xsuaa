const main = require('express').Router();


main.use('/uaa', require('./uaa'));

module.exports = main;
