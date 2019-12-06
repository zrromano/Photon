const User = require("../models/user.model.js");
const Joi = require("joi");

function validateUser(user) {
  const schema = {
    firstName: Joi.string()
      .max(50)
      .required(),
    lastName: Joi.string()
      .max(50)
      .required(),
    userName: Joi.string()
      .alphanum()
      .min(3)
      .max(15)
      .required(),
    password: Joi.string()
      .min(5)
      .max(128)
      .required(),
    email: Joi.string()
      .email()
      .required()
  };

  return Joi.validate(user, schema);
}

exports.create = (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email
  });

  user
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error occurred while creating user."
      });
    });
};

exports.findAll = (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving users."
      });
    });
};

exports.findOne = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `User not found with id ${req.params.id}`
        });
      }
      res.send(user);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `User not found with id ${req.params.id}`
        });
      }
      return res.status(500).send({
        message: `Error retrieving user with id ${req.params.id}`
      });
    });
};

exports.update = (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  User.findByIdAndUpdate(req.params.id, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email
  }, {new: true})
  .then(user => {
    if (!user) {
      return res.status(404).send({
        message: `User not found with id ${req.params.id}`
      });
    }
    res.send(user);
  })
  .catch(err => {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `User not found with id ${req.params.id}`
      });
    }
    return res.status(500).send({
      message: `Error updating user with id ${req.params.id}`
    });
  });
};

exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.id)
    .then(user => {
        if (!user) {
          return res.status(404).send({
            message: `User not found with id ${req.params.id}`
          });
        }
        res.send({message: "User deleted successfully!"});
      })
      .catch(err => {
        if (err.kind === "ObjectId" || err.name === 'NotFound') {
          return res.status(404).send({
            message: `User not found with id ${req.params.id}`
          });
        }
        return res.status(500).send({
          message: `Could not delete user with id ${req.params.id}`
        });
      });
};
