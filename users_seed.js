const User = require("./models/User");

const seed3 = () => {
  const testUser = new User({
    handle: "Test User",
    email: "test@test.com",
    password: "password",
    videoLikes: [{ _id: "5d8a6854f2cc210e5b72ce48" }],
    photoLikes: [
      { _id: "5d8aa5006f2ead30dc456c35" },
      { _id: "5d8aab1371ebcc364375f724" }
    ],
    quoteLikes: [
      { _id: "5d8aa5016f2ead30dc456c36" },
      { _id: "5d8aa593f412e731138d075e" }
    ]
  });
  testUser.save();
};

module.exports = seed3;
