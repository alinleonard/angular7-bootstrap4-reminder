const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle'},
    
    date: { type: Date },
    tachometer: { type: Number },
    service: [{
        name: { type: String },
        value: { type: Number },
        currency: { type: String }
    }],
    location: { type: String },
    note: { type: String },
    
    created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Service', schema);