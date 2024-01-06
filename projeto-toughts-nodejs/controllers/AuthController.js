const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
  static showLogin(req, res) {
    res.render("auth/login");
  }

  static async showLoginPost(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      req.flash("message", "Usuário nāo encontrado !!");
      res.render("auth/login");
      return;
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      req.flash("message", "Senha inválida !!");
      res.render("auth/login");
      return;
    }

    req.session.userid = user.id;

    req.flash("message", "Autenticaçāo realizada com sucesso!!");

    req.session.save(() => {
      res.redirect("/");
    });
  }

  static showRegister(req, res) {
    res.render("auth/register");
  }

  static async showRegisterPost(req, res) {
    const { name, email, password, confirmpassword } = req.body;

    if (password != confirmpassword) {
      req.flash("message", "As senhas nāo conferem, tente novamente !!");
      res.render("auth/register");
      return;
    }

    const checkIfUsersExists = await User.findOne({ where: { email: email } });

    if (checkIfUsersExists) {
      req.flash("message", "O e-mail já está em uso !!");
      res.render("auth/register");
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = {
      name: name,
      email: email,
      password: hashedPassword,
    };

    try {
      const createdUser = await User.create(user);

      req.session.userid = createdUser.id;

      req.flash("message", "Cadastro realizado com sucesso !!");

      req.session.save(() => {
        res.redirect("/");
      });
    } catch (err) {
      console.log(err);
    }
  }

  static sessionLogout(req, res) {
    req.session.destroy();
    res.redirect("/login");
  }
};
