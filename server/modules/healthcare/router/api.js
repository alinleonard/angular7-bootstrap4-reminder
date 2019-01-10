const express = require('express');
var router = express.Router();

const documentController = require('../controllers/documentController');

router.route('/document')
    .get(documentController.getList)
    .post(documentController.create);
router.route('/document/:id')
    .get(documentController.getById)
    .put(documentController.update)
    .delete(documentController.delete);

module.exports = router;
