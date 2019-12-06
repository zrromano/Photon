const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    email: String,
    date: { type: Date, default: Date.now }
  });

module.exports  = mongoose.model("User", userSchema);