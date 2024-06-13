const Controller = require('./Controller1.js');
const volunteerService = require('../Service/HelpReqest.js');

class HelpReqestController extends Controller {
    constructor() {
        console.log('in HelpReqestController');
        super(volunteerService);
    }
}

module.exports = new HelpReqestController();