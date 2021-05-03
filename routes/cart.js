const express = require("express");

const router = express.Router();

const Cart = require("../models/Cart");

//GET POSTS
router.get("/", async (req, res) => {
   try {
      const cartItems = await Cart.find();
      res.json(cartItems);
   } catch (err) {
      res.json({ message: err });
   }
});

//SUBMITS POST
router.post("/", async (req, res) => {
   try {
      const cartItem = new Cart({
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
      });
      const savedItem = await cartItem.save();
      res.json(savedItem);
   } catch (err) {
      res.json({ message: err });
   }
});

router.get("/:itemId", async (req, res) => {
   try {
      const itemFound = await Cart.findById(req.params.itemId);
      res.json(itemFound);
   } catch (err) {
      res.json({ message: err });
   }
});

router.delete("/:itemId", async (req, res) => {
   try {
      const removeItem = await Cart.remove({ _id: req.params.itemId });
      const newCart = await Cart.find();
      res.json(newCart);
   } catch (err) {
      res.json({ message: err });
   }
});

router.patch("/:prdId", async (req, res) => {
   try {
      const updatedPrd = await Cart.updateOne(
         { _id: req.params.prdId },
         {
            $set: { quantity: req.body.quantity },
         }
      );
      const newPrd = await Cart.find();
      res.json(newPrd);
      console.log(updatedPrd);
   } catch (err) {
      res.json({ message: err });
      console.log(err);
   }
});

module.exports = router;
