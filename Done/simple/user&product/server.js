const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 9999;
const bodyParser= require("body-parser");

 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false}));

 //parse application/json
 app.use(bodyParser.json());

mongoose
    .connect("mongodb://localhost:27017/regisdb")
    .then(()=>{
        console.log("database is conneted");
    })
    .catch((error)=>{
        console.log("Unable to connect",error);
    });
    const userRoutes = require("./src/routes/user.routes");
    app.use("/user", userRoutes)
    const ProductRoutes =require("./src/routes/product.routes");
    app.use("/product",ProductRoutes);
     
app.listen(port,function(){
    console.log("running on port",port);
});