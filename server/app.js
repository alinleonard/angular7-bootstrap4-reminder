const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var cookieParser = require('cookie-parser');

// Auth
var session = require('express-session');

const config = require('./config');

// =================================================================
// routes ==========================================================
// =================================================================
var api = require('./modules/core/routes/api');
var fleet_manageAPI = require('./modules/fleet-manage/router/api');

const app = express();

//Connect to MongoDB
var MongoURI = config.db.MongoURI;
mongoose.Promise = require('bluebird');
mongoose.connect(MongoURI , { useNewUrlParser: true } , function(err, res){
  if(res){
    console.log("Mongodb res: ", res.host);
  }
  if(err) {
    console.log('Error connect to: ' + MongoURI + '.' + err);
  } else {
    console.log('MongoDB connected successfully to ' + MongoURI);
  }
});

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use(session({
  secret: 'my app secret key', // help crypt sessions
  resave: true, // updates session on each page view even if it did not change
  saveUninitialized: false // sessions are not stored if they are empty
}));


app.use('/api', api);
app.use('/api/auth', api);

app.use('/api/fleet-manage', fleet_manageAPI);

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: {}
//     });
// });

module.exports = app;
