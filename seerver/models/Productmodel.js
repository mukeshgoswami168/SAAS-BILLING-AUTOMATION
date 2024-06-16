const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  
  features: {
    type: String,
  },
  price: {
    type: Number,
  },
  discountedPrice: {
    type: Number,
  },
  durationUsed: {
    type: Number,
  },
  total: {
    type: Number,
  },
  // data: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   // required: true,
  //   ref: "Data",
  // },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
