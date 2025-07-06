const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    imageUrl: String,
    customerEmail: {
      type: String,
      required: true, //  ensure email is present
    },
    restaurantName :{
      type: String,
      required: true,
    },
    quantity: { type: Number, default: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
