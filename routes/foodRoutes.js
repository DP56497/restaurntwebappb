const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadFoodItem, getFoodItems , deleteFoodItem} = require('../controllers/foodController');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), uploadFoodItem);
router.get('/', getFoodItems);
router.delete("/:id", deleteFoodItem);

module.exports = router;
