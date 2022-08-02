const express =require("express");
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
const app = express();
const port = 2000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose
 .connect("mongodb://localhost:27017/userdb")
 .then(() => {
     console.log("Database connected");

 })
 .catch(() => {
           console.log("Unable to connect database");

 });

const userRoutes = require("./src/routes/user.routes");
app.use("/user", userRoutes);
 
 app.listen(port,function () {
     console.log("Server is running on port ",port);
 });