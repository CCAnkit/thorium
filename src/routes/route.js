const express = require('express');
const router = express.Router();
const aws = require("aws-sdk");
const userController = require("../controller/userController")
const bookController = require("../controller/bookController")
const reviewController = require("../controller/reviewController")
const authController = require("../middleWare/auth.js");


//....................aws................................

aws.config.update(
    {
        accessKeyId: "AKIAY3L35MCRVFM24Q7U",
        secretAccessKey: "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",
        region: "ap-south-1"
    }
)


let uploadFile = async (file) => {
    return new Promise( function(resolve, reject) {     
      
        let s3 = new aws.S3({ apiVersion: "2006-03-01" })  
    
        var uploadParams = {
            ACL: "public-read", 
            Bucket: "classroom-training-bucket", 
            Key: "BookCover/" + file.originalname,
            Body: file.buffer
        }
    console.log(uploadFile)
    s3.upload(uploadParams, function (err, data) {
            if (err) { 
                return reject({ "error": err.message }) 
            }
            return resolve(data.Location) 
          }
        )
    }
    )
}

router.post("/write-file-aws", async function (req, res) {
    try {
        let files = req.files
        if (files && files.length > 0) {
            let uploadedFileURL = await uploadFile(files[0])
            res.status(201).send({ msg: "file uploaded succesfully", data: uploadedFileURL })
        }
        else {
            res.status(400).send({ msg: "No file found" })
        }
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}
)




// ...................User Api..................

router.post("/register", userController.createUser)

router.post("/login",userController.userLogin )

// ...................Book Api..............................

router.post("/books",authController.authenticate,bookController.createBook)

router.get("/books",authController.authenticate,bookController.getBook)

router.get("/books/:bookId",authController.authenticate, bookController.bookById)

router.put("/books/:bookId",authController.authenticate,authController.authorise,bookController.updateBook)

router.delete("/books/:bookId",authController.authenticate,authController.authorise,bookController.deleteBookById)


//.............................review api.....................................

router.post("/books/:bookId/review", reviewController.createReview )

router.put("/books/:bookId/review/:reviewId", reviewController.updateReview )

router.delete("/books/:bookId/review/:reviewId", reviewController.deleteReview)

module.exports = router;
