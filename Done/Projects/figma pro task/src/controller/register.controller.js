const register=require("../model/register.model");
//function for registration
exports.register = (req, res) => {
    register.findOne({ email: req.body.email })
      .then((userData) => {
        if (userData) {
          res.jsonp({ message: "user is already register" });
        } else {
          const userData = new register(req.body);
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
              res.jsonp({ message: "Unable to register user", status: false });
            });
        }
      })
      .catch((error) => {
        console.log("Unable to get User");
      });
  };
//function for login
exports.login = (req, res) => {
    register.findOne({ email: req.body.email })
      .then((userData) => {
        if (userData) {
          console.log(userData.password);
          console.log("Body", req.body.password);
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
  //function for getalluser
  exports.getAllUsers = (req, res) => {
    register.find()
      .then((resData) => {
        res.jsonp({
          message: "User fetched Successfully ",
          status: true,
          result: resData,
        });
      })
      .catch((error) => {
        res.jsonp({ message: "Unable to fetch user ", status: false });
      });
  }

  //function to get record on the basis of ID
exports.getUserById = (req, res) => {
    register.findOne({ _id: req.params.id })
      .then((resData) => {
        res.jsonp({
          message: "User fetched Successfully ",
          status: true,
          result: resData,
        });
      })
      .catch((error) => {
        res.jsonp({ message: "Unable to fetch user ", status: false });
      });
  };

//   function for update
exports.updateuserById = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((resData) => {
        //resolve
        res.jsonp({
          message: "Product updated successfully",
          status: true,
        });
      })
      .catch((error) => {
        // reject
        res.jsonp({
          message: "Unable to update product",
          status: false,
        });
      });
  };


//   function for delete user
exports.deleteuserById = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id })
      .then((resData) => {
        //resolve
        res.jsonp({
          message: "Product Deleted successfully",
          status: true,
        });
      })
      .catch((error) => {
        // reject
        res.jsonp({
          message: "Unable to delete product",
          status: false,
        });
      });
  };

