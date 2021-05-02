const express = require('express')

const router = express.Router()

const Wishlist = require("../models/Wishlist")

//GET POSTS
router.get("/", async (req, res) => {
    try {
       const wishlistItems = await Wishlist.find();
       res.json(wishlistItems);
    } catch (err) {
       res.json({ message: err });
    }
 });

// SUBMIT POSTS




router.post("/", async (req,res)=>{
    try {
    const wishlistItem = new Wishlist({
       name: req.body.name,
       description: req.body.description,
    });
    const savedItem = await wishlistItem.save();
    res.json(savedItem);
 } catch (err) {
    res.json({ message: err });
 }
});



router.get("/:itemId", async (req, res) => {
    try {
       const itemFound = await Wishlist.findById(req.params.itemId); 
       res.json(itemFound)
    }
    catch(err) { 
        res.json({message:err})
    }
 });

 
router.delete("/:itemId", async (req,res)=> {
    try {
        const removeItem = await Wishlist.remove({_id: req.params.itemId})
       res.json(removeItem)}
        catch(err){
            res.json({message:err})
        }
   
   })

module.exports = router;