const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const Quote = require("../../models/Quote");
const router = express.Router();

// GET ALL COMMENTS (protected)
router.get("/:quote_id/comments", (req, res) => {
  Quote.findOne({ _id: req.params.quote_id })
    .then(quote => {
      res.json(quote.comments);
    })
    .catch(err => res.status(404).json({ noquotefound: "No quote found" }));
});

// CREATE COMMENT (protected)
router.post(
  "/:quote_id/comment",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { userId, text } = req.body;
    Quote.findOne({ _id: req.params.quote_id })
      .then(quote => {
        let newComment = {
          _id: mongoose.Types.ObjectId(),
          text,
          userId
        };
        quote.comments.push(newComment);
        quote.save((err, quote) => {
          res.json(quote.comments.id(newComment._id));
        });
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
    Quote.findOne({ _id: quoteId })
      .then(quote => {
        quote.comments.pull({ _id: req.params.comment_id });
        quote.save();
        res.json(quote.comments);
      })
      .catch(err => res.status(404).json({ noquotefound: "No quote found" }));
  }
);

// UPDATE COMMENT (protected)
router.put(
  "/:quote_id/comment/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Quote.findOne({ _id: req.params.quote_id })
      .then(quote => {
        let comment = quote.comments.id(req.params.comment_id);
        comment.text = req.body.text;
        quote.save((err, quote) => {
          res.json(quote.comments.id(comment._id));
        });
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

module.exports = router;
