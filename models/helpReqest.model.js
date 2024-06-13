const mongoose = require('mongoose');

const helpSchema = new mongoose.Schema({
    id: Number,
    location: Number,
    problem: String,
    phone: String,
    status: String,
    numOfPepole: Number,
    priority: {
        type: String,
        enum:["low", "medium", "high", "critical"]
    },
    volunteer: Number
});

const Help = mongoose.model('help_requests', helpSchema);

module.exports = Help;