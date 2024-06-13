const Service = require('./Service.js');
const repo = require('../repositories/LocationRepo.js')
class LocationService extends Service {
    constructor() {
        console.log('in locationService');
        super(repo);
    }
}

module.exports = new LocationService();