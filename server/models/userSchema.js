const mongoose = require("mongoose");
const {Schema} = mongoose;
const userSchema = new Schema(
    {
        googleId:{
            type:String,
            required:true
        },
        displayName:{
            type:String,
            required:true,
        },
        email:{
            type:String
        },
        image:{
            type:String
        },
        products:{
            type:[String]
        }
    }
)

const user = mongoose.model('user',userSchema);
user.createIndexes();
module.exports = user;
