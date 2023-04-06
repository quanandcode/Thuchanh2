const Patient = require("../models/Patient");
const { multiMongooseToObject } = require("../../util/mongoose");
class homeController {
  show(req, res, next) {
    Patient.find({})
      .then((patients) => {
        console.log(patients);
        res.render("home", {
          patients: multiMongooseToObject(patients),
        });
      })
      .catch(next);
  }
}
module.exports = new homeController();
