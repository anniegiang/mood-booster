const Video = require("./models/Video");

const videoSeed = () => {
    const video1 = new Video({
        "title": "The Science Of Motivation",
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
        "title": "When Life Hits You",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": true,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    video2.save()

    const video3 = new Video({
        "title": "Managing Stress",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": true,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    video3.save()

    const video4 = new Video({
        "title": "The Stress Response",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": true,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    video4.save()

    const video5 = new Video({
        "title": "What Is Imposter Syndrome",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": true,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    video5.save()

    const video6 = new Video({
        "title": "The Impostor Syndrome",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": true,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    video6.save()

    const video7 = new Video({
        "title": "7 Tips To Beat Exam Anxiety",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": true,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    video7.save()

    const video8 = new Video({
        "title": "Exam Stress Releasing Tips  and Techniques",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": true,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    video8.save()

    const video9 = new Video({
        "title": "What Is Social Anxiety",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": true,
        "mood6": false,
        "mood7": false
    })
    video9.save()

    const video10 = new Video({
        "title": "How To Overcome Social Anxiety",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": true,
        "mood6": false,
        "mood7": false
    })
    video10.save()

    const video11 = new Video({
        "title": "Struggle Makes You Stronger",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": true,
        "mood7": false
    })
    video11.save()

    const video12 = new Video({
        "title": "Unbroken",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": true,
        "mood7": false
    })
    video12.save()

    const video13 = new Video({
        "title": "Mental Toughness",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": true
    })
    video13.save()

    const video14 = new Video({
        "title": "5 Signs You're Tired",
        "videoUrl": "https://www.youtube.com/watch?v=MMXAjhAopyg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": true
    })
    video14.save()
}

module.exports = videoSeed;
