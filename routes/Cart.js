const express = require("express");
const {
  addToCart,
  fetchCartByUserId,
  updateItemInCart,
  deleteFromCart,
} = require("../controller/Cart");

const router = express.Router();

// /cart is already added in the base path
router
  .post("/", addToCart)
  .get("/", fetchCartByUserId)
  .patch("/:id", updateItemInCart)
  .delete("/:id", deleteFromCart);

exports.router = router;
