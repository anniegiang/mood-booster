const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const quotes = require("./routes/api/quotes");
const photos = require("./routes/api/photos");
const videos = require("./routes/api/videos");

const photosSeed = require("./photos_seed");
const quotesSeed = require("./quotes_seed");
const usersSeed = require("./users_seed");
const videosSeed = require("./seeder");

const app = express(); // object, creates a new express server
const db = require("./config/keys").mongoURI;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose // connect to MongoDB using Mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// tell Express to use imported routes
app.use("/api/users", users);
app.use("/api/tweets", tweets);
app.use("/api/comments", comments);
app.use("/api/quotes", quotes);
app.use("/api/photos", photos);
app.use("/api/videos", videos);

// tell express to use middleware to parse JSON that's sent to frontend
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// tell express to use middleware to initialize the authentication module
app.use(passport.initialize());
require("./config/passport")(passport);

// tell app which port to run on
// server will run on a required heroku port or localhost:5000
const port = process.env.PORT || 5000;

// start a socket and listen for connections on the port
app.listen(port, () => console.log(`Server is listening on port ${port}`));

photosSeed();
quotesSeed();
usersSeed();
videosSeed();
