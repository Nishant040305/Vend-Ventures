const mongoose = require("mongoose");
const {Schema} = mongoose;
const userSchema = new Schema(
    {
        userId:{
            type:String,
            required:true
        },
        displayName:{
            type:String,
            required:true,
        },
        emails:{
            type:String
        },
        image:{
            type:String
        }
    }
)

const user = mongoose.model('user',userSchema);
user.createIndexes();
module.exports = user;
