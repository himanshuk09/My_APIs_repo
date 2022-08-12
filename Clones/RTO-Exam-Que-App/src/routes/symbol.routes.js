// Symbol Routes

const express = require("express");
const router = express.Router();
const SymbolController=require("../controllers/question.controller");

router.post("/add",SymbolController.addQuestion);
router.get("/get",SymbolController.getAllQuestion);
router.get("/get/:id",SymbolController.getQuestionById);
router.put("/update/:id",SymbolController.updateQuestionById);
router.delete("/delete/:id",SymbolController.deleteQuestionById);

module.exports=router;