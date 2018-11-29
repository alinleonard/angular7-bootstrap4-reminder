var nodemailer = require('nodemailer');
const config = require('../config')

var transporter = nodemailer.createTransport({
    service: config.mail.service,
    auth: {
           user: config.mail.auth_user,
           pass: config.mail.auth_pass
       }
});

// var smtpTransport = nodemailer.createTransport('SMTP', {
//     service: 'SendGrid',
//     auth: {
//       user: '!!! YOUR SENDGRID USERNAME !!!',
//       pass: '!!! YOUR SENDGRID PASSWORD !!!'
//     }
//   });

exports.forgotPassword = function(req, to, token) {
    const mailOptions = {
        from: '*', // sender address
        to: req.body.email, // list of receivers
        subject: '[Project] Password Reset', // Subject line
        html: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://' + req.headers.host + '/reset/' + token + '\n\n' +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n'// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
};

exports.accountVerification = function(to) {

}
