const express = require("express");
const passport = require("passport");
const Video = require("../../models/Video");
const router = express.Router();

// CREATE COMMENT (protected)
router.post(
  "/:video_id/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { userId, text } = req.body;
    Video.findOne({ _id: req.params.video_id })
      .then(video => {
        let newComment = {
          text,
          userId
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
  "/:video_id/comment/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let id = req.params.video_id;
    Video.findOne({ _id: id }).then(video => {
      video.comments.pull({ _id: req.params.comment_id });
      video.save();
      res.json(video);
    });
  }
);

// UPDATE COMMENT (protected)
// router.put(
//   "/:video_id/comment/:comment_id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     let id = req.params.video_id;
//     Video.findOne({ _id: id }).then(video => {
//       video.comments.pull({ _id: req.params.comment_id });
//       video.save();
//       res.json(video);
//     });
//   }
// );
// GET VIDEO
router.get("/:video_id", (req, res) => {
  Video.findOne({ _id: req.params.video_id })
    .then(video => res.json(video))
    .catch(err => res.status(404).json({ novideofound: "No video found" }));
});

module.exports = router;
