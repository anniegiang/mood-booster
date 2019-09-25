const Quote = require("./models/Quote");
const seed2 = () => {
    const quote2 = new Quote({
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
    const quote3 = new Quote({
        "title": "2nd Quote Title",
        "quoteText": "This is the second quote",
        "author": "johnson",
        "mood1": false,
        "mood2": true,
        "mood3": false,
        "mood4": false,
        "mood5": false,
        "mood6": false,
        "mood7": false
    })
    quote3.save()
}

module.exports = seed2