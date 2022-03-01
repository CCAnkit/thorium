const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const bookSchema = new mongoose.Schema( {
    bookName:
    {
    type: String, 
    required:true
    },
    authorName : String, 
    catogary:String,
    year:
    {
    type:Number,
    default:2021
    },
    tags: [String],
    
    isPublished:
    {
        type: Boolean,
        default:false
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages:Number,
    stockAvailable:Boolean,

    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover