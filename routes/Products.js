const express = require("express");
const {
  fetchAllProductsByFilters,
  fetchProductById,
  updateProduct,
  createProduct,
} = require("../controller/Product");

const router = express.Router();

// /product is already added in the base path
router
  .post("/", createProduct)
  .get("/", fetchAllProductsByFilters)
  .get("/:id", fetchProductById)
  .patch("/:id", updateProduct);

exports.router = router;
