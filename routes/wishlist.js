const express = require("express");
const router = express.Router();
const Wishlist = require("../models/Wishlist");
const verify = require("../Middlewares/verifyToken");

//GET POSTS
router.get("/", verify, async (req, res) => {
  try {
    const wishlistItems = await Wishlist.find({ user: req.user._id });
    res.json(wishlistItems);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMIT POSTS

router.post("/", verify, async (req, res) => {
  console.log(req.user._id);
  const addItemToWishlist = req.body;
  try {
    const wishlistItem = new Wishlist({
      ...addItemToWishlist,
      user: req.user._id,
    });
    const savedItem = await wishlistItem.save();
    res.json(savedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

// router.get("/:itemId", verify, async (req, res) => {
//   try {
//     const itemFound = await Wishlist.findById(req.params.itemId);
//     res.json(itemFound);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

router.delete("/:itemId", verify, async (req, res) => {
  const removeItemFromWishlist = req.body;
  try {
    const removeItem = await Wishlist.remove({
      _id: req.params.itemId,
      user: req.user._id,
    });
    const newWishlist = await Wishlist.find({ user: req.user._id });
    res.json(newWishlist);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
