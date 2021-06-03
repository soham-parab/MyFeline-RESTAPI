const express = require("express");

const router = express.Router();

const Products = require("../models/Products");

//GET POSTS
router.get("/", async (req, res) => {
   try {
      const productItems = await Products.find();
      res.json(productItems);
   } catch (err) {
      res.json({ message: err });
   }
});

//SUBMITS POST
router.post("/", async (req, res) => {
   try {
      const productItem = new Products({
         name: req.body.name,
         description: req.body.description,
         images: req.body.images,
         price: req.body.price,
         rating: req.body.rating,
         total_ratings: req.body.total_ratings,
         category: req.body.category,
         featured: req.body.featured,
         brand: req.body.brand,
         stock: req.body.stock,
         quantity: req.body.quantity,
         date: {
            type: Date,
            default: Date.now,
         },
      });
      const savedItem = await productItem.save();
      res.json(savedItem);
   } catch (err) {
      res.json({ message: err });
   }
});

router.get("/:itemId", async (req, res) => {
   try {
      const itemFound = await Products.findById(req.params.itemId);
      res.json(itemFound);
   } catch (err) {
      res.json({ message: err });
   }
});

router.delete("/:itemId", async (req, res) => {
   try {
      const removeItem = await Products.remove({ _id: req.params.itemId });
      res.json(removeItem);
   } catch (err) {
      res.json({ message: err });
   }
});

module.exports = router;
