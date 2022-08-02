const router = require("express").Router();
const ProductController = require("../controller/product.controller");

router.post("/add",ProductController.addProduct);
router.get("/get",ProductController.getAllProduct);
router.get("/get/:id",ProductController.getProductById);
router.put("/update/:id",ProductController.updateProductById);
router.put("/delete/:id",ProductController.deleteProductById);
module.exports=router;