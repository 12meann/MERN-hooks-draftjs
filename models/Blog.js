const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: Object,
      required: true
    },
    headerImg: {
      type: String
    },
    headerImgId: {
      type: String
    },
    tags: [
      {
        type: String
      }
    ],
    isPinned: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Blog", blogSchema);
