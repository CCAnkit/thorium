const mongoose = require('mongoose');
//const publisher = require('..//publisher');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookNewSchema = new mongoose.Schema( {
    //_id: String,
    name: String,
    author:{
        type:ObjectId,
        ref:"newAuthor"
    },
    price: Number,
    ratings: Number,
    publisher:
    {
        type:ObjectId,
        ref:"newPublisher"
    },
    isHardCover:{
        type:Boolean,
        default:false
    },
}, { timestamps: true });


module.exports = mongoose.model('newOneBook', bookNewSchema)//newOneBook