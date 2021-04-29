const mongoose = require("mongoose");

const WishlistSchema = mongoose.Schema({
   name:String,
   cart: [],
   date: {
      type: Date,
      default: Date.now,
   },
});

module.exports = mongoose.model("Wishlist", WishlistSchema);
