const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const Photo = require("../../models/Photo");
const router = express.Router();

// CREATE COMMENT (protected)
router.post(
  "/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { photoId, text } = req.body;
    Photo.findOne({ _id: photoId })
      .then(photo => {
        let newComment = {
          _id: mongoose.Types.ObjectId(),
          userId: req.user.id,
          text
        };
        photo.comments.push(newComment);
        photo.save();
        res.json(photo);
      })
      .catch(err => res.status(400).json(err));
  }
);

// DELETE COMMENT (protected)
router.delete(
  "/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let { commentId, photoId } = req.query;
    Photo.findOne({ _id: photoId })
      .then(photo => {
        photo.comments.pull({ _id: commentId });
        photo.save();
        res.json(photo);
      })
      .catch(err => res.status(404).json({ nophotofound: "No photo found" }));
  }
);

// UPDATE COMMENT (protected)
router.put(
  "/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let { commentId, photoId, text } = req.body;
    Photo.findOne({ _id: photoId })
      .then(photo => {
        let comment = photo.comments.id(commentId);
        comment.text = text;
        photo.save();
        res.json(photo);
      })
      .catch(err => res.status(404).json({ nophotofound: "No photo found" }));
  }
);

// GET PHOTO
router.get("/:photo_id", (req, res) => {
  Photo.findOne({ _id: req.params.photo_id })
    .then(photo => res.json(photo))
    .catch(err => res.status(404).json({ nophotofound: "No photo found" }));
});

module.exports = router;
