const express = require('express');
const router = express.Router(); const UserModel= require("../models/userModel.js")

const UserController = require("../controllers/userController")
const ProductController = require("../controllers/productController")
const OrderController = require("../controllers/orderController")
const Middleware = require("../middleware/mwForHeader")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


//   Users
router.post("/createUser", Middleware.checkHeader , UserController.createUser )

router.get("/getUsersData", UserController.createUser )

//   Product
router.post("/createProduct", ProductController.createProduct )

router.get("/getProductData", ProductController.getProductData )

//  order - create
router.post("/createOrder", Middleware.checkHeader , OrderController.createOrder )

router.get("/getOrderData", OrderController.getOrderData)


module.exports = router;