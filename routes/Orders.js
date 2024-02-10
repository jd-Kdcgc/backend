const express = require("express");
const {
  addOder,
  fetchOrdersByUserId,
  updateOrder,
  deleteOrder,
  fetchAllOrdersByFilters,
} = require("../controller/Order");

const router = express.Router();

// /cart is already added in the base path
router
  .post("/", addOder)
  .get("/user/:userId", fetchOrdersByUserId)
  .get("/", fetchAllOrdersByFilters)
  .patch("/:id", updateOrder)
  .delete("/:id", deleteOrder);

exports.router = router;
