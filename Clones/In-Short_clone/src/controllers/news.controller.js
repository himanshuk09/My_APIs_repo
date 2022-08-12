//import news model here
const news = require("../models/news.model");
const addNews = (req, res) => {
    //add news api logic here
    const newsData = new news(req.body);
    newsData
      .save()
      .then((resData) => {
        //resolve
        res.jsonp({
          message: "news added successfully",
          status: true,
          result: resData,
        });
      })
      .catch((error) => {
        // reject
        res.jsonp({
          message: "Unable to add news",
          status: false,
        });
      });
};

const getAllNews = (req, res) => {
    //add news api logic here
    news.find()
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "news fetched successfully",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "Unable to fetch news",
        status: false,
      });
    });
};

const getNewsByCategoryId = (req, res) => {
    //get news api logic here by CategoryId
    news.findOne({ _id: req.params.categoryid })
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "news fetched successfully",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "Unable to fetch news",
        status: false,
      });
    });
};


const NewsController = {
    addNews,
    getAllNews,
    getNewsByCategoryId
};

module.exports = NewsController;