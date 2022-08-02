const mongoose=require("mongoose");

const register=mongoose.Schema({
    
        name:{
            type:String,
        },
        username:{
            type:String,
        },
        email:{
            type:String,
            unique:true
            
        },
        phoneNO:{
            type:Number,
        },
        password:{
            type:String
        }
});

module.export=mongoose.model("register",register);