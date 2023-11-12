const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String },
  // maybe a site
  // maybe a number of hours to store
});

const User = mongoose.model("User", userSchema);
module.exports = User;
