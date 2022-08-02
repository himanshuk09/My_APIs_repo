const registerModel= require("../model/register.model")

exports.register = (req, res) => {
    registerModel.findOne({ email: req.body.email })
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
              res.jsonp({ message: "Unable to register user", status: false });
            });
        }
      })
      .catch((error) => {
        console.log("Unable to get User");
      });
  };
  