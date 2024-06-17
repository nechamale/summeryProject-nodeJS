const Service = require('./Service.js');
const repo = require('../repositories/VolunreerRepo.js')
class VolunteerService extends Service {
    constructor() {
        console.log('in VolunteerService');
        super(repo);
    }
}

module.exports = new VolunteerService();