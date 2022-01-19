const express = require("express");
const router = express.Router();
const { SignUpControl } = require("../controller/SignUpControl");

router.post("/signup", SignUpControl);

module.exports = router;
