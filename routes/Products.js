const express = require("express");
const {
  addProduct,
  fetchAllProductsByFilters,
  fetchProductById,
  updateProduct,
} = require("../controller/Product");

const router = express.Router();

// /product is already added in the base path
router
  .post("/", addProduct)
  .get("/", fetchAllProductsByFilters)
  .get("/:id", fetchProductById)
  .patch("/:id", updateProduct);

exports.router = router;
