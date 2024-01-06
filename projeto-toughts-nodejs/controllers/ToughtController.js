const Tought = require('../models/Tought');
const User = require('../models/User');

module.exports = class ToughtController {
    static async showToughts(req, res)
    {
        res.render('toughts/home');
    }

    static async showDashboard(req, res)
    {
        res.render('toughts/dashboard');
    }

    static showCreateTought(req, res)
    {
        res.render('toughts/create');
    }
}