//import Question model here
const Question = require("../models/question.model");


const addQuestion = async (req, res) => {
  //addQuestion api logic here
  const userData = new Question(req.body);
  userData
    .save()
    .then((resData) => {
      res.jsonp({
        message: "Question added Successfully ",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      res.jsonp({ message: "Unable to add Question ", status: false });
    });
};

const getAllQuestion = async (req, res) => {
  //getAllQuestion api logic here
  Question.find()
  .then((resData) => {
    res.jsonp({
      message: "Questions fetched Successfully ",
      status: true,
      result: resData,
    });
  })
  .catch((error) => {
    res.jsonp({ message: "Unable to fetch Quetions ", status: false });
  });
};

const getQuestionById = async (req, res) => {
  //getQuestionById api logic here
  Question.findOne({ _id: req.params.id })
    .then((resData) => {
      res.jsonp({
        message: "Question fetched Successfully ",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      res.jsonp({ message: "Unable to fetch Question ", status: false });
    });
};

const updateQuestionById = async (req, res) => {
  //updateQuestionById api logic here
  Question.findOneAndUpdate({ _id: req.params.id }, req.body)
  .then((resData) => {
    //resolve
    res.jsonp({
      message: "Questions updated successfully",
      status: true,
    });
  })
  .catch((error) => {
    // reject
    res.jsonp({
      message: "Unable to update Question",
      status: false,
    });
  });
};

const deleteQuestionById = async (req, res) => {
  //deleteQuestionById api logic here
  Question.findOneAndDelete({_id:req.params.id})
    .then((resData)=>{
      res.jsonp({
        message:"Question Deleted Successfully",
        status:true,
      });
    })
    .catch((error)=>{
      res.jsonp({
        message:"unable to delete Questions",
        status:false,
      });
    });
};

const QuestionController = {
  addQuestion,
  getAllQuestion,
  getQuestionById,
  updateQuestionById,
  deleteQuestionById,
};
module.exports = QuestionController;
