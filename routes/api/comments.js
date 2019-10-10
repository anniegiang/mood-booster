const express = require("express");
const passport = require("passport");
const Comment = require("../../models/Comment");
const validateCommentInput = require("../../validation/comments");
const router = express.Router();

// GET ALL COMMENTS BY TWEET ID
router.get("/tweet/:tweet_id", (req, res) => {
  Comment.find({ tweet: req.params.tweet_id })
    .then(comments => res.json(comments))
    .catch(err =>
      res
        .status(404)
        .json({ nocommentsfound: "No comments found for this tweet" })
    );
});

// CREATE A COMMENT ON A TWEET (protected)
router.post(
  "/tweet/:tweet_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCommentInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newComment = new Comment({
      user: req.user.id,
      tweet: req.params.tweet_id,
      text: req.body.text
    });

    newComment.save().then(comment => res.json(comment));
  }
);

// GET A COMMENT BY ID
router.get("/:id", (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => res.json(comment))
    .catch(err => res.status(404).json({ nocommentfound: "No comment found" }));
});

// DELETE A COMMENT (protected)
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Comment.deleteOne({ _id: req.params.id })
      .then(() => res.json("sucess"))
      .catch(err => res.status(404).json({ error: "Error" }));
  }
);

module.exports = router;
