const express = require('express');
const router = express.Router();
const Userbook= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook)

router.get("/getBooksData", bookController.bookList)

router.get("/bookYearVise", bookController.getBooksInYear)

router.get("/getXINRBooks", bookController.getXINRBooks)

router.get("/getRandomBooks", bookController.getRandomBooks)

router.get("/getParticularBooks", bookController.getParticularBooks)

module.exports = router;