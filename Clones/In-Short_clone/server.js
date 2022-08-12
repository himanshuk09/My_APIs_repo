require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose");
const app = express();

app.use(express.json());
app.use(cors());


//Connection Start
mongoose
  .connect("mongodb://localhost:27017/inShortDB")
  .then((result) => {
    //true
    console.log("Database Connected");
  })
  .catch((error) => {
    //false
    console.log("Unable to connect database");
  });
//Connection End
// // sample for express server
// app.use("/", (req, res, next) => {
//   res.status(200).json({ success: true, data: "Welcome to express server" });
// });

const PORT = process.env.PORT || 1309; // port at which server listening

// import routes
let authRouter = require('./src/routes/auth.routes');
let categoryRouter = require('./src/routes/category.routes');
// import other routes BookMark Category News
let newsRouters = require("./src/routes/news.routes");
let bookmarkRouters = require("./src/routes/bookmark.routes");
// define root routes.
app.use('/authentication', authRouter);
app.use('/category', categoryRouter);
app.use("/bookmark",bookmarkRouters);
app.use("/news",newsRouters);
// define other routes BookMark Category News

app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);
