const express = require("express");
const passport = require("passport");
const Quote = require('../../models/Quote');
const router = express.Router();
const Video = require('../../models/Video')

// GET QUOTE
router.get("/:quote_id", (req, res) => {
    // console.log(req.params)
    Quote.findOne({_id: req.params.quote_id} )
    // Video.findOne({_id: req.params.quote_id} )
        .then(quote => res.json(quote))
        .catch(err => res.status(404).json({ noquotefound: 'No quote found' }));
})

module.exports = router;