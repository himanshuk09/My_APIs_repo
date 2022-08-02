const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 8000;

//Connection Start
mongoose
  .connect("mongodb://localhost:27017/CompanyDB")
  .then((result) => {
    //true
    console.log("Database Connected");
  })
  .catch((error) => {
    //false
    console.log("Unable to connect database");
  });
//Connection End

//application run hone ke liye
app.listen(port, () => {
  console.log("Server is running on port ", port);
});