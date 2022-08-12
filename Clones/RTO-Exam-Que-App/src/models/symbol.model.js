// Symbol Model

const mongoose=require("mongoose");
const Symbol= new mongoose.Schema({
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

module.exports=mongoose.model("Symbol",Symbol);