const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var api = require('./routes/api');
var apiAuto = require('./@sections/auto/router/api');

const app = express();

var MongoURI = process.env.Mongo_URI || 'mongodb://localhost/node-superhero';
mongoose.connect(MongoURI, { useNewUrlParser: true }, function(err, res) {
    if(res) {
        console.log(`Mongodb res: ${res.host}`);
    }
    if(err) {
        console.log(`Error connect to ${MongoURI}.${err}`);
    } else {
        console.log(`Mongodb connected succesfully to ${MongoURI}`);
    }
});

app.use(bodyParser.json());
app.use(cors());

app.use('/api/auto', apiAuto);

module.exports = app;
