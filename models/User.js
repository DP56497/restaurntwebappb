const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
     unique: true,
    minlength: 6,
  },
  category: {
    type: String,
    enum: ["owner", "customer"],
    required: true,
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
