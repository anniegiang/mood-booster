const express = require("express");
const passport = require("passport");
const Photo = require("../../models/Photo")
const router = express.Router();

// GET PHOTO
router.get("/api/photos/:photo_id", (req, res) => {
    Photo.find({photo: req.params.photo_id})
        .then(photo => res.json(photo))
        .catch(err =>  res.status(404).json({nophotofound: "No photo found"}))
})