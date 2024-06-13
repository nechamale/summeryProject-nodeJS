const Controller = require('./Controller1.js');
const volunteerService = require('../Service/VolunteerService.js');

class VolunteersController extends Controller {
    constructor() {
        console.log('in volunteerController');
        super(volunteerService);
    }
}

module.exports = new VolunteersController();