const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

// Create routes for auth here
router.post('/login', AuthController.login);

//create routes for register here
router.post("/register",AuthController.register);
module.exports = router;