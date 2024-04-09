const mongoose = require("mongoose");
const {Schema} = mongoose;
const productSchema = new Schema(
    {
        userId:{
            type:String,
            required:true
        },
        state:{
            type:String,
            default:'true'
        },
        location:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:Object,
            default:{}, // {desc, area, ...}
        },
        price:{
            type:String,
            required:true
        },
        images:{
            type:[String]
        },
        chats:{
            type:[String]
        },
        phoneNumber:{
            type:String
        }
    }
)

const prod = mongoose.model('product',productSchema);
prod.createIndexes();
module.exports = prod;