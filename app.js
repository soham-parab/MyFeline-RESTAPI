const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cartRoute = require("./routes/cart");
const wishlistRoute = require("./routes/wishlist");
const productsRoute = require("./routes/products");
require("dotenv/config");

//ROUTES
const PORT = 3500;

app.use("/cart", cartRoute);
app.use("/wishlist", wishlistRoute);
app.use("/products", productsRoute);

app.get("/", (req, res) => {
   res.send("we are on home");
});

app.get("/posts", (req, res) => {
   res.send("Hello tehre!");
});

mongoose.connect(
   process.env.DB_CONNECTION,
   { useNewUrlParser: true,  useUnifiedTopology:true},
   () => {
      console.log("hello");
   }
);

app.listen(PORT);
