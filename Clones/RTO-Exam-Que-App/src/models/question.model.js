// Question Model
const mongoose=require("mongoose");

const Question= new mongoose.Schema({
    Question :{
        type:String,
    },
    Answer:{
        type:String,
    }
});

module.exports=mongoose.model("Question",Question);
