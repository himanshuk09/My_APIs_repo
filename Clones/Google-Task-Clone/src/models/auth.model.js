// Auth/User Model

const mongoose=require("mongoose");

const user=new mongoose.Schema({
    Name:{
           type:String,
         },
    Email:{
         type:String,
         unique:true,
        },
    Phone:{
        type:Number,
        },
    Avatar:{
        type:String,
        },
    Username:{
        type:String,
        unique:true,
        },
    Role:{
        type:String,
        },
    Gender:{
        type:String,
        },
    DateofBirth:{
        type:Number,
        }
});

module.exports=mongoose.model("user",user);
