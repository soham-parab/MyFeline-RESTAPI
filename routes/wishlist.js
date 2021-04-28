const express = require('express')

const router = express.Router()

const Wishlist = require("../models/Wishlist")

router.get("/", (req, res) => {
    res.send("this is wishlist");
 });
 
router.post("/", (req,res)=>{
console.log(req.body)



})

 module.exports = router;