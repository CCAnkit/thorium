const express = require("express");
const router = express.Router;

const userController = require("../controllers/userController.js");
const authentication = require("../middleware/authentication.js");
const authorization = require("../middleware/authorization.js");


//  register user
router.post("/users", userController.createUser  )

//  login user  
router.post("/login", userController.loginUser)

//  fetch data from DB
router.get("/users/:userId", authenticationMW.authentication, authorizationMW.authorization , userController.getUserData)

//  Update data 
router.put("/users/:userId", authenticationMW.authentication, authorizationMW.authorization , userController.updateUser)

//  delete data
router.delete("/users/:userId",authenticationMW.authentication, authorizationMW.authorization , userController.deleteUser)


module.exports = router;
