const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Patient = new Schema({
  name: { type: String, require: true },
  dob: { type: Date, require: true },
  disease: { type: String },
  vaccinated: { type: Number },
});

module.exports = mongoose.model("Patient", Patient);
