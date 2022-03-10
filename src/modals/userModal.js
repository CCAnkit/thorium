const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: String,
    emailId: {
        type: String,
        require: true
    },
    password: {
        type : String ,
        required : true
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    isDelete : {
        type : Boolean ,
        default : false
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);