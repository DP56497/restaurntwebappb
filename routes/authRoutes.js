const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/authController");
const { login } = require('../controllers/authController');
const {forgotPassword} = require("../controllers/authController")

router.post("/", signup);
router.get('/', login);
router.post("/forgot-password", forgotPassword);


module.exports = router;
