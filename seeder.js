const Video = require("./models/Video");
const Photo = require('./models/Photo');
const Quote = require('./models/Quote');
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
    const photo1 = new Photo({
        "title": "photo1",
        "photoUrl": "https://cdn1.tedsby.com/tb/large/storage/1/4/3/143646/collectible-dog-husky-puppy-hector.jpg",
        "mood1": true,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    photo1.save()

    const photo2 = new Photo({
        "title": "photo2",
        "photoUrl": "https://cdn1.tedsby.com/tb/large/storage/1/4/3/143646/collectible-dog-husky-puppy-hector.jpg",
        "mood1": false,
        "mood2": true,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    photo2.save()

    const photo3 = new Photo({
        "title": "photo3",
        "photoUrl": "https://cdn1.tedsby.com/tb/large/storage/1/4/3/143646/collectible-dog-husky-puppy-hector.jpg",
        "mood1": false,
        "mood2": false,
        "mood3": true,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    photo3.save()

    const photo4 = new Photo({
        "title": "photo4",
        "photoUrl": "https://cdn1.tedsby.com/tb/large/storage/1/4/3/143646/collectible-dog-husky-puppy-hector.jpg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": true,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    photo4.save()

    const photo5 = new Photo({
        "title": "photo5",
        "photoUrl": "https://cdn1.tedsby.com/tb/large/storage/1/4/3/143646/collectible-dog-husky-puppy-hector.jpg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": true,
        "mood6": false,
        "mood7": false
    })
    photo5.save()

    const photo6 = new Photo({
        "title": "photo6",
        "photoUrl": "https://cdn1.tedsby.com/tb/large/storage/1/4/3/143646/collectible-dog-husky-puppy-hector.jpg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": true,
        "mood7": false
    })
    photo6.save()

    const photo7 = new Photo({
        "title": "photo7",
        "photoUrl": "https://cdn1.tedsby.com/tb/large/storage/1/4/3/143646/collectible-dog-husky-puppy-hector.jpg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": true
    })
    photo7.save()

    const quote1 = new Quote({
        "title": "quote1",
        "quoteText": "Youre bananas B A N A N A",
        'author': 'monkey',
        "mood1": true,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    quote1.save()

    const quote2 = new Quote({
        "title": "quote2",
        "quoteText": "Youre bananas B A N A N A",
        'author': 'monkey',
        "mood1": false,
        "mood2": true,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    quote2.save()

    const quote3 = new Quote({
        "title": "quote3",
        "quoteText": "Youre bananas B A N A N A",
        'author': 'monkey',
        "mood1": false,
        "mood2": false,
        "mood3": true,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    quote3.save()

    const quote4 = new Quote({
        "title": "quote4",
        "quoteText": "Youre bananas B A N A N A",
        'author': 'monkey',
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": true,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    quote4.save()

    const quote5 = new Quote({
        "title": "quote5",
        "quoteText": "Youre bananas B A N A N A",
        'author': 'monkey',
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": true,
        "mood6": false,
        "mood7": false
    })
    quote5.save()

    const quote6 = new Quote({
        "title": "quote6",
        "quoteText": "Youre bananas B A N A N A",
        'author': 'monkey',
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": true,
        "mood7": false
    })
    quote6.save()

    const quote7 = new Quote({
        "title": "quote7",
        "quoteText": "Youre bananas B A N A N A",
        'author': 'monkey',
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": true
    })
    quote7.save()
}

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
