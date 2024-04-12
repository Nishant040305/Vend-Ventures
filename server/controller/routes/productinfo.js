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
})
module.exports = (app) => {

    app.post("/upload",upload.single('file'), async(req,res)=>{
        console.log(req.file);
    })
    app.post("/userinfo", async (req, res) => {
        try {
            let prod = await userdb.findOne({userId: req.body.id });
            res.status(200).json({ message: "OK", _id: req.body.id, data: prod });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: req.body.id});
        }
    });

    app.post("/productinfo", async (req, res) => {
        console.log(res.body);
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
            console.log(prod)
            let images = req.files.map(file => {
                let path = file.path.replace(/\\/g, '/');
                let parts = path.split('/');
                return [''].concat(parts.slice(-2)).join('/');
            });
            console.log(images);
            prod.images = images;
            console.log(prod);
            if (!prod.userId) prod.userId = req.user ? req.user._id : "test";
            const Prod = new productdb(prod);
            const ProdRet = await Prod.save();
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
            console.log(req.body);
            let query = req.body || {};
            console.log(req.query);
            if (query.searchTerm) {
                const searchTerm = new RegExp(req.body.searchTerm, 'i');
                query = {title: searchTerm};
            }
            const products = await productdb.find(query);
    
            res.status(200).json(products);
        } catch (error) {
            console.error("Error fetching product list:", error);
            res.status(500).json({ error: "Internal Server Error" });
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