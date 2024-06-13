const Controller = require('./Controller1.js');
const volunteerService = require('../Service/location.js');

class LocationController extends Controller {
    constructor() {
        console.log('in LocationController');
        super(volunteerService);
    }
}

module.exports = new LocationController();