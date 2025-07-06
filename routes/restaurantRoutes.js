const express = require("express");
const router = express.Router();
const {
  addRestaurantInfo,
  getRestaurantByEmail,
} = require("../controllers/restaurantController");

// POST: Add restaurant info
router.post("/", addRestaurantInfo);

// Optional GET: Get restaurant info by owner email
router.get("/", getRestaurantByEmail);

module.exports = router;
