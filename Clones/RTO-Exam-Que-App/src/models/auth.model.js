// Auth/User Model
const mongoose = require("mongoose");


const User = new mongoose.Schema({
    //add columns here
    Name:{
        type:String,
    },
    email:{
        type:String,
        
        unique:true,
        required:true
    },
    phone:{
        type:Number,
    },
    Password:{
        type:String,
        required:true,
    },
    Username:{
        type:String,
      
    },
     Gender:{
        type:String,
    },
    DOB:{
        type:Number,
    }
});

module.exports = mongoose.model("User", User);
