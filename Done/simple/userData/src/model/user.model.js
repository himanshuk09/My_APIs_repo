const mongoose=require("mongoose");

const user = mongoose.Schema(
    {
    name:{
        type:String,
    },
    phoneNO:{
        type:Number,
    },
    emailid:{
        type:String,
    },
    Address:{
        type:String,
    }
 });
module.exports=mongoose.model("user",user);