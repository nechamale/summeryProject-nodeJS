const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    // _id:mongoose.ObjectId,
    volunteerId:Number  ,
    firstName: String,
    lastName: String,
    phone:String,
    specialization:String
});

const Volunteer = mongoose.model('volunteer', volunteerSchema);

module.exports = Volunteer;