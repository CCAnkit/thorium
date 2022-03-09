const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: Number,
    emailId: String,
    password: String,
    gender: ["female", "male","other"],
    isDelteted: {
        type: Boolean,
        default: false
    },
    age: Number,
},{ timestamps: true});

module.exports = mongoose.model('User', userSchema);