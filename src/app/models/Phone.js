const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Phone = new Schema({
  name: { type: String, require: true },
  price: { type: Number },
  brand: { type: String },
  sold: { type: Number },
});

module.exports = mongoose.model("Phone", Phone);
