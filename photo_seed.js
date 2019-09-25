const Photo = require("./models/Photo");
const seed1 = () => {
    const photo2 = new Photo({
        "title": "Meme Title",
        "photoUrl": "https://www.todaysparent.com/wp-content/uploads/2017/06/when-your-kid-becomes-a-meme-1024x576-1497986561.jpg",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    photo2.save()
}

module.exports = seed1