const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    uploadId: { type: mongoose.Schema.Types.ObjectId, ref: 'Upload'},
    
    note: { type: String },

    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Document', schema);