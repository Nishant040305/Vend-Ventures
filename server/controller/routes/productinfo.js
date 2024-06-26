const userdb = require("../../models/userSchema");
const productdb = require("../../models/productSchema");
const multer = require("multer")
const express = require("express");
const path = require("path");
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'C:/Users/Nishant Mohan/Desktop/OLX_/OLX/client/public/images');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})
const upload = multer({
    storage:storage
});

module.exports = (app) => {

    app.post("/upload",upload.single('file'), async(req,res)=>{
        // console.log(req.file);
    });

    app.post("/usercreate", async (req, res) => {
        try {
            let user = await userdb.findOne({email:req.body.email});
            if (!user) {
                user = new userdb({
                    displayName: req.body.displayName,
                    email: req.body.email,
                    image: "/vendVentures.png"
                });
                await user.save();
                user.userId = user._id;
                await user.save();
            }
            res.status(200).json({ _id: user.userId })
        } catch (error) {
            console.error(e);
            res.status(500).json({ error: req.body.id });
        }
    });

    app.post("/userinfo", async (req, res) => {
        try {
            let prod = await userdb.findOne({userId: req.body.id });
            res.status(200).json({ message: "OK", _id: req.body.id, data: prod });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: req.body.id});
        }
    });
    app.post("/userInfo", async (req, res) => {
        console.log(req.body);
        try {
            
            let prod = await userdb.findById(req.body.id);
            res.status(200).json({ message: "OK", _id: req.body.id, data: prod });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: req.body.id});
        }
    });
    app.post("/userpush", async (req, res) => {
        // body = {id, pushTo, pushValue}
        const pushObj = {};
        pushObj[req.body.pushTo] = req.body.pushValue;
        try {
            user = await userdb.findOneAndUpdate(
                { 
                    userId: req.body.id
                },
                {  
                    $push: pushObj
                },
            );
            // console.log(user);
        } catch (error) {
            console.error('Error:', error);
        }
    })

    app.post("/productinfo", async (req, res) => {
        // console.log(res.body);
        try {
            let prod = await productdb.findOne({ _id: req.body.id });
            res.status(200).json({ message: "OK", _id: req.body.id, data: prod });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Internal Server Error" });
        }

    });


    app.post("/productcreate",upload.array('files'), async (req, res) => {

        try {
            let prod = JSON.parse(req.body.user);
            // console.log(prod)
            let images = req.files.map(file => {
                let path = file.path.replace(/\\/g, '/');
                let parts = path.split('/');
                return [''].concat(parts.slice(-2)).join('/');
            });
            // console.log(images);
            prod.images = images;
            // console.log(prod);
            if (!prod.userId) prod.userId = req.user ? req.user._id : "test";
            const Prod = new productdb(prod);
            const ProdRet = await Prod.save();
            try {
                user = await userdb.findOneAndUpdate(
                    { 
                        userId: req.user._id
                    },
                    {  
                        $push: {products: ProdRet._id}
                    },
                );
            } catch (error) {
                console.error('Error:', error);
            }
            res.status(200).json({ message: "OK", _id: ProdRet._id, data: ProdRet });
            
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });

    app.post("/productlist", async (req, res) => {
        // filter by exact query object (returns all if no query)
        // returns Array
        try {
            // console.log(req.body);
            let query = req.body || {};
            // console.log(req.query);
            if (query.searchTerm) {
                const searchTerm = new RegExp(req.body.searchTerm, 'i');
                query.title = searchTerm;
                delete query.searchTerm;
            }
            if (query.locationTerm) {
                const locationTerm = new RegExp(req.body.locationTerm, 'i');
                query.location = locationTerm;
                delete query.locationTerm;
            }
            const products = await productdb.find(query);
    
            res.status(200).json(products);
        } catch (error) {
            console.error("Error fetching product list:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
    app.post('/removeCart', async (req, res) => {
        const userid = req.body.userid;
        const productid = req.body.id;
    
        try {
            // Find the user and update the cart
            let user = await userdb.findOneAndUpdate(
                { userId: userid },
                { $pull: { cart: productid } },
                { new: true }  // This option returns the updated document
            );
    
            // Check if the user was found and updated
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            // Send the updated user document as a response
            res.json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    });
    
    /*

            --- SAMPLE query object ---
    const query = {
        "category": "Laptop"
    }

    const title = {
        "searchTerm": "mob"
    }

    */
}

// try{
//     const response = await fetch('http://localhost:5000/productcreate/', {
//           method: 'GET'
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept':"/",
//           },
//           body: JSON.stringify(user)
//         }).then(response => response.json()).then(data=>{
//           if(data.error){
//               throw new Error(data.error);
//           }
//           else{
//               console.log(data);
//               let id = data.id;
//               navigate('/');
//           }
//         }).catch (error=>{
//               console.log(error.message)
            
//         }) 
        
//     }
//     catch(err){
//       console.log("Some error occured");
//     }
// }