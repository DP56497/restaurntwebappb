const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
   name: String,
  price: Number,
  imageUrl: String,
  restaurantName: {
    type: String,
    required: true, // tag each food with restaurant
  },
  ownerEmail : {
    type : String,
    required : true,
  }
});

const  FoodItem = mongoose.model('FoodItem', FoodItemSchema);

module.exports = FoodItem;