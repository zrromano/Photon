const Picture = require("../models/picture.model.js");
const Joi = require("joi");
const _ = require("lodash");

function validatePicture(picture) {
  const schema = {
    title: Joi.string()
      .max(255)
      .required(),
    user: Joi.string()
      .min(3)
      .max(15)
      .required(),
    image: Joi.binary().required(),
    isPublic: Joi.bool().required(),
    tags: Joi.array().items(
      Joi.string()
        .min(1)
        .max(10)
    )
  };

  return Joi.validate(picture, schema);
}

exports.create = (req, res) => {
  const { error } = validatePicture(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const picture = new Picture(
    _.pick(req.body, ["title", "user", "image", "isPublic", "tags"])
  );
  if(req.user.username === picture.user){
  picture.save().then(data => {
    res.send(_.pick(data, ["_id", "title", "user", "tags"]));
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Error occurred while saving picture."
    });
  });}
  else{
    res.status(400).send("Current user does not match picture author.")
  }
};

exports.find = (req, res) => {
  Picture.findOne({ title: req.body.title }).then(picture => {
    if (!picture) return res.status(404).send(`Picture not found.`);
    res.send(picture);
  });
};

exports.list = (req, res) => {
  Picture.find().then(pictures => {
    if(!pictures) return res.status(500).send("Could not retrieve pictures.");
    res.send(pictures);
  })
};

exports.update = (req, res) => {
  if(req.user.username === req.body.user){
    Picture.findByIdAndUpdate(req.body._id).then( picture => {
      if(!picture) return res.status(404).send("Picture not found.");
      res.send(_.pick(data, ["_id", "title", "user", "tags"]));
    }).catch( err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send("Picture not found.");
      }
      return res.status(500).send("Error updating picture.");
    })
  } else{
    res.status.send("You can't update someone else's picture.")
  }
};

exports.delete = (req, res) => {
  if(req.user.username === req.body.user){
    User.findByIdAndRemove(req.body._id)
    .then(picture => {
      if (!picture) {
        return res.status(404).send({
          message: `Picture not found.`
        });
      }
      res.send({ message: "Picture deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Picture not found.`
        });
      }
      return res.status(500).send({
        message: `Could not delete picture.`
      });
    });
  } else{
    res.status.send("You can't delete someone else's picture.")
  }
};
