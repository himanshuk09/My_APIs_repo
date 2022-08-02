const mongoose=require("mongoose");

const Product = mongoose.Schema(
    {
    product:{
        type:String,
    },
    Instack:{
        type:String,
    },
     
 });
module.exports=mongoose.model("Product",Product);