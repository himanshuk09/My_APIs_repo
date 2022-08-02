const departmentController = require("../controller/companycontroller");
const router = require("express").Router();

router.post("/add", departmentController.addDepartment);

module.exports = router;