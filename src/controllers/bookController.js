const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const PublisherModel= require("../models/publisherModel")

const createNewBook= async function (req, res) {
    const book=req.body
    const a_Id=req.body.author
    const p_Id=req.body.publisher
     
    const isAuthor= await authorModel.find({_id:a_Id}).select({_id:1})
    const isPublisher= await PublisherModel.find({_id:p_Id}).select({_id:1})
   
    console.log(isAuthor)
    console.log(isPublisher)

    if(isAuthor.length>0)
    {
        if(isPublisher.length>0)
        {
            const bookData=await bookModel.create(book)
            res.send({data:bookData})
        }
        else{
            res.send({error:"Invalid publisher Id"})
        }
    }else{
        res.send({error:"Invalid Author Id"})
    }
}

const getAllBooks= async function (req, res) {
    //let books = await bookModel.find()
    //res.send({data: books})
    let allBook = await bookModel.find().populate('author publisher')
    res.send({data: allBook})
}

const newData = async function (req, res) {
    {
        const update = await bookModel.updateMany({$or: [{"publisher":"62207b420c7a6b716bf251d3" },{"publisher": "62207b5f0c7a6b716bf251d7"}]},{"isHardCover" : true});
         res.send({msg:update})
       }

}

const increaseSale= async function (req, res) {
    let increasePrice = await bookModel.updateMany({ratings:{$gt:3.5}},{$inc : {price: +10}});

    res.send({msg: increasePrice })
}
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('newAuthor newPublisher')
    res.send({data: specificBook})

}

module.exports.createNewBook= createNewBook
module.exports.getAllBooks= getAllBooks
module.exports.newData= newData
module.exports.increaseSale= increaseSale

module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails