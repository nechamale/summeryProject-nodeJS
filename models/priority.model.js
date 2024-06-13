const mongoose = require('mongoose');

const prioritySchema = new mongoose.Schema({
    priorityId:Int32Array,
    priority_name: String
});

const Priority = mongoose.model('priority', prioritySchema);

module.exports = Priority;