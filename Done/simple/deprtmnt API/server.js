const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
//connect nodejs to mongodb
mongoose
  .connect("mongodb://localhost:27017/company")
  .then((res) => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Unable to connect database",Error);
  });

const departmentRoute = require("./src/routes/companyroutes");
app.use("/department", departmentRoute);

const port =4444;
app.listen(port, () => {
  console.log("Server is running on port ", port);
});