//import Symbol model here
const Symbol=require("../models/symbol.model");

const addSymbol = async (req, res) => {
  //addSymbol api logic here
  const userData = new Symbol(req.body);
  userData
    .save()
    .then((resData) => {
      res.jsonp({
        message: "symbol added Successfully ",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      res.jsonp({ message: "Unable to add symbol ", status: false });
    });
};

const getAllSymbol = async (req, res) => {
  //getAllSymbol api logic here
  Symbol.find()
  .then((resData) => {
    res.jsonp({
      message: "Symbol fetched Successfully ",
      status: true,
      result: resData,
    });
  })
  .catch((error) => {
    res.jsonp({ message: "Symbol to fetch Quetions ", status: false });
  });
};

const getSymbolById = async (req, res) => {
  //getSymbolById api logic here
  Symbol.findOne({ _id: req.params.id })
  .then((resData) => {
    res.jsonp({
      message: "Symbol fetched Successfully ",
      status: true,
      result: resData,
    });
  })
  .catch((error) => {
    res.jsonp({ message: "Unable to fetch Symbol ", status: false });
  });
};

const updateSymbolById = async (req, res) => {
  //updateSymbolById api logic here
  Symbol.findOneAndUpdate({ _id: req.params.id }, req.body)
  .then((resData) => {
    //resolve
    res.jsonp({
      message: "Symbol updated successfully",
      status: true,
    });
  })
  .catch((error) => {
    // reject
    res.jsonp({
      message: "Unable to update Symbol",
      status: false,
    });
  });
};

const deleteSymbolById = async (req, res) => {
  //deleteSymbolById api logic here
  Symbol.findOneAndDelete({_id:req.params.id})
    .then((resData)=>{
      res.jsonp({
        message:"Symbol Deleted Successfully",
        status:true,
      });
    })
    .catch((error)=>{
      res.jsonp({
        message:"unable to delete Symbol",
        status:false,
      });
    });
};

const SymbolController = {
  addSymbol,
  getAllSymbol,
  getSymbolById,
  updateSymbolById,
  deleteSymbolById,
};
module.exports = SymbolController;
