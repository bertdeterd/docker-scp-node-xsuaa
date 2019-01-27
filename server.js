const express = require('express');
const passport = require('passport');
////const xsenv = require('@sap/xsenv');
const oauth = require('oauth');
const path = require('path');
//const JWTStrategy = require('@sap/xssec').JWTStrategy;
//const scpXsuaa = require("scp-cf-xsuaa");

var uaaroutes = require('./server/routes/uaa');

const app = express();

//const services = xsenv.getServices({uaa: {tag:'xsuaa'}});

//passport.use(new JWTStrategy(services.uaa));
//app.use(passport.initialize());
//app.use(passport.authenticate('JWT', { session: false }));

//app.all('/uaa/*', scpXsuaa );
app.use('/uaa',uaaroutes);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`this app is listening on port ${port}`);
});