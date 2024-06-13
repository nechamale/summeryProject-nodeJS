const Repository = require('./Repository.js');
const HelpHeqest = require('../models/helpHeqest.model.js');

class HelpHeqestRepo extends Repository {
    constructor() {
        super(HelpHeqest);
    }
}

module.exports = new HelpHeqestRepo();