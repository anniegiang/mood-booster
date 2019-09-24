const Quote = require("./models/Quote");
const Seed = () => {
    const quote2 = new({
        "title": "Quote Title",
        "quoteText": "This is the quote",
        "author": "me",
        "mood1": false,
        "mood2": false,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
}

module.exports = Seed