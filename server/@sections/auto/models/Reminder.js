const mongoose = require('mongoose');

const schema = new mongoose.Schema({
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