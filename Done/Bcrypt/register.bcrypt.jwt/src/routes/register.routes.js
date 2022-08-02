const routers=require("express").Router()

const registerController=require("../controller/register.controller")

routers.post("/registers",registerController.register);
routers.post("/login",registerController.login);
// routers.get("/login",registerController.login);
routers.get("/getProfile/:id",registerController.getProfileById);
routers.get("/getAll",registerController.getAllUsers);
routers.put("/update/:id",registerController.updateProfileById);
routers.delete("/delete/:id",registerController.deleteProfileById);
module.exports=routers;