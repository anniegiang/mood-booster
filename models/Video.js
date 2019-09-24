const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    videoUrl: {
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

module.exports = mongoose.model('videos', VideoSchema)