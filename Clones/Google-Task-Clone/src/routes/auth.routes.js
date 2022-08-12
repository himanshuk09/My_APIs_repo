const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

// Create routes for auth here
router.get('/login', AuthController.login);

//create routes for register here
router.post("/add",AuthController.register);
router.get("/get",AuthController.getProfile);
router.put("/update",AuthController.updateProfile)
module.exports = router;