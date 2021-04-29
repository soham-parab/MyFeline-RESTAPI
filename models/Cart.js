const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    name:String,
   cart: [],
   date: {
      type: Date,
      default: Date.now,
   },
});

module.exports = mongoose.model("Cart", CartSchema);
