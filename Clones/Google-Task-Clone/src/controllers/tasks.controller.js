//import Task model here
const task=require("../models/tasks.model");


const addTask = (req, res) => {
  //addTask api logic here
  const taskData = new task(req.body);
  taskData
    .save()
    .then((resData) => {
      res.jsonp({
        message: "task added Successfully ",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      res.jsonp({ message: "Unable to add task ", status: false });
    });
};

const getTaskByListId = (req, res) => {
  //getTaskByListId api logic here
  task.findOne({ _id: req.params.listid })
  .then((resData) => {
    res.jsonp({
      message: "task fetched Successfully ",
      status: true,      result: resData,
    });
  })
  .catch((error) => {
    res.jsonp({ message: "Unable to fetch task ", status: false });
  });
};

const getTaskByUserId = (req, res) => {
  //getTaskByUserId api logic here
  task.findOne({ _id: req.params.userid })
  .then((resData) => {
    res.jsonp({
      message: "task fetched Successfully ",
      status: true,      result: resData,
    });
  })
  .catch((error) => {
    res.jsonp({ message: "Unable to fetch task", status: false });
  });
};

const getTaskById = (req, res) => {
  //getTaskById api logic here
  task.findOne({ _id: req.params.id })
  .then((resData) => {
    res.jsonp({
      message: "task fetched Successfully ",
      status: true,
      result: resData,
    });
  })
  .catch((error) => {
    res.jsonp({ message: "Unable to fetch task", status: false });
  });
};

const updateTaskById = (req, res) => {
  //updateTaskById api logic here
  task.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "task updated successfully",
        status: true,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "unable to update task",
        status: false,
      });
    });
};

const deleteTaskById = (req, res) => {
  //deleteTaskById api logic here
  task.findOneAndDelete({ _id: req.params.id })
  .then((resData) => {
    //resolve
    res.jsonp({
      message: "task Deleted successfully",
      status: true,
    });
  })
  .catch((error) => {
    // reject
    res.jsonp({
      message: "Unable to delete task",
      status: false,
    });
  });
};

const TaskController = {
  addTask,
  getTaskByListId,
  getTaskByUserId,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};

module.exports = TaskController;
