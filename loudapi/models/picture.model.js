const mongoose = require("mongoose");

const pictureSchema = new mongoose.Schema(
  {
    title: String,
    user: String,
    image: Buffer,
    isPublic: Boolean,
    tags: [String]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Picture", pictureSchema);
