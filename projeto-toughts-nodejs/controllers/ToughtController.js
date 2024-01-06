const session = require("express-session");
const Tought = require("../models/Tought");
const User = require("../models/User");

module.exports = class ToughtController {
  static async showToughts(req, res) {
    res.render("toughts/home");
  }

  static async showDashboard(req, res) {
    const userId = req.session.userid;

    const user = await User.findOne({
      where: { id: userId },
      include: Tought,
      plain: true,
    });

    if (!user) {
      res.redirect("/login");
    }

    const toughts = user.Toughts.map((result) => result.dataValues);

    let emptyToughts = false;

    if (toughts.length === 0) {
      emptyToughts = true;
    }

    res.render("toughts/dashboard", { toughts, emptyToughts });
  }

  static showCreateTought(req, res) {
    res.render("toughts/create");
  }

  static async showCreateToughtPost(req, res) {
    const tought = {
      title: req.body.title,
      UserId: req.session.userid,
    };

    const user = await User.findOne({ where: { id: tought.UserId } });

    if (!user) {
      res.redirect("/login");
    }

    try {
      await Tought.create(tought);

      req.flash("message", "Pensamento criado com sucesso!!");
      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });
    } catch (err) {
      console.log(err);
    }
  }

  static async showDashboardRemoveToughtPost(req, res) {
    const UserId = req.session.userid;
    const id = req.body.id;

    const user = await User.findOne({ where: { id: UserId } });

    if (!user) {
      res.redirect("/login");
    }

    try {
      await Tought.destroy({ where: { id: id, UserId: UserId } });

      req.flash("message", "Pensamento removido com sucesso!!");
      req.session.save(() => {
        res.redirect("/toughts/dashboard");
      });
    } catch (err) {
      console.log(err);
    }
  }

  static async showUpdateTought(req, res) {
    const id = req.params.id;
    const UserId = req.session.userid;

    const user = await User.findOne({ where: { id: UserId } });

    if (!user) {
      res.redirect("/login");
    }

    const tought = await Tought.findOne({ where: { id: id, UserId: user.id }, raw: true });

    res.render("toughts/edit", { tought });
  }
};
