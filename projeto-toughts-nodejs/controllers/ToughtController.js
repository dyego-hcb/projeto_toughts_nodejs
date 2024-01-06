const session = require("express-session");
const Tought = require("../models/Tought");
const User = require("../models/User");

module.exports = class ToughtController {
  static async showToughts(req, res) {
    res.render("toughts/home");
  }

  static async showDashboard(req, res) {
    const userId = req.session.userid;

    const user = await User.findOne({where: {id: userId}, include: Tought, plain: true});

    if(!user)
    {
      res.redirect('/login');
    }

    const toughts = user.Toughts.map((result) => result.dataValues);

    res.render("toughts/dashboard", {toughts});
  }

  static showCreateTought(req, res) {
    res.render("toughts/create");
  }

  static async showCreateToughtPost(req, res) {
    const tought = {
      title: req.body.title,
      UserId: req.session.userid,
    };

    const user = await User.findOne({where: {id: tought.UserId}});

    if(!user)
    {
      res.redirect('/login');
    }

    await Tought.create(tought);

    req.flash("message", "Pensamento criado com sucesso!!");

    try {
      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });
    } catch (err) {
      console.log(err);
    }
  }
};
