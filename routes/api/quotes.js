const express = require("express");
const passport = require("passport");
const Quote = require('../../models/Quote');
const router = express.Router();


// GET QUOTE
router.get("/api/quotes/:quote_id", (req, res) => {
    Quote.find({ quote: req.params.quote_id })
        .then(quote => res.json(quote))
        .catch(err => res.status(404).json({ noquotefound: 'No quote found' }));
})