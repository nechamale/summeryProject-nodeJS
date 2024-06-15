const Service = require('./Service.js');
const repo = require('../repositories/HelpReqestRepo.js')
class HelpReqestService extends Service {
    constructor() {
        console.log('in HelpReqestService');
        super(repo);
    }

    // NoReply = () => {
    //     const allRquest = this.getAll();
    //     const noReply = allRquest.filter(req => req.status === "waiting");
    //     return noReply;
    // }

    async NoReply(query) {
        try {
            const allRquest = await this.getAll(query);
            const noReply = allRquest.filter(req => req.status === "waiting");
            return noReply;
        } catch (err) {
            console.log(err);
            throw Error('error in getAll::Service',);
        }
    }
}

module.exports = new HelpReqestService();