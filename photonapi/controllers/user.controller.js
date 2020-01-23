const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const _ = require("lodash");

function validateUser(user) {
  const schema = {
    firstName: Joi.string()
      .max(25)
      .required(),
    lastName: Joi.string()
      .max(25)
      .required(),
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(15)
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    email: Joi.string()
      .email()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(user, schema);
}

exports.create = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ username: req.body.username })
  if(user) return res.status(400).send('Username is already taken.');

  user = await User.findOne({ email: req.body.email });
  if(user) return res.status(400).send('An account with that email already exists.');

  user = new User(
    _.pick(req.body, ["firstName", "lastName", "username", "password", "email"])
  );
  salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user
    .save()
    .then(data => {
          const token = user.generateAuthToken();
          res
            .header("x-auth-token", token)
            .header("access-control-expose-headers", "x-auth-token")
            .send(_.pick(data, ["firstName", "lastName", "username", "email"]));
        })
        .catch(err => {
          res.status(500).send({
            message: err.message || "Error occurred while creating user."
          });
        });
};

exports.find = (req, res) => {
  User.findById(req.user._id)
    .select("-password")
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      return res.status(500).send({
        message: `Error retrieving user.`
      });
    });
};

exports.update = (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = new User(
    _.pick(req.body, ["firstName", "lastName", "username", "password", "email"])
  );
  bcrypt.genSalt(10).then(salt => {
    bcrypt.hash(user.password, salt).then(hashed => {
      user.password = hashed;
      User.findByIdAndUpdate(req.user._id, user, { new: true })
        .then(user => {
          if (!user) {
            return res.status(404).send({
              message: `User not found.`
            });
          }
          res.send(
            _.pick(user, ["firstName", "lastName", "username", "email"])
          );
        })
        .catch(err => {
          if (err.kind === "ObjectId") {
            return res.status(404).send({
              message: `User not found.`
            });
          }
          return res.status(500).send({
            message: `Error updating user.`
          });
        });
    });
  });
};

exports.delete = (req, res) => {
  User.findByIdAndRemove(req.user._id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `User not found.`
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `User not found.`
        });
      }
      return res.status(500).send({
        message: `Could not delete user.`
      });
    });
};
