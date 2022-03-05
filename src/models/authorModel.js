const mongoose = require('mongoose');

const authorNewSchema = new mongoose.Schema( {
   // _id: String,
    authorName: String,
    age:Number,
    address:String

}, { timestamps: true });

module.exports = mongoose.model('newAuthor', authorNewSchema)//newAuthor