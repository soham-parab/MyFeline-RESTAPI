const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const verify = require("../Middlewares/verifyToken");

//GET POSTS
router.get("/", verify, async (req, res) => {
   try {
      const cartItems = await Cart.find({ user: req.user._id });
      res.json(cartItems);
   } catch (err) {
      res.status(400).json({ message: "Error", error: err });
   }
});

//SUBMITS POST
router.post("/", verify, async (req, res) => {
   const addProductToCart = req.body;

   const newCartItem = new Cart({
      ...addProductToCart,
      user: req.user_id,
   });
   try {
      const savedItem = await newCartItem.save();
      res.json(savedItem);
   } catch (err) {
      res.status(401).json({ success: false, message: err });
   }
});

//specific item
router.get("/:itemId", async (req, res) => {
   try {
      const itemFound = await Cart.findById(req.params.itemId);
      res.json(itemFound);
   } catch (err) {
      res.json({ message: err });
   }
});

//delete item
router.delete("/:itemId", verify, async (req, res) => {
   try {
      const removeItem = await Cart.remove({
         _id: req.params.itemId,
         user: req.user._id,
      });
      const newCart = await Cart.find();
      res.json(newCart);
   } catch (err) {
      res.json({ message: err });
   }
});

//update cart item
router.patch("/:prdId", verify, async (req, res) => {
   try {
      const updatedPrd = await Cart.updateOne(
         { _id: req.params.prdId, user: req.user._id },
         {
            $set: { quantity: req.body.quantity },
         }
      );
      const newPrd = await Cart.find();
      res.json(newPrd);
   } catch (err) {
      res.json({ message: err });
   }
});

module.exports = router;
