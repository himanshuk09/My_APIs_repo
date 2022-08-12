const express = require("express");
const router = express.Router();
const NewsController = require('../controllers/news.controller');

// Create routes for news here
router.post('/add',NewsController.addNews);
router.get('/getAll',NewsController.getAllNews);
router.get('/get/:categoryId',NewsController.getNewsByCategoryId);


module.exports = router;