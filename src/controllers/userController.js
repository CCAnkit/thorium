const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let createdUser= await UserModel.create(data)
    res.send({data : createdUser})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({data : allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData