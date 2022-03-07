const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    ProductName : String ,
    Category : String ,
    Price : {
        type : Number ,
        required : true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema) 


