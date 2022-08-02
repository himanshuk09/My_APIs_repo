const router = require("express").Router();
const registerController = require("../controller/register.controller");

router.post("/add",registerController.register);

router.post("/post",registerController.login);

router.get("/get", registerController.getAllUsers);

router.get("/get/:id", registerController.getUserById);

router.put("/update/:id",registerController.updateuserById);

router.put("delete/:id",registerController.deleteuserById);

module.exports = router;