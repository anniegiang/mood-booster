const Video = require("./models/Video");
const Seed = () => {
    const video2 = new Video({
        "title": "Vine",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    video2.save()
}

module.exports = Seed