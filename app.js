const express = require('express');
const mongoose = require('mongoose');

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

const app = express(); // creates a new express server
const db = require('./config/keys').mongoURI

// connect to MongoDB using Mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Twitter"));

// tell Express to use imported routes
app.use("/api/users", users);
app.use("/api/tweets", tweets);

// tell app which port to run on
// server will run on a required heroku port or localhost:5000
const port = process.env.PORT|| 5000;


// start a socket and listen for connections on the path
app.listen(port, () => console.log(`Server is listening on port ${port}`))