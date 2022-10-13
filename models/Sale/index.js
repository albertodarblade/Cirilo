const mongoose = require("mongoose");

const SaleSchema = mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  date: Date,
  owner: { email: String, image: String, name: String },
});

module.exports = mongoose.models.Sale || mongoose.model("Sale", SaleSchema);
