const express = require('express')

const router = express.Router()

const Cart = require("../models/Cart")

router.get("/", (req, res) => {
    res.send("this is cart");
 });

 router.post("/", (req,res)=>{
    console.log(req.body)})
 

 module.exports = router;