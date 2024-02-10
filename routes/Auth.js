const express = require("express");
const { createUser, loginUser } = require("../controller/Auth");

const router = express.Router();

// /users is already added in the base path
router.post("/signup", createUser).post("/login", loginUser);

exports.router = router;
