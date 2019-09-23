const express = require("express");
const passport = require("passport");
const Video = require("../../models/Video");
const router = express.Router();

router.get("/api/videos/:video_id", (req, res) => {
    Video.find({video: req.params.video_id})
        .then(video => res.json(video))
        .catch(err => res.status(404).json({novideofound: 'No video found'}));
})

//CREATE A VIDEO ON MY SAVE LIST
router.post('/api/videos/:video_id', (req,res) => {
    const  = new Video({
        title: req.body.title,
        videoUrl: req.body.videoUrl,


    })
})