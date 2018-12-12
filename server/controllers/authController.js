var crypto = require('crypto');
var async = require('async');
const jwt = require('jsonwebtoken');

const config = require('../config')
var mailer = require('../services/mailer');
var User = require('../models/User')

function jwtSignUser (user) {
	const ONE_WEEK = 60 * 60 * 24 * 7
	return jwt.sign(user, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	})
}

exports.register = function(req, res, next) { 
    const user = new User(req.body)
    User.findOne({ email: req.body.email }).exec().then( function(existingUser) {
        if(!existingUser) {
            user.save(function(err) {
                if(err) throw new Error(err);

                const userJson = user.toJSON()
                res.send({
                    user: userJson,
                    token: jwtSignUser(userJson)
                })
            });
        } else {
            return res.status(400).send({
                error: "This email account is already in use."
            })
        }
    })
    .catch(function (err) {
        console.log(err);
        return res.status(400).send({
            error: "There was a problem with creating your account."
        })
    });
}

exports.login = function(req, res, next){
    try {
        const {email, password} = req.body
        User.findOne({ email: req.body.email }, function(err, user){
            if(err) {
                return res.status(403).send({
                    error: 'An error occurred trying to log in'
                })
            }
            
            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                });
            }

            user.comparePassword(password, function(err, isMatch) {
                if (isMatch) {
                    const userJson = user.toJSON()
                    console.log(`Loggen in with ${email}`);
                    return res.send({
                        user: userJson,
                        token: jwtSignUser(userJson)
                    })
                } else {
                    return res.status(403).send({
                        error: 'The login information was incorrect'
                    });
                }
              });
        })
    } catch (err) {
        res.status(500).send({
            error: 'An error has occured trying to log in'
        });
        console.log(err);
    }
};

exports.forgot = function(req,res,next) {
    try {
        console.log('email received:', req.body.email);
        async.waterfall([
            function(done) {
                User.findOne({ email: req.body.email}).exec(function(err, user) {
                    if (user) {
                        done(err, user);
                    } else {
                        done('User not found.');
                    }
                });
            },
            function(user, done) {
                // create the random token
                crypto.randomBytes(20, function(err, buffer) {
                    var token = buffer.toString('hex');
                    done(err, user, token);
                })
            },
            function(user, token, done) {
                User.findByIdAndUpdate({ _id: user._id }, { resetPasswordToken: token, resetPasswordExpires: Date.now() + 86400000 }, { upsert: true, new: true }).exec(function(err, new_user) {
                    console.log(new_user);
                    done(err, token, new_user);
                });
            },
            function (token, user, done) {
                // send email with nodemail
                mailer.forgotPassword(req, req.body.email, token);
                console.log("Reset password token: ", token);
                return res.sendStatus(202);
            }
        ], function(err) {
            return res.status(422).json({ error: err })
        });
    } catch (err) {
        console.log('Error', err)
        res.status(500).send({
            error: 'An error has occured trying to reset your password'
        })
        
    }
};

exports.resetTokenValidation = function(req, res, next) {
    const query = req.query[0] ;// query = {sex:"female"}

    User.findOne({ resetPasswordToken: query, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
            return res.status(500).send({
                error: 'Password reset token is invalid or has expired.'
            });
        }
        return res.sendStatus(202); 
      });
};

exports.reset = function(req, res, next) {
    try {
        const query = req.body.token ;// query = {sex:"female"}
        console.log('token', query);
        User.findOne({
            resetPasswordToken: query,
            resetPasswordExpires: {
                $gt: Date.now()
            }
        }).exec(function(err, user) {
            if(!err && user) {
                if (req.body.password) {
                    user.password = req.body.password;
                    user.resetPasswordToken = undefined;
                    user.resetPasswordExpires = undefined;
                    user.save(function(err) {
                        if (err) {
                            if(err) throw new Error(err);
                        } else {
                            const userJson = user.toJSON()
                            return res.send({
                                user: userJson,
                                token: jwtSignUser(userJson)
                            })
                        }
                    });
                } else {
                    throw new Error(err);
                }
            } else {
                return res.status(403).send({
                    error: 'Password reset token is invalid or has expired.'
                })
            }
        });
    } catch (err) {
        console.log('Error', err)
        res.status(500).send({
            error: 'An error has occured trying to reset your password'
        })
    }
}

exports.changePassword = function(req, res, next) {
    try {
        User.findOne({ email: req.body.email }).exec().then(function(user) {
            if(user) {
                if (req.body.user_old_password) {
                    var password = req.body.user_old_password
                    user.comparePassword(password, function(err, isMatch) {
                        if (isMatch) {
                            user.password = req.body.user_new_password;
                            console.log(user.password)
                            user.save(function(err) {
                                if (err) {
                                    if(err) throw new Error(err);
                                } else {
                                    const userJson = user.toJSON()
                                    return res.send({
                                        user: userJson,
                                        token: jwtSignUser(userJson)
                                    })
                                }
                            });
                        } else {
                            return res.status(403).send({
                                error: 'The current password was incorrect'
                            });
                        }
                    });
                } else {
                    throw new Error(err);
                }
            }
        });
    } catch (err) {
        console.log('Error', err)
        res.status(500).send({
            error: 'An error has occured trying to change your password'
        })
    }

}
