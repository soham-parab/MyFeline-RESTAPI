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
      res.json(itemFound)
   }
   catch(err) { 
       res.json({message:err})
   }
});

router.delete("/:itemId", async (req,res)=> {
 try {
     const removeItem = await Cart.remove({_id: req.params.itemId})
    res.json(removeItem)}
     catch(err){
         res.json({message:err})
     }

})


module.exports = router;
