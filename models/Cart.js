const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
   name: String,
   description: [],
   images: [],
   price: Number,
   rating: Number,
   total_ratings: Number,
   category: String,
   featured: Boolean,
   brand: String,
   stock: Boolean,
   quantity: Number,
});

module.exports = mongoose.model("Cart", CartSchema);
