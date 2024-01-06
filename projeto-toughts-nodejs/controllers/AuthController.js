const User = require('../models/User');

const bcrypt = require('bcryptjs');

module.exports = class AuthController {
    static showLogin(req, res)
    {
        res.render("auth/login");
    }

    static showRegister(req, res)
    {
        res.render("auth/register");
    }

    static async showRegisterPost(req, res)
    {
        const {name, email, password, confirmpassword} = req.body;

        if(password != confirmpassword)
        {
            req.flash('message', 'As senhas nāo conferem, tente novamente !!');
            res.render('auth/register');
            return;
        }
    }
}