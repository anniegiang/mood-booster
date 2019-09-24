const express = require("express");
const passport = require("passport");
const Video = require("../../models/Video");
const router = express.Router();


// GET VIDEO
router.get("/:video_id", (req, res) => {
    Video.findOne({_id: req.params.video_id})
        .then(video => res.json(video))
        .catch(err => res.status(404).json({novideofound: 'No video found'}));
})

module.exports = router;