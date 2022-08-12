// Category Model

const mongoose=require("mongoose");
const Category = new mongoose.Schema({
    title:{
        type:String,
    },
    imageURL:{
        type:String,
    },
    description:{
        type:String,
    }
});

module.exports=mongoose.model("Category",Category);