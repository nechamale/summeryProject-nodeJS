const Repository = require('./Repository.js');
const helpHeqest = require('../models/helpReqest.model.js');

class helpHeqestRepo extends Repository {
    constructor() {
        console.log('in helpReqest repo')
        super(helpHeqest);
    }
}

module.exports = new helpHeqestRepo();