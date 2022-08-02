const router = require("express").Router();
const userController = require("../controller/user.controller");

router.post("/add", userController.addUser);

router.get("/get", userController.getAllUsers);

router.get("/get/:id", userController.getUserById);


module.exports = router;