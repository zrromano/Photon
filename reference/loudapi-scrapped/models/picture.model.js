const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
    title: String,
    user: String,
    image: Buffer,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublic: Boolean
  });
  
  module.exports = mongoose.model("Picture", pictureSchema);