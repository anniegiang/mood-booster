const express = require("express");
// const passport = require("passport");
const Photo = require("../../models/Photo");
const Video = require("../../models/Video");
const Quote = require("../../models/Quote");
const router = express.Router();

// GET RANDOM CONTENT
router.get("/", (req, res) => {
  let allContent = {};

  // Get the count of all photos
  Photo.count().exec((err, count) => {
    // Get a random entry
    let random = Math.floor(Math.random() * count);

    // Again query all users but only fetch one offset by our random #
    Photo.findOne()
      .skip(random)
      .exec((err, result) => {
        // Tada! random photo
        allContent["photo"] = result;
      });
  });

  // Get the count of all videos
  Video.count().exec((err, count) => {
    // Get a random entry
    let random = Math.floor(Math.random() * count);

    // Again query all users but only fetch one offset by our random #
    Video.findOne()
      .skip(random)
      .exec((err, result) => {
        // Tada! random video
        allContent["video"] = result;
      });
  });

  // Get the count of all quotes
  Quote.count().exec((err, count) => {
    // Get a random entry
    let random = Math.floor(Math.random() * count);

    // Again query all users but only fetch one offset by our random #
    Quote.findOne()
      .skip(random)
      .exec((err, result) => {
        // Tada! random quote
        allContent["quote"] = result;
        res.json(allContent);
      });
  });
});

module.exports = router;
