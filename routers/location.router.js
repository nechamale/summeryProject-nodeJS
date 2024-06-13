const express = require('express');
const router = express.Router();
const controller = require('../controller/LocationController.js');
//api/Locations/
router.get('/', controller.getAll);

router.get('/:id', controller.getId);

router.post('/', controller.insert);

router.put('/:id', controller.update);

router.delete('/:id', controller.delete);

module.exports = router;