const mongoose = require("mongoose");

const RegisteredProductSchema = mongoose.Schema({
  name: String,
  lastPrice: Number,
  priceRecords: [Number]
});

// TODO change this to products on both sides
module.exports = mongoose.models.RegisteredProduct || mongoose.model("RegisteredProduct", RegisteredProductSchema);
