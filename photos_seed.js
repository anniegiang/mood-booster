const Photo = require("./models/Photo");
const seed1 = () => {
  const photo1 = new Photo({
    title: "Manchester, Uk",
    photoUrl:
      "https://preview.redd.it/uazw3ciegin31.jpg?width=640&height=853&crop=smart&auto=webp&s=dda09685e14d1a9a16a98fbda4b645153e586e8d",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo1.save();
  const photo2 = new Photo({
    title: "Become a meme",
    photoUrl:
      "https://www.todaysparent.com/wp-content/uploads/2017/06/when-your-kid-becomes-a-meme-1024x576-1497986561.jpg",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo2.save();
  const photo3 = new Photo({
    title: "Advice from a tree",
    photoUrl: "https://i.redd.it/hn4h7psxt5o31.jpg",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  photo3.save();
};

module.exports = seed1;
