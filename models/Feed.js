const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema({
  likeCount: {
    type: Number,
    require: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Feed", FeedSchema);
