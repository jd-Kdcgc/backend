const express = require("express");
const { fetchCategories, addCategory } = require("../controller/Category");

const router = express.Router();

// /categories is already added in the base path
router.get("/", fetchCategories).post("/", addCategory);

exports.router = router;
