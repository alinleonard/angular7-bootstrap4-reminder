const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    
    name: String,
    url: String,

    created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Upload', schema);
