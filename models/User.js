const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  videoSave: [{ type: mongoose.Schema.Types.ObjectId, ref: "videos" }],
  photoSave: [{ type: mongoose.Schema.Types.ObjectId, ref: "photos" }],
  quoteSave: [{ type: mongoose.Schema.Types.ObjectId, ref: "quotes" }],
  handle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// connect to mongoose by passing in schema
const User = mongoose.model("users", UserSchema);

module.exports = User;
