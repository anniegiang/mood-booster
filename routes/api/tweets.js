const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const Tweet = require("../../models/Tweet");
const validateTweetInput = require("../../validation/tweets");

const router = express.Router();

// GET ALL TWEETS
router.get("/", (req, res) => {
  Tweet.find()
    .sort({ date: -1 })
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({ notweetsfound: "No tweets found" }));
});

// GET ALL TWEETS BY USER ID
router.get("/user/:user_id", (req, res) => {
  Tweet.find({ user: req.params.user_id })
    .then(tweets => res.json(tweets))
    .catch(err =>
      res.status(404).json({ notweetsfound: "No tweets found from the user" })
    );
});

// GET TWEET BY ID
router.get("/:id", (req, res) => {
  Tweet.findById(req.params.id)
    .then(tweet => res.json(tweet))
    .catch(err => res.status(404).json({ notweetfound: "No tweet found" }));
});

// protected route for a user to post tweets
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTweetInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newTweet = new Tweet({
      user: req.user.id,
      text: req.body.text
    });

    newTweet.save().then(tweet => res.json(tweet));
  }
);

module.exports = router;
