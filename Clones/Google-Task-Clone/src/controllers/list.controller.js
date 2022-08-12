//import List model here
const List=require("../models/auth.model");

const addList = (req, res) => {
  //addList api logic here
  const ListData = new List(req.body);
  ListData
    .save()
    .then((resData) => {
      res.jsonp({
        message: "list added Successfully ",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      res.jsonp({ message: "Unable to add list ", status: false });
    });
};
const getListByUserId = (req, res) => {
  //getListByUserId api logic here
   List.findOne({ _id: req.params.userid })
  .then((resData) => {
    res.jsonp({
      message: "List fetched Successfully ",
      status: true,      result: resData,
    });
  })
  .catch((error) => {
    res.jsonp({ message: "Unable to fetch list ", status: false });
  });
};

const getListById = (req, res) => {
  //getListById api logic here
  List.findOne({ _id: req.params.id })
  .then((resData) => {
    res.jsonp({
      message: "List fetched Successfully ",
      status: true,
      result: resData,
    });
  })
  .catch((error) => {
    res.jsonp({ message: "Unable to fetch list ", status: false });
  });
};

const updateListById = (req, res) => {
  //updateListById api logic here
  List.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "list updated successfully",
        status: true,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "unable to update list",
        status: false,
      });
    });
};

const deleteListById = (req, res) => {
  //deleteListById api logic here
  List.findOneAndDelete({ _id: req.params.id })
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "list Deleted successfully",
        status: true,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "Unable to delete list",
        status: false,
      });
    });
};

const ListController = {
  addList,
  getListByUserId,
  getListById,
  updateListById,
  deleteListById,
};

module.exports = ListController;
