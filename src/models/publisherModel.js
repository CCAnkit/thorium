
const mongoose = require('mongoose');
//const { stringify } = require('nodemon/lib/utils');
const ObjectId = mongoose.Schema.Types.ObjectId

const publisherNewSchema = new mongoose.Schema( {
    //_id: String,
    name: String,
    headQuater:String


}, { timestamps: true });


module.exports = mongoose.model('newPublisher', publisherNewSchema)//newpublisher