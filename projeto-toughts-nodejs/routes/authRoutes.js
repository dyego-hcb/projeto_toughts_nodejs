const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');

router.get('/login', AuthController.showLogin);
router.get('/register', AuthController.showRegister);

module.exports = router;
