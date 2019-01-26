const request = require('request');

module.exports =  (req, res) => {

    request.get(req.xsuaa.url + '/userinfo', {
        auth: { 'bearer': req.authInfo.token }
    }, function (error, response, body) {
        let resp = JSON.parse(body);
        res.send(resp);
    })

};
