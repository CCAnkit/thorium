const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const validation = require('../middleware/auth.js');

router.post("/users", userController.createUser);

router.post('/login', userController.loginUser);

//The userId is sent by front end

router.get('/users/:userId', validation.tokenCheck, userController.getUserData);

router.put('/users/:userId', validation.tokenCheck, userController.updateUser);

router.delete('/user/:userId', validation.tokenCheck, userController.isDeleteUser);

module.exports = router;


