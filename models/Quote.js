const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: true
    },
    mood1: {
        type: Boolean,
        required: true
    },
    mood2: {
        type: Boolean,
        required: true
    },
    mood3: {
        type: Boolean,
        required: true
    },
    mood4: {
        type: Boolean,
        required: true
    },
    mood5: {
        type: Boolean,
        required: true
    },
    mood6: {
        type: Boolean,
        required: true
    },
    mood7: {
        type: Boolean,
        required: true
    },
})

module.exports = Quote = mongoose.model('quotes', QuoteSchema)