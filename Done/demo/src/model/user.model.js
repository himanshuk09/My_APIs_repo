const mongoose=require("mongoose");

const user=mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String,
    },
    phoneNo :{
        type:Number,
    },
});

module.export=mongoose.model("user",user);