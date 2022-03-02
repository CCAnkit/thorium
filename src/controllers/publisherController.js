
const PublisherModel= require("../models/publisherModel")

const createNewPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getPublishersData= async function (req, res) {
    let publishers = await PublisherModel.find()
    res.send({data: publishers})
}

module.exports.createNewPublisher= createNewPublisher
module.exports.getPublishersData= getPublishersData