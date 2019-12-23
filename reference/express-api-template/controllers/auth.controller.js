const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const config = require("config");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

function validate(req) {
  const schema = {
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(15)
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(user, schema);
}

exports.login = (req, res) => {
  User.findOne({ username: req.body.username }).then(user => {
    if (!user) return res.status(400).send("Invalid username or password");
    bcrypt.compare(req.body.password, user.password).then(validPassword => {
      if (!validPassword)
        return res.status(400).send("Invalid username or password");
      const token = user.generateAuthToken();
      res.send(token);
    });
  });
};
