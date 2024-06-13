const Repository = require('./Repository.js');
const helpHeqest = require('../models/helpHeqest.model.js');

class helpHeqestRepo extends Repository {
    constructor() {
        super(helpHeqest);
    }
}

module.exports = new helpHeqestRepo();