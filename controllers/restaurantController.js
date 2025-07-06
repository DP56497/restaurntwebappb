const Restaurant = require("../models/Restaurant");

// Add Restaurant Info (POST)
const addRestaurantInfo = async (req, res) => {
  const { hotelName, address, mobile, location, ownerEmail } = req.body;

  if (!hotelName || !address || !mobile || !location || !ownerEmail) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newRestaurant = new Restaurant({
      hotelName,
      address,
      mobile,
      location,
      ownerEmail,
    });

    await newRestaurant.save();

    // Optionally return hotelName to save in frontend localStorage
    res.status(201).json({ message: "Restaurant info saved.", restaurantName: hotelName });
  } catch (err) {
    console.error("Error saving restaurant:", err);
    res.status(500).json({ error: "Server error while saving restaurant info." });
  }
};

// Optional: Get Restaurant by Owner Email
const getRestaurantByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const restaurant = await Restaurant.findOne({ ownerEmail: email });

    if (!restaurant) return res.status(404).json({ error: "Restaurant not found" });

    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch restaurant info." });
  }
};

module.exports = {
  addRestaurantInfo,
  getRestaurantByEmail,
};
