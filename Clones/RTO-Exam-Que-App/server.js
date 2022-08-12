require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose");
const app = express();

app.use(express.json());
app.use(cors());

// // sample for express server
// app.use("/", (req, res, next) => {
//   res.status(200).json({ success: true, data: "Welcome to express server" });
// });
mongoose
  .connect("mongodb://localhost:27017/RTOExamDB")
  .then((result) => {
    //true
    console.log("Database Connected");
  })
  .catch((error) => {
    //false
    console.log("Unable to connect database");
  });

const PORT = process.env.PORT || 8001; // port at which server listening

// import routes
let authRouter = require('./src/routes/auth.routes');
let questionRouter=require("./src/routes/question.routes");
let symbolRouter=require("./src/routes/symbol.routes");
// import other routes projects logTime 

// define root routes.
app.use('/authentication', authRouter);
app.use("/question",questionRouter);
app.use("/symbol",symbolRouter);

// define other routes projects logTime 

app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);
