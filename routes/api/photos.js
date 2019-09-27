const express = require("express");
const passport = require("passport");
const Photo = require("../../models/Photo")
const router = express.Router();

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
    // req.query.videos = JSON.parse(req.query.videos)
    // req.query.photos = JSON.parse(req.query.photos)
    // req.query.quotes = JSON.parse(req.query.quotes)


    Photo.find()
        .then(photos => {
            let photoArr = []
            photos.forEach(photo => {
                if ((photo.mood1 === true && req.query.mood1 === true) ||
                    (photo.mood2 === true && req.query.mood2 === true) ||
                    (photo.mood3 === true && req.query.mood3 === true) ||
                    (photo.mood4 === true && req.query.mood4 === true) ||
                    (photo.mood5 === true && req.query.mood5 === true) ||
                    (photo.mood6 === true && req.query.mood6 === true) ||
                    (photo.mood7 === true && req.query.mood7 === true)) {
                    photoArr.push(photo)
                }
            })
            return res.json(photoArr)
        })
})


module.exports = router;