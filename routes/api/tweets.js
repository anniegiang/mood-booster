const express = require("express");
const passport = require("passport");
const Tweet = require("../../models/Tweet");
const validateTweetInput = require("../../validation/tweets");

const router = express.Router();

// GET ALL TWEETS
router.get("/", (req, res) => {
  Tweet.find() // gives everything back because we're filtering by nothing
    .sort({ date: -1 }) // sort by date in reverse order to get the newest
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
// passport gives req the user property based on jwt
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

// DELETE TWEET (protected)
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Tweet.deleteOne({ _id: req.params.id })
      .then(() => res.json("sucess"))
      .catch(err => res.status(404).json({ error: "Error" }));
  }
);

module.exports = router;
