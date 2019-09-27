const Video = require("./models/Video");
const Seed = () => {
    const video1 = new Video({
        "title": "Vine",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": true,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    video1.save()
    const video2 = new Video({
        "title": "Vine2",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": true,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    video2.save()
    const video3 = new Video({
        "title": "Vine3",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": true,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    video3.save()
    const video4 = new Video({
        "title": "Vine4",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": true,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    video4.save()
    const video5 = new Video({
        "title": "Vine5",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": true,
        "mood6": false,
        "mood7": false
    })
    video5.save()
    const video6 = new Video({
        "title": "Vine6",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": true,
        "mood7": false
    })
    video6.save()
    const video7 = new Video({
        "title": "Vine7",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": true
    })
    video7.save()
}

module.exports = Seed