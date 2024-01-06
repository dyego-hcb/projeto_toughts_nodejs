const express = require('express');
const router = express.Router();

const ToughtController = require('../controllers/ToughtController');

const checkAuth = require('../helpers/auth').checkAuth;

router.get('/dashboard', checkAuth, ToughtController.showDashboard);
router.get('/', ToughtController.showToughts);

module.exports = router;