// News Model
const mongoose=require("mongoose");

const news = new mongoose.Schema({
    title:{
        type:String,
    },
    imageURL:{
        type:String,
    },
    description:{
        type:String,
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"category"
    }
});
module.exports=mongoose.model("news",news);