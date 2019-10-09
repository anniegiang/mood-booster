const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const Photo = require("../../models/Photo");
const router = express.Router();

// CREATE COMMENT (protected)
router.post(
  "/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { photoId, text } = req.body;
    Photo.findOne({ _id: photoId })
      .then(photo => {
        let newComment = {
          _id: mongoose.Types.ObjectId(),
          userId: req.user.id,
          text
        };
        photo.comments.push(newComment);
        photo.save();
        res.json(photo);
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
    Photo.findOne({ _id: contentId })
      .then(photo => {
        photo.comments.pull({ _id: commentId });
        photo.save();
        res.json(photo);
      })
      .catch(err => res.status(404).json({ nophotofound: "No photo found" }));
  }
);

// UPDATE COMMENT (protected)
router.put(
  "/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let { commentId, photoId, text } = req.body;
    Photo.findOne({ _id: photoId })
      .then(photo => {
        let comment = photo.comments.id(commentId);
        comment.text = text;
        photo.save();
        res.json(photo);
      })
      .catch(err => res.status(404).json({ nophotofound: "No photo found" }));
  }
);

// GET PHOTO
router.get("/:photo_id", (req, res) => {
    Photo.findOne({_id: req.params.photo_id})
        .then(photo => res.json(photo))
        .catch(err =>  res.status(404).json({nophotofound: "No photo found"}))
})

//GET ALL PHOTOS FILTERED BY SEARCH RESULT
router.get("/", (req, res) => {

    req.query.mood1 = JSON.parse(req.query.mood1)
    req.query.mood2 = JSON.parse(req.query.mood2)
    req.query.mood3 = JSON.parse(req.query.mood3)
    req.query.mood4 = JSON.parse(req.query.mood4)
    req.query.mood5 = JSON.parse(req.query.mood5)
    req.query.mood6 = JSON.parse(req.query.mood6)
    req.query.mood7 = JSON.parse(req.query.mood7)
    req.query.photos = JSON.parse(req.query.photos)
  


    Photo.find()
        .then(photos => {
            let photoArr = []
            photos.forEach(photo => {
                if ((photo.mood1 === true && req.query.mood1 === true && req.query.photos === true) ||
                    (photo.mood2 === true && req.query.mood2 === true && req.query.photos === true) ||
                    (photo.mood3 === true && req.query.mood3 === true && req.query.photos === true) ||
                    (photo.mood4 === true && req.query.mood4 === true && req.query.photos === true) ||
                    (photo.mood5 === true && req.query.mood5 === true && req.query.photos === true) ||
                    (photo.mood6 === true && req.query.mood6 === true && req.query.photos === true) ||
                    (photo.mood7 === true && req.query.mood7 === true && req.query.photos === true)) 
                {
                    photoArr.push(photo)
                }
            })
            return res.json(photoArr)
        })
})


module.exports = router;
