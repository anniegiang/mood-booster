const Video = require("./models/Video");

const videoSeed = () => {
  const video1 = new Video({
    title: "Achieve Your Most Ambitious Goals",
    videoUrl: "https://www.youtube.com/watch?v=TQMbvJNRpLE",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  video1.save();
  const video2 = new Video({
    title: "The Hidden Code For Transforming Dreams Into Reality",
    videoUrl: "https://www.youtube.com/watch?v=UPoTsudFF4Y",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  video2.save();
  const video3 = new Video({
    title: "Programming your mind for success",
    videoUrl: "https://www.youtube.com/watch?v=MmfikLimeQ8",
    mood1: false,
    mood2: false,
    mood3: false,
    mood4: false,
    mood5: false,
    mood6: false,
    mood7: false
  });
  video3.save();
};

module.exports = videoSeed;
