const Product = require("../model/product.model");

exports.addProduct = (req, res) => {
  const productData = new Product(req.body);
  productData
    .save()
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "Product added successfully",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "Unable to add product",
        status: false,
      });
    });
};

exports.getAllProduct = (req, res) => {
  Product.find()
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "Product fetched successfully",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "Unable to fetch product",
        status: false,
      });
    });
};

exports.getProductById = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "Product fetched successfully",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "Unable to fetch product",
        status: false,
      });
    });
};

exports.updateProductById = (req, res) => {
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

exports.deleteProductById = (req, res) => {
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