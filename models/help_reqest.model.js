const mongoose = require('mongoose');

const helpSchema = new mongoose.Schema({
    helpId: Int32Array,
    location: Int32Array,
    problem: String,
    phone: String,
    status: String,
    numOfPepole: Int32Array,
    priority: Int32Array,
    volunteer: Int32Array
});

const Help = mongoose.model('help', helpSchema);

module.exports = Help;