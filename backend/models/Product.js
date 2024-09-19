const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: True },
  description: { type: String, required: True },
  priceInCents: { type: Number, required: True },
  category: { type: String, required: True },
  brand: { type: String, required: True },
  images: { type: Array, required: True },
  stock: { type: Number, required: True },
  colorOptions: { type: Array, required: True },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
