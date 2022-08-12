// List routes
const routes=require("express").Router();

const ListController=require("../controllers/list.controller");

routes.post("/add",ListController.addList);
routes.get("/get/:id",ListController.getListById);
routes.get("/get/:userid",ListController.getListByUserId);
routes.put("/update/:id",ListController.updateListById);
routes.delete("/delete",ListController.deleteListById);


module.exports=routes;
