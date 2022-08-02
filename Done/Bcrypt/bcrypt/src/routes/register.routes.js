const router =require("express").Router()

const registerController=require("../controller/register.controller")

router.post("/add",registerController.register);

module.exports=router