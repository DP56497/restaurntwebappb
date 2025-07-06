const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Add Order
router.post("/", async (req, res) => {
  try {

    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.log(err);  // Keep this to inspect error
    res.status(500).json({ error: "Failed to save order" });
  }
});


// Get All Orders
// Get Orders (filtered by email if provided)

// GET orders for specific customer (use query ?email=...)
router.get("/", async (req, res) => {
   
  try {
   
   const { email, restaurantName } = req.query;
    let filter = {};
    if (email) {
      filter.customerEmail = email;
    }
    if (restaurantName) {
      filter.restaurantName = restaurantName;
    }

    const orders = await Order.find(filter).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});



router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete order" });
  }
});

module.exports = router;
