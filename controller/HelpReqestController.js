const Controller = require('./Controller1.js');
const volunteerService = require('../Service/HelpReqest.js');

class HelpReqestController extends Controller {
    constructor() {
        console.log('in HelpReqestController');
        super(volunteerService);
    }

    // NoReply = () => {
    //     return volunteerService.NoReply;
    // } 

    async NoReply(req, res,next) {
        try {
            const result = await volunteerService.NoReply(req.query);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new HelpReqestController();