class homeController {
  show(req, res, next) {
    res.render("home");
  }
}
module.exports = new homeController();
