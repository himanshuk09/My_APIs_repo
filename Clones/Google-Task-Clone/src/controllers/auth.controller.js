//import user model here
const User = require("../models/auth.model");


const register = (req, res) => {
    //register api logic here
  User.findOne({ Email: req.body.Email })
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
            res.jsonp({ message: "Unable to register user", 
            status: false, 
            result :error
          });
          });
      }
    })
    .catch((error) => {
      console.log("Unable to get User");
    });
};


const login = (req, res) => {
    //login api logic here
    User.findOne({ Email: req.body.Email })
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

const getProfile = (req, res) => {
    //getProfile api logic here
    User.find()
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "User fetched successfully",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "Unable to fetch User",
        status: false,
      });
    });
};

const updateProfile = (req, res) => {
    //updateProfile api logic here
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "User updated successfully",
        status: true,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "Unable to update User",
        status: false,
      });
    });
};



const AuthController = {
    register,
    login,
    getProfile,
    updateProfile
};

module.exports = AuthController;