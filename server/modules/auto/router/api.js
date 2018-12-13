const express = require('express');
var router = express.Router();

const vehicleControler = require('../controllers/vehicleController');
const serviceControler = require('../controllers/serviceContoller');
const reminderController = require('../controllers/reminderController');

router.route('/vehicle')
    .get(vehicleControler.getList)
    .post(vehicleControler.create);
router.route('/vehicle/:id')
    .get(vehicleControler.getById)
    .put(vehicleControler.update)
    .delete(vehicleControler.delete);

router.route('/service')
    .get(serviceControler.getList)
    .post(serviceControler.create);
router.route('/service/:id')
    .get(serviceControler.getById)
    .put(serviceControler.update)
    .delete(serviceControler.delete);

router.route('/reminder')
    .get(reminderController.getList)
    .post(reminderController.create);
router.route('/reminder/:id')
    .get(reminderController.getById)
    .put(reminderController.update)
    .delete(reminderController.delete);

module.exports = router;
