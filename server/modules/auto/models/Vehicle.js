const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    type: String,
    name: { type: String },
    manufacturer: { type: String },
    model: { type: String },
    plate: { type: String },
    year: { type: String },
    chasis: { type: String },
    vin: { type: String },
    note: { type: String },
    
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vehicle', schema);