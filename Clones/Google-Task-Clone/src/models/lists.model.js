// Lists model
const mongoose =require(mongoose);
const list=new mongoose.Schema({
    title:{
        type:String,
    },
    userid:{
        type:mongoose.Types.ObjectId,
         ref:"user",
    }
})

module.exports=mongoose.model("list",list);