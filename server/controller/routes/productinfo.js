const userdb = require("../../models/userSchema");
const productdb = require("../../models/productSchema");

module.exports = (app) => {
    app.get("/userinfo", async (req, res) => {
        try {
            let prod = await userdb.findOne({ _id: req.query.id });
            res.status(200).json({ message: "OK", _id: req.query.id, data: prod });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });

    app.get("/productinfo", async (req, res) => {
        try {
            let prod = await productdb.findOne({ _id: req.query.id });
            res.status(200).json({ message: "OK", _id: req.query.id, data: prod });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });

    app.post("/productcreate", async (req, res) => {
        try {
            let prod = req.query; // ?
            if (!prod.userId) prod.userId = req.user._id;
            const Prod = new productdb(prod);
            const ProdRet = await Prod.save();
            res.status(200).json({ message: "OK", _id: ProdRet._id, data: ProdRet });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });

    app.get("/productlist", async (req, res) => {
        // filter by exact query object (returns all if no query)
        // returns Array
        try {
            let query = req.query || {};
            if (req.query.searchTerm) {
                const searchTerm = new RegExp(req.query.searchTerm, 'i');
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