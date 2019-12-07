const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  email: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
