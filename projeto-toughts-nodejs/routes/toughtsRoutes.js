const express = require('express');
const router = express.Router();

const ToughtController = require('../controllers/ToughtController');

const checkAuth = require('../helpers/auth').checkAuth;

router.get('/add', checkAuth, ToughtController.showCreateTought);
router.post('/add', checkAuth, ToughtController.showCreateToughtPost);
router.get('/dashboard', checkAuth, ToughtController.showDashboard);
router.post('/remove', checkAuth, ToughtController.showDashboardRemoveToughtPost);
router.get('/edit/:id', checkAuth, ToughtController.showUpdateTought);
router.get('/', ToughtController.showToughts);

module.exports = router;