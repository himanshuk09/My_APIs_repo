const mongoose=require("mongoose")

const register=new mongoose.Schema({
   
    username:{
        type:String,
    },
    password:{
        type:String,
    },
    phone:{
        type:Number,
    },
    email:{
        type:String,
    },
    userType:{
        type:String,
    }
})

module.exports=mongoose.model("register",register)