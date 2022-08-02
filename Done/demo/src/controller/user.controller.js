const Usermodel = require("../model/user.model");

//create a function to add record in database
exports.addUser = (req, res) => {
  const userData = new Usermodel(req.body);
  userData
    .save()
    .then((resData) => {
      res.jsonp({
        message: "User added Successfully ",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      res.jsonp({ message: "Unable to add user ", status: false });
    });
};

// //function to get all user from database
// exports.getAllUsers = (req, res) => {
//   User.findOne()
//     .then((resData) => {
//       res.jsonp({
//         message: "User fetched Successfully ",
//         status: true,
//         result: resData,
//       });
//     })
//     .catch((error) => {
//       res.jsonp({ message: "Unable to fetch user ", status: false });
//     });
// };

// //function to get record on the basis of ID
// exports.getUserById = (req, res) => {
//   User.findOne({ _id: req.params.id })
//     .then((resData) => {
//       res.jsonp({
//         message: "User fetched Successfully ",
//         status: true,
//         result: resData,
//       });
//     })
//     .catch((error) => {
//       res.jsonp({ message: "Unable to fetch user ", status: false });
//     });
// };