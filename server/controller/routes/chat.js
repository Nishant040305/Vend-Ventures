const userdb = require("../../models/userSchema");
const productdb = require("../../models/productSchema");
const chatdb = require("../../models/chatSchema.js")

module.exports = (app) => {
    app.post('/createChat', async (req, res) => {
        const { productId, ownerId, userId } = req.body;
    
        try {
            const newChat = new chatdb({
                productId: productId || "test",
                ownerId: ownerId || "test",
                userId: userId || "test",
                messages: []
            });
    
            const savedChat = await newChat.save();
            res.status(201).json({ _id: savedChat._id });
        } catch (error) {
            console.error('Error creating chat:', error);
            res.status(500).json({ error: 'An error occurred while creating the chat' });
        }
    });

    app.post('/getChat', async (req, res) => {
        const { productId, userId } = req.body;

        try {
            const channel = await chatdb.findOne({
                productId: productId || "test",
                userId: userId || "test"
            });
            if (!channel) {
                return res.status(200).json({ error: 'Chat not found' });
            }
            res.status(200).json({ channel });
        } catch (error) {
            console.error('Error fetching channel:', error);
            res.status(500).json({ error: 'An error occurred while fetching chat' });
        }
    });

    app.post('/fetchChat', async (req, res) => {
        const { _id } = req.body;
    
        try {
            const channel = await chatdb.findById(_id);
            if (!channel) {
                return res.status(404).json({ error: 'Chat not found' });
            }
            res.status(200).json({ channel });
        } catch (error) {
            console.error('Error fetching channel:', error);
            res.status(500).json({ error: 'An error occurred while fetching chat' });
        }
    });
    
}