const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    hotelName: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required: true },
    location: { type: String, required: true },
    ownerEmail: { type: String, required: true }, // link to login owner
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
