const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cartRoute = require("./routes/cart");
const wishlistRoute = require("./routes/wishlist");
const productsRoute = require("./routes/products");
const bodyParser = require('body-parser')
const cors = require('cors')
require("dotenv/config");

//ROUTES
const PORT = 3500;

//MIDDLEWARES
app.use(bodyParser.json())
app.use(cors())


app.use("/cart", cartRoute);
app.use("/wishlist", wishlistRoute);
app.use("/products", productsRoute);


mongoose.connect(
   process.env.DB_CONNECTION,
   { useNewUrlParser: true,  useUnifiedTopology:true},
   () => {
      console.log("hello");
   }
);

app.listen(PORT);
