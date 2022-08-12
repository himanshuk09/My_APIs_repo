//import category model here
const category = require("../models/category.model");

const addCategory = (req, res) => {
    //add category lopic api here
    const CategoryData = new category(req.body);
    CategoryData
      .save()
      .then((resData) => {
        //resolve
        res.jsonp({
          message: "category added successfully",
          status: true,
          result: resData,
        });
      })
      .catch((error) => {
        // reject
        res.jsonp({
          message: "Unable to add category",
          status: false,
          
        });
      });
  };
  
  const getAllCategory = (req, res) => {
      //get category api logic here
      category.find()
      .then((resData) => {
        //resolve
        res.jsonp({
          message: "category fetched successfully",
          status: true,
          result: resData,
        });
      })
      .catch((error) => {
        // reject
        res.jsonp({
          message: "Unable to fetch category",
          status: false,
        });
      });
};


const CategoryController = {
    addCategory,
    getAllCategory
};

module.exports = CategoryController;