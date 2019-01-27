const request = require('request');

module.exports =  (req, res) => {

    let body = {};
    body.username = "Bert Deterd";

    let resp = JSON.stringify(body);
    res.send(resp);

/*
    request.get(req.xsuaa.url + '/userinfo', {
        auth: { 'bearer': req.authInfo.token }
    }, function (error, response, body) {
        let resp = JSON.parse(body);
        res.send(resp);
    })
    */

};
