const express = require("express");
const router = express.Router();
const CategoryController = require('../controllers/category.controller');

// Create routes for category here
router.post("/add",CategoryController.addCategory);
router.get("/getAll",CategoryController.getAllCategory);
module.exports = router;