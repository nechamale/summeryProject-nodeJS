const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    // _id:mongoose.ObjectId,
    id:Number ,
    first_name: String,
    last_name: String,
    phone:String,
    specialization:String
});

const Volunteer = mongoose.model('volunteer', volunteerSchema);

module.exports = Volunteer;