const express = require("express");
const passport = require("passport");
const Quote = require("../../models/Quote");
const router = express.Router();
const Video = require("../../models/Video");

// CREATE COMMENT (protected)
router.post(
  "/:quote_id/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { userId, text } = req.body;
    Quote.findOne({ _id: req.params.quote_id })
      .then(quote => {
        let newComment = {
          text,
          userId
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
  "/:quote_id/comment/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let quoteId = req.params.quote_id;
    Quote.findOne({ _id: quoteId }).then(quote => {
      quote.comments.pull({ _id: req.params.comment_id });
      quote.save();
      res.json(quote);
    });
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

module.exports = router;
