// Question Routes

const express = require("express");
const router = express.Router();
const QuestionController=require("../controllers/question.controller");

router.post("/add",QuestionController.addQuestion);
router.get("/get",QuestionController.getAllQuestion);
router.get("/get/:id",QuestionController.getQuestionById);
router.put("/update/:id",QuestionController.updateQuestionById);
router.delete("/delete/:id",QuestionController.deleteQuestionById);

module.exports=router;