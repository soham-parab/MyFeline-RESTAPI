const express = require('express')

const router = express.Router()

const Products = require("../models/Products")

router.get("/", (req, res) => {
    res.send("this is products");
 });
 

 module.exports = router;