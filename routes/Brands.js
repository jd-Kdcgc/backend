const express = require("express");
const { fetchBrands, addBrand } = require("../controller/Brand");

const router = express.Router();

// /brands is already added in the base path
router.get('/', fetchBrands).post('/', addBrand)

exports.router = router;
