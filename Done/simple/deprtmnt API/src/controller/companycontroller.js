
const Department = require("../model/companymodel");

exports.addDepartment = (req, res) => {
  console.log("===>>req.body  postman se aaya hua data", req.body);

  var departmentData = new Department(req.body);
  departmentData
    .save()
    .then((response) => {
      res.json({
        message: "Department added successfully",
        status: 201,
        result: response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Something went wrong",
        status: 400,
        error: error,
      });
    });
};