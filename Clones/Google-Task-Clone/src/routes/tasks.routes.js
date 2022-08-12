// Tasks routes
const routes=require("express").Router();
const TaskController=require("../controllers/tasks.controller");

routes.post("/add",TaskController.addTask);
routes.get("/get/:id",TaskController.getTaskById);
routes.get("/get/:userid",TaskController.getTaskByUserId);
routes.get("/get/:listid",TaskController.getTaskByListId);
routes.put("/update/:id",TaskController.updateTaskById);
routes.delete("/delete/:id",TaskController.deleteTaskById);

module.exports=routes;