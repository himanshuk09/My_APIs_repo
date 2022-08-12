//import user model here
const User = require("../models/user.model");


const register = (req, res) => {
    //register api logic here
    User.findOne({ email: req.body.email })
    .then((userData) => {
      if (userData) {
        res.jsonp({ message: "user is already register" });
      } else {
        const userData = new User(req.body);
        userData
          .save()
          .then((resData) => {
            res.jsonp({
              message: "User registered successfully",
              status: true,
              result: resData,
            });
          })
          .catch((error) => {
            console.log(error);
            res.jsonp({ message: "Unable to register user", status: false });
          });
      }
    })
    .catch((error) => {
      console.log("Unable to get User");
    });
};


const login = (req, res) => {
    //login api logic here
    
  User.findOne({ email: req.body.email })
  .then((userData) => {
    if (userData) {
      console.log(userData.password);
      console.log("Body ", req.body.password);
      if (userData.password == req.body.password) {
        res.jsonp({ message: "user logged in successfully" });
      } else {
        res.jsonp({ message: "Incorrect password" });
      }
    } else
      res.jsonp({ message: "You are not register with us please register" });
  })
  .catch((error) => {
    res.jsonp({ message: "Unable to find user" });
  });
};


const AuthController = {
    register,
    login
};

module.exports = AuthController;