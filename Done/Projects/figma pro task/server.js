const express =require("express");
const mongoose=require("mongoose");
const app=express();

mongoose.connect("mongodb://localhost:27017/dbname")
.then((res)=>{
    console.log("connected");
})
.catch((error)=>{
    console.log("unable to connect",error);
});

const userRoute = require("./src/routes/register.routes");
app.use("/register", userRoute);

 const port=8000;
 app.listen(port,()=>
 {
     console.log("server runing on port",port);
 });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   