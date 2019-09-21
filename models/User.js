const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    // create props
    handle: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// connect to mongoose by passing in schema 
User = mongoose.model('users', UserSchema);

module.exports = User;