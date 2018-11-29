var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');

var authMiddleware = require('../middleware/authMiddleware.js');

router.get('/', function (req, res) {
	res.status(200).send({ message : "API server online" });
});

router.route('/users')
	.get(authMiddleware.isAuthenticated, userController.getList)
	
router.route('/users/:id')
	.get(authMiddleware.isAuthenticated, userController.getById)
	.put(authMiddleware.isAuthenticated, userController.update)
	.delete(authMiddleware.isAuthenticated, userController.delete);

module.exports = router;
