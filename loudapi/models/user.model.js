const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 25
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 25
    },
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

userSchema.methods.generateAuthToken = function() {
  return jwt.sign({ _id: this._id, username: this.username }, config.get("jwtPrivateKey"));
};

module.exports = mongoose.model("User", userSchema);
