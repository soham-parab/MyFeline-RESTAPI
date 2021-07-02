const express = require("express");
const verify = require("../Middlewares/verifyToken");
const router = express.Router();

const Products = require("../models/Products");

//GET POSTS
router.get("/", verify, async (req, res) => {
  try {
    const productItems = await Products.find();
    res.json(productItems);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMITS POST
router.post("/", async (req, res) => {
  const productItem = new Products(req.body);
  try {
    const savedItem = await productItem.save();
    res.json(savedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

//get specific product
router.get("/:itemId", async (req, res) => {
  try {
    const itemFound = await Products.findById(req.params.itemId);
    res.json(itemFound);
  } catch (err) {
    res.json({ message: err });
  }
});

//remove specific product
router.delete("/:itemId", async (req, res) => {
  try {
    const removeItem = await Products.remove({ _id: req.params.itemId });
    res.json(removeItem);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
