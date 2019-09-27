const User = require("./models/User");

const seed3 = () => {
  const testUser = new User({
    handle: "Test User",
    email: "test@test.com",
    password: "password",
    videoSave: [],
    photoSave: [],
    quoteSave: []
  });
  testUser.save();
};

module.exports = seed3;
