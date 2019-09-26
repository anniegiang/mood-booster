const express = require("express");
// const passport = require("passport");
const Photo = require("../../models/Photo");
const Video = require("../../models/Video");
const Quote = require("../../models/Quote");
const router = express.Router();

// GET RANDOM CONTENT
router.get("/", (req, res) => {
  let allContent = {};
  Photo.find().then(photos => {
    let random = Math.floor(Math.random() * photos.length);
    let rand = photos[random];
    allContent["photos"] = rand;

    Video.find().then(videos => {
      let random = Math.floor(Math.random() * videos.length);
      let rand = videos[random];
      allContent["videos"] = rand;

      Quote.find().then(quotes => {
        let random = Math.floor(Math.random() * quotes.length);
        let rand = quotes[random];
        allContent["quotes"] = rand;
        res.json(allContent);
      });
    });
  });

  // res.json(allContent);
});
module.exports = router;
