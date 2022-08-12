//import user model here
const User=require("../models/auth.model");

const register = async (req, res) => {
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

const login = async (req, res) => {
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

const getProfile = async (req, res) => {
    //getProfile api logic here
    User.findOne({ _id: req.params.id })
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "Profile fetched successfully",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "Unable to fetch Profile",
        status: false,
      });
    });
};

const updateProfile = async (req, res) => {
    
    //updateProfile api logic here
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "user updated successfully",
        status: true,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "Unable to update user",
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