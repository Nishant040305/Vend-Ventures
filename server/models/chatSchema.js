const mongoose = require("mongoose");
const {Schema} = mongoose;
const chatSchema = new Schema(
    {
        // channelId = _id
        productId:{
            type:String,
            required:true
        },
        ownerId:{
            type:String,
            required:true
        },
        userId:{
            type:String,
            required:true
        },
        messages: {
            type: [{
                user: String,
                message: Object, // { type: "text", content: "Hello World" }
                timestamp: { type: Date, default: Date.now }
            }],
            default: []
        }
    }
)

const chat = mongoose.model('chat',chatSchema);
chat.createIndexes();
module.exports = chat;
