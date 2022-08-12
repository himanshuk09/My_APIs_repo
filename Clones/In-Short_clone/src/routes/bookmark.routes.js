const express = require("express");
const router = express.Router();
const BookMarkController = require('../controllers/bookmark.controller');
const auth = require("../middleware/auth.middleware")

// Create routes for Bookmark here
router.post('/add',BookMarkController.addBookMark);

//create route for getBookMarkByUserId
router.get("/get/:userid",BookMarkController.getBookMarkByUserId);
//create route for deleteBookMarkById
router.get("/get/:id",BookMarkController.deleteBookMarkById);

module.exports = router;