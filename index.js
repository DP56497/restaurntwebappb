const express = require("express");
const app = express();
const { connectToMongoDB } = require("./config/db");
const PORT = process.env.PORT || 5000;
const auth = require("./routes/authRoutes");
const login = require("./routes/authRoutes")
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require("./routes/orderRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const foodItem = require("./routes/foodRoutes")
const forgotPassword = require("./routes/authRoutes")
const cors = require("cors");
require("dotenv").config();

//Middleware
app.use(cors());
app.use(cors({
  origin: 'https://restoarnt.onrender.com', // replace with actual frontend URL
  credentials: true // if you're using cookies or sessions
}));
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

//Routes
app.use("/api/signup", auth);
app.use("/api/login", login);
app.use('/api/food', foodRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/restaurant-info", restaurantRoutes);
app.use("/api/food/" , foodItem)
app.use("/api/" , forgotPassword)



//Connect to MongoDB
connectToMongoDB();

app.listen(PORT, () => console.log(`Srver is Stared at PORT : ${PORT}`));

