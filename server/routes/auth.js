var express = require('express');
var router = express.Router();

var authController = require('../controllers/authController.js');
var authMiddleware = require('../middleware/authMiddleware.js');

router.route('/login')
	.post(authController.login)

router.route('/register')
	.post(authController.register)

router.route('/forgot')
	.post(authController.forgot)
// /api/reset?token=
router.route('/reset')
	.get(authController.resetTokenValidation)
	.post(authController.reset)

router.route('/changePassword')
	.post(authMiddleware.isAuthenticated, authController.changePassword)

module.exports = router;
