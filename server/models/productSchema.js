const mongoose = require("mongoose");
const {Schema} = mongoose;
const productSchema = new Schema(
    {
        productId:{
            type:String,
            required:true
        },
        userId:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true,
        },
        category:{
            type:String
        },
        description:{
            type:String
        },
        price:{
            type:String,
            required:true
        },
        images:{
            type:[String]
        },
        chatId:{
            type:[String]
        },
        location:{
            type:String
        }
    }
)

const prod = mongoose.model('product',productSchema);
prod.createIndexes();
module.exports = prod;