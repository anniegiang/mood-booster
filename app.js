const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const comments = require("./routes/api/comments");
const quotes = require("./routes/api/quotes");
const photos = require("./routes/api/photos");
const seed1 = require('./photo_seed');
const seed2 = require('./quotes_seed');
const Video = require("./models/Video");
const videos = require('./routes/api/videos')
const seed = require('./seeder');



const app = express(); // object, creates a new express server
const db = require("./config/keys").mongoURI;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get("/", (req,res) => {
//   const video = new Video ({
//     "title": "Vine",
//     "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
//     "mood1": false,
//     "mood2": false,
//     "mood3": false,
//     "mood4": false,
//     "mood5": false,
//     "mood6": false,
//     "mood7": false
//   })
//   video.save()
//   res.send('Video is saved')
// })


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
app.use("/api/videos", videos)

// seed();

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


seed1()
seed2()