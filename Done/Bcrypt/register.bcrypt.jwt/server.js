const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 7000;
const bodyParser= require("body-parser");
const jwt =require("jsonwebtoken");


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

//parse application/json
app.use(bodyParser.json());

mongoose
    .connect("mongodb://127.0.0.1:27017/regisdb")
    .then(()=>{
        console.log("database is conneted");
    })
    .catch((error)=>{
        console.log("Unable to connect",error);
    });

    const RegisterRoutes =require("./src/routes/register.routes");
   app.use("/register",RegisterRoutes); 
   
// jsonwebtoken

// const createToken =async() =>{
//     const token =await jwt.sign({_id:"620c6971df78ebc2131f3435"},"Apartfromcountingwordsandcharacters");
//     console.log(token);
//     const userVer = await jwt.verify(token,"Apartfromcountingwordsandcharacters");
//     console.log(userVer);
// }


// createToken();


app.listen(port,function(){
    console.log("running on port",port);
});