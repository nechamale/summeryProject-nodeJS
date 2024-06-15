const express = require('express');
const router = express.Router();
const controller = require('../controller/HelpReqestController.js');
//api/helpReqests/
router.get('/', controller.getAll);

router.get('/noReply', controller.NoReply);

router.get('/:id', controller.getId)

router.post('/', controller.insert)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router;