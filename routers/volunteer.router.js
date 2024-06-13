const express = require('express');
const router = express.Router();
const controller = require('../controller/VoluteerController');
//api/volunteers/
router.get('/', controller.getAll);

router.get('/:volunteerId', controller.getId)

router.post('/', controller.insert)

router.put('/:volunteerId', controller.update)

router.delete('/:volunteerId', controller.delete)

module.exports = router;