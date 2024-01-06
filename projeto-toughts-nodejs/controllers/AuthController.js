module.exports = class AuthController {
    static showLogin(req, res)
    {
        res.render("auth/login");
    }

    static showRegister(req, res)
    {
        res.render("auth/register");
    }
}