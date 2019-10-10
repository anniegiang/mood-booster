const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const keys = require("../../config/keys");
const User = require("../../models/User");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const router = express.Router();

// private auth route
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.body.id,
      handle: req.user.handle,
      email: req.user.email
    });
  }
);

// USER PROFILE
router.get("/:user_id", (req, res) => {
  User.findOne({ _id: req.params.user_id })
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nouserfound: "No user found" }));
});

// SAVE CONTENT (protected)
router.post(
  "/content/like",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let { contentType, contentId, userId } = req.body;
    User.findOne({ _id: userId })
      .then(user => {
        if (!user[contentType].includes(contentId)) {
          user[contentType].push(contentId);
          user.save();
        }
        res.json(user);
      })
      .catch(err => res.status(400).json(err));
  }
);

// REGISTER
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, handle: user.handle, photoSave: user.photoSave, videoSave: user.videoSave, quoteSave: user.quoteSave };
              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User does not exist";
      res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, handle: user.handle, photoSave: user.photoSave, videoSave: user.videoSave, quoteSave: user.quoteSave };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        res.status(400).json({ password: "Invalid password" });
      }
    });
  });
});

module.exports = router;
