const Video = require("./models/Video");

<<<<<<< HEAD
const videosSeed = () => {
    const video1 = new Video({
        "title": "The Science Of Motivation",
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/The+Science+Of+Motivation.mp4",
=======
const videoSeed = () => {
    const video1 = new Video({
        "title": "The Science Of Motivation",
        "videoUrl": "https://www.youtube.com/watch?v=pZT-FZqfxZA&t=3s",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/When+Life+Hits+You.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=zYsg6l29HKE&t=2s",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/Managing+Stress.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=hnpQrMqDoqE",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/The+Stress+Response.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=mtRrxNTnyh8",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/What+Is+Imposter+Syndrome.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=ZQUxL4Jm1Lo",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/The+Impostor+Syndrome.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=eqhUHyVpAwE&t=61s",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/7+Tips+To+Beat+Exam+Anxiety.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=FyBdA61GmJ0",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
        "title": "Exam Stress Releasing Tips and Techniques",
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/Exam+Stress+Releasing+Tips++and+Techniques.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=VZTGBj7Zyvk",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/What+Is+Social+Anxiety.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=-Gjn9N5vfmc&t=2s",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/How+To+Overcome+Social+Anxiety.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=_NQGQImrpx4",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/Struggle+Makes+You+Stronger.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=Wcf5b3mENJU",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/Unbroken.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=26U_seo0a1g&t=210s",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/Mental+Toughness.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=XbXoXMvQjOk",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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
<<<<<<< HEAD
        "videoUrl": "https://mood-booster-pro.s3-us-west-1.amazonaws.com/5+Signs+You're+Tired.mp4",
=======
        "videoUrl": "https://www.youtube.com/watch?v=rVd2lsHE7Nc&t=268s",
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
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

<<<<<<< HEAD
module.exports = videosSeed;
=======
module.exports = videoSeed;
>>>>>>> e4bf07a8c8e510701ea7e6fb1b4c03862dd03e8d
