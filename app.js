const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cartRoute = require("./routes/cart");
const wishlistRoute = require("./routes/wishlist");
const productsRoute = require("./routes/products");
const bodyParser = require("body-parser");
const cors = require("cors");
const registerRoute = require("./routes/RegisterUser");
const loginRoute = require("./routes/LoginUser");

require("dotenv/config");

//ROUTES
const PORT = 3400;

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());

app.use("/cart", cartRoute);
app.use("/wishlist", wishlistRoute);
app.use("/products", productsRoute);
app.use("/register", registerRoute);
app.use("/login", loginRoute);

app.get("/", (req, res) => {
   res.send("juasdjaksd");
});

mongoose.connect(
   process.env.DB_CONNECTION,
   { useNewUrlParser: true, useUnifiedTopology: true },
   () => {
      console.log("works");
   }
);

app.listen(PORT);
