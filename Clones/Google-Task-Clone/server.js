// require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mong =require("mongoose");
const app = express();

app.use(express.json());
app.use(cors());

// sample for express server
// app.use("/", (req, res, next) => {
//   res.status(200).json({ success: true, data: "Welcome to express server" });
// });

mong
  .connect("mongodb://localhost:27017/GoogleTaskCloneDB")
  .then((result) => {
    //true
    console.log("Database Connected");
  })
  .catch((error) => {
    //false
    console.log("Unable to connect database");
  });

const PORT = process.env.PORT || 1395; // port at which server listening

// import routes
let authRouter = require("./src/routes/auth.routes");
let listRouter=require("./src/routes/lists.routes");
let taskRouter=require("./src/routes/tasks.routes");
const { default: mongoose } = require("mongoose");
// import other routes

// define root routes.
app.use("/authentication", authRouter);
app.use("/list",listRouter);
app.use("/task",taskRouter);
// define other routes

app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);
