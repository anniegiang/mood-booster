const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const Quote = require("../../models/Quote");
const router = express.Router();

// CREATE COMMENT (protected)
router.post(
  "/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { quoteId, text } = req.body;
    Quote.findOne({ _id: quoteId })
      .then(quote => {
        let newComment = {
          _id: mongoose.Types.ObjectId(),
          userId: req.user.id,
          text
        };
        quote.comments.push(newComment);
        quote.save();
        res.json(quote);
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
    Quote.findOne({ _id: contentId })
      .then(quote => {
        quote.comments.pull({ _id: commentId });
        quote.save();
        res.json(quote);
      })
      .catch(err => res.status(404).json({ noquotefound: "No quote found" }));
  }
);

// UPDATE COMMENT (protected)
router.put(
  "/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let { commentId, quoteId, text } = req.body;
    Quote.findOne({ _id: quoteId })
      .then(quote => {
        let comment = quote.comments.id(commentId);
        comment.text = text;
        quote.save();
        res.json(quote);
      })
      .catch(err => res.status(404).json({ noquotefound: "No quote found" }));
  }
);

// GET QUOTE
router.get("/:quote_id", (req, res) => {
  // console.log(req.params)
  Quote.findOne({ _id: req.params.quote_id })
    // Video.findOne({_id: req.params.quote_id} )
    .then(quote => res.json(quote))
    .catch(err => res.status(404).json({ noquotefound: "No quote found" }));
});

//GET ALL VIDEOS FILTERED BY SEARCH RESULT
router.get("/", (req, res) => {

    req.query.mood1 = JSON.parse(req.query.mood1)
    req.query.mood2 = JSON.parse(req.query.mood2)
    req.query.mood3 = JSON.parse(req.query.mood3)
    req.query.mood4 = JSON.parse(req.query.mood4)
    req.query.mood5 = JSON.parse(req.query.mood5)
    req.query.mood6 = JSON.parse(req.query.mood6)
    req.query.mood7 = JSON.parse(req.query.mood7)
    req.query.quotes = JSON.parse(req.query.quotes)


    Quote.find()
        .then(quotes => {
            let quoteArr = []
            quotes.forEach(quote => {
                if ((quote.mood1 === true && req.query.mood1 === true && req.query.quotes === true) ||
                    (quote.mood2 === true && req.query.mood2 === true && req.query.quotes === true) ||
                    (quote.mood3 === true && req.query.mood3 === true && req.query.quotes === true) ||
                    (quote.mood4 === true && req.query.mood4 === true && req.query.quotes === true) ||
                    (quote.mood5 === true && req.query.mood5 === true && req.query.quotes === true) ||
                    (quote.mood6 === true && req.query.mood6 === true && req.query.quotes === true) ||
                    (quote.mood7 === true && req.query.mood7 === true && req.query.quotes === true)) {
                    quoteArr.push(quote)
                }
            })
            return res.json(quoteArr)
        })
})

module.exports = router;
