const { count } = require("console")
const orderModel= require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")
const { find } = require("../models/userModel")

const createOrder= async function (req, res) {
    const data = req.body
    const u_id = req.body.userId
    const p_id = req.body.productId

    const isProduct = await productModel.find({ _id : p_id }).select({ _id : 1 })
    const isUser = await userModel.find({ _id : u_id }).select({ _id : 1 })

    if ( isUser.length > 0 ) {

        if ( isProduct.length > 0 ) { 

            const isHeader = req.headers.isfreeappuser
            console.log("header " , isHeader)

            if( isHeader === "true" ) {
                console.log("free")
                req.body.amount = 0
                req.body.isFreeAppUser = true

                const createdOrder = await orderModel.create(data)
                res.send({data : createdOrder})

            } else {
                console.log("paid")
                let amount = req.body.amount

                let balance = await userModel.find({ _id : u_id}).select({ Balance :1 , _id :0 })
                let price = await productModel.find({ _id : p_id}).select({ Price :1 , _id :0 })

                balance = balance.map( x => x.Balance)
                balance = balance.join(" ")

                price = price.map(x => x.Price)
                price = price.join(" ")
 
                if ( balance >= price ) {

                     req.body.amount = price 
                     req.body.isFreeAppUser = false
                     const user = await userModel.findOneAndUpdate({ _id : u_id } , 
                                                                   { $inc : { Balance : -price}} , 
                                                                   { new : true })
                const createdOrder = await orderModel.create(data)
                res.send({placedOrder : createdOrder})
                } else {

                    res.send(" User dont have enough amount to purchase this product")
                }
            }
    
        }else {
            res.send("error : Invalid ProductId")
        }
    } else {
        res.send("error : Invalid UserId")
    }
    
}



const getOrderData = async function (req, res) {
    let allOrders = await orderModel.find().populate("userId productId")
    res.send({data : allOrders})
}


module.exports.createOrder = createOrder
module.exports.getOrderData = getOrderData
