const FoodItem = require('../models/FoodItem');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');




const uploadFoodItem = async (req, res) => {
  try {
    const { name, price, ownerEmail  } = req.body;

    // ✅ Ensure file is uploaded
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required." });
    }

    const result = await cloudinary.uploader.upload(req.file.path);

    const newItem = new FoodItem({
      name,
      price,
      ownerEmail,
      restaurantName : req.body.restaurantName,
      imageUrl: result.secure_url,
    });

    await newItem.save();
    fs.unlinkSync(req.file.path); // cleanup

    res.json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Upload failed" });
  }
};

const getFoodItems = async (req, res) => {
  try {
    const { ownerEmail } = req.query;
    const query = ownerEmail ? { ownerEmail } : {};

    const foodItems = await FoodItem.find(query).sort({ createdAt: -1 });
    res.json(foodItems);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch food items" });
    console.error(err);
  }
};

const deleteFoodItem = async (req , res) => {
  try{
    await FoodItem.findByIdAndDelete(req.params.id);
    res.status(200).json({message : "Food item deleted successfully"});
  }catch(err){
    res.status(500).json({ error : "Failed to delete food item"});
  }
};









module.exports = {
  uploadFoodItem,
  getFoodItems,
deleteFoodItem
}