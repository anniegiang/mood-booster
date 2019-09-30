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
    let { commentId, contentId } = req.query;
    Video.findOne({ _id: contentId })
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

//GET ALL VIDEOS FILTERED BY SEARCH RESULT
router.get("/", (req,res) => {
    
    req.query.mood1 = JSON.parse(req.query.mood1)
    req.query.mood2 = JSON.parse(req.query.mood2)
    req.query.mood3 = JSON.parse(req.query.mood3)
    req.query.mood4 = JSON.parse(req.query.mood4)
    req.query.mood5 = JSON.parse(req.query.mood5)
    req.query.mood6 = JSON.parse(req.query.mood6)
    req.query.mood7 = JSON.parse(req.query.mood7)
    req.query.videos = JSON.parse(req.query.videos)
   

    
    Video.find()
    .then(videos => {
        let videoArr = []
        videos.forEach(video => {
            if ( (video.mood1 === true && req.query.mood1 === true && req.query.videos === true) || 
                 (video.mood2 === true && req.query.mood2 === true && req.query.videos === true) || 
                 (video.mood3 === true && req.query.mood3 === true && req.query.videos === true) || 
                 (video.mood4 === true && req.query.mood4 === true && req.query.videos === true) || 
                 (video.mood5 === true && req.query.mood5 === true && req.query.videos === true) || 
                 (video.mood6 === true && req.query.mood6 === true && req.query.videos === true) || 
                 (video.mood7 === true && req.query.mood7 === true && req.query.videos === true) ) 
            {
                videoArr.push(video)
            }
        })
        return res.json(videoArr)
    })
})

module.exports = router;
