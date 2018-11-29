const jwt = require('jsonwebtoken')
const config = require('../config')

exports.isAuthenticated = function(req, res, next){
    var token = req.body.token || req.query.token || req.headers['token'];
    if (token) {
        jwt.verify(token, config.authentication.jwtSecret, function(err, token) {
            if(err) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                });
            } else {
                return next()
            }
        });
        
    } else {
        console.log("No  token")
        return res.status(403).send({
            error: 'The login information was incorrect'
        });
    }
};
