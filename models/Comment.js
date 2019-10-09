const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  tweet: {
    type: Schema.Types.ObjectId,
    ref: "tweet"
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;
