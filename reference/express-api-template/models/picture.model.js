const mongoose = require("mongoose");

const pictureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 255,
      unique: true
    },
    user: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15
    },
    image: { type: Buffer, required: true },
    isPublic: { type: Boolean, required: true },
    tags: [
      {
        type: String,
        required: false,
        minlength: 1,
        maxlength: 10
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Picture", pictureSchema);
