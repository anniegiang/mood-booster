const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const Photo = require("../../models/Photo");
const router = express.Router();

// GET ALL COMMENTS (protected)
router.get("/:photo_id/comments", (req, res) => {
  Photo.findOne({ _id: req.params.photo_id })
    .then(photo => {
      res.json(photo.comments);
    })
    .catch(err => res.status(404).json({ nophotofound: "No photo found" }));
});

// CREATE COMMENT (protected)
router.post(
  "/:photo_id/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { userId, text } = req.body;
    Photo.findOne({ _id: req.params.photo_id })
      .then(photo => {
        let newComment = {
          _id: mongoose.Types.ObjectId(),
          text,
          userId
        };
        photo.comments.push(newComment);
        photo.save((err, photo) => {
          res.json(photo.comments.id(newComment._id));
        });
      })
      .catch(err => res.status(400).json(err));
  }
);

// DELETE COMMENT (protected)
router.delete(
  "/:photo_id/comment/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let photoId = req.params.photo_id;
    Photo.findOne({ _id: photoId })
      .then(photo => {
        photo.comments.pull({ _id: req.params.comment_id });
        photo.save();
        res.json(photo.comments);
      })
      .catch(err => res.status(404).json({ nophotofound: "No photo found" }));
  }
);

// UPDATE COMMENT (protected)
router.put(
  "/:photo_id/comment/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Photo.findOne({ _id: req.params.photo_id })
      .then(photo => {
        let comment = photo.comments.id(req.params.comment_id);
        comment.text = req.body.text;
        photo.save((err, photo) => {
          res.json(photo.comments.id(comment._id));
        });
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
