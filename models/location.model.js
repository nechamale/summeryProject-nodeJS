const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    locationId: Int32Array,
    location_name: String
});

const Location = mongoose.model('location', locationSchema);

module.exports = Location;