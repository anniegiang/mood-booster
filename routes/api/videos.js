const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const Video = require("../../models/Video");
const router = express.Router();

// CREATE COMMENT (protected)
router.post(
  "/:video_id/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { userId, text } = req.body;
    Video.findOne({ _id: req.params.video_id })
      .then(video => {
        let newComment = {
          _id: mongoose.Types.ObjectId(),
          text,
          userId
        };
        video.comments.push(newComment);
        video.save((err, video) => {
          res.json(video.comments.id(newComment._id));
        });
      })
      .catch(err => res.status(400).json(err));
  }
);

// DELETE COMMENT (protected)
router.delete(
  "/:video_id/comment/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let videoId = req.params.video_id;
    Video.findOne({ _id: videoId }).then(video => {
      video.comments.pull({ _id: req.params.comment_id });
      video.save();
      res.json(video.comments);
    });
  }
);

// UPDATE COMMENT (protected)
router.put(
  "/:video_id/comment/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Video.findOne({ _id: req.params.video_id }).then(video => {
      let comment = video.comments.id(req.params.comment_id);
      comment.text = req.body.text;
      video.save();
      res.json(comment);
    });
  }
);

// GET VIDEO
router.get("/:video_id", (req, res) => {
  Video.findOne({ _id: req.params.video_id })
    .then(video => res.json(video))
    .catch(err => res.status(404).json({ novideofound: "No video found" }));
});

module.exports = router;
