const Picture = require('../models/picture.model.js');
const Joi = require('joi');

function validatePicture(picture){
    const schema = {
        title: Joi.string().required(),
        user: Joi.string().min(3).max(15).required(),
        image: Joi.binary().required(),
        isPublic: Joi.bool().required(),
        tags: Joi.array().items(Joi.string().min(1).max(10))
    };

    return Joi.validate(picture, schema);
}