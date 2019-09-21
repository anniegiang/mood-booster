const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

module.exports = router;