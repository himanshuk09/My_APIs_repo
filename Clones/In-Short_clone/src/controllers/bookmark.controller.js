//import bookmark model here
const Bookmark=require("../models/bookmark.model")
const addBookMark = (req, res) => {
    //add bookmark api logic here
    const BookmarkData = new Bookmark(req.body);
  BookmarkData
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

const getBookMarkByUserId = (req, res) => {
    //get bookmark api logic here by userId
     Bookmark.findOne({ _id: req.params.Userid })
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "Bookmark fetched successfully",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "Unable to fetch Bookmark",
        status: false,
      });
    });
};

const deleteBookMarkById = (req, res) => {
    //get bookmark api logic here by _id
    Bookmark.findOneAndDelete({_id:req.params.id})
    .then((resData)=>{
      res.jsonp({
        message:"Bookmark Deleted Successfully",
        status:true,
      });
    })
    .catch((error)=>{
      res.jsonp({
        message:"unable to delete Bookmark",
        status:false,
      });
    });
};

const BookMarkController = {
    addBookMark,
    getBookMarkByUserId,
    deleteBookMarkById
};

module.exports = BookMarkController;