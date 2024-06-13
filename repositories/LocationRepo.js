const Repository = require('./Repository.js');
const HelpHeqest = require('../models/location.model.js');

class HelpHeqestRepo extends Repository {
    constructor() {
        super(HelpHeqest);
    }
}

module.exports = new HelpHeqestRepo();