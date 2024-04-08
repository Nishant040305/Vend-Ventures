// Connect to MongoDB
const mongoose = require('mongoose');

connectToMonogo().catch(err => console.log(err));

async function connectToMonogo() {
  await mongoose.connect('mongodb://127.0.0.1:27017/vendVentures');
  console.log("Connected to database");
}

module.exports=connectToMonogo;