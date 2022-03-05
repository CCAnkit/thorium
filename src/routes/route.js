const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")


router.post("/createNewAuthor", authorController.createAuthor  )
router.get("/getAuthorsData", authorController.getAuthorsData)



router.post("/createNewPublisher", publisherController.createNewPublisher  )
router.get("/getPublishersData", publisherController.getPublishersData )



router.post("/createNewBook", bookController.createNewBook  )


router.get("/getAllBooks", bookController.getAllBooks)
//router.get("/getNewBooksData", bookController.getBooksData)

router.put("/newData", bookController.newData)

router.put("/increaseSale", bookController.increaseSale)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;