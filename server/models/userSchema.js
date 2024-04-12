const mongoose = require("mongoose");
const {Schema} = mongoose;
const userSchema = new Schema(
    {
        userId:{
            type:String,
        },
        displayName:{
            type:String,
            required:true
        },
        email:{
            type:String
        },
        image:{
            type:String
        },
        products:{
            type:[String]
        },
        cart:{
            type:[String]
        },
        likes:{
            type:[String]
        }
    }
)

const user = mongoose.model('user',userSchema);
user.createIndexes();
module.exports = user;
