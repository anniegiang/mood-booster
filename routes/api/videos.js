const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const Video = require("../../models/Video");
const router = express.Router();

// CREATE COMMENT (protected)
router.post(
  "/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { videoId, text } = req.body;
    Video.findOne({ _id: videoId })
      .then(video => {
        let newComment = {
          _id: mongoose.Types.ObjectId(),
          userId: req.user.id,
          text
        };
        video.comments.push(newComment);
        video.save();
        res.json(video);
      })
      .catch(err => res.status(400).json(err));
  }
);

// DELETE COMMENT (protected)
router.delete(
  "/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let { commentId, videoId } = req.body;
    Video.findOne({ _id: videoId })
      .then(video => {
        video.comments.pull({ _id: commentId });
        video.save();
        res.json(video);
      })
      .catch(err => res.status(404).json({ novideofound: "No video found" }));
  }
);

// UPDATE COMMENT (protected)
router.put(
  "/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let { commentId, videoId, text } = req.body;
    Video.findOne({ _id: videoId })
      .then(video => {
        let comment = video.comments.id(commentId);
        comment.text = text;
        video.save();
        res.json(video);
      })
      .catch(err => res.status(404).json({ novideofound: "No video found" }));
  }
);
// GET VIDEO
router.get("/:video_id", (req, res) => {
  Video.findOne({ _id: req.params.video_id })
    .then(video => res.json(video))
    .catch(err => res.status(404).json({ novideofound: "No video found" }));
});

module.exports = router;
