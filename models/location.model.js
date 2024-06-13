const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    id: Number,
    location_name: String
});

const Location = mongoose.model('location', locationSchema);

module.exports = Location;