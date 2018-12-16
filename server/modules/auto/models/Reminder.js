const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle'},
    
    type: { type: String },
    name: { type: String },
    repeat: { type: Boolean },
    trigger: {
        tachometer: { type: Number },
        date: { type: Date }
    },
    note: { type: String },

    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reminder', schema);