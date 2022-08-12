// Auth/User Model

const mongoose=require("mongoose");

const task=new mongoose.Schema({
    title:{
        type:String,
         },
    description:{
        type:String,
            },
    listid:{
            type:mongoose.Types.ObjectId,
            ref:"list",
           },
    userid:{
            type:mongoose.Types.ObjectId,
            ref:"user",
           }
});

module.exports=mongoose.model("task",task);
