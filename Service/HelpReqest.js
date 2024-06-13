const Service = require('./Service.js');
const repo = require('../repositories/HelpReqestRepo.js')
class HelpReqestService extends Service {
    constructor() {
        console.log('in HelpReqestService');
        super(repo);
    }
}

module.exports = new HelpReqestService();