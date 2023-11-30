const express = require("express");
const {
  createUser,
  loginUser,
  getallUser,
} = require("../controllers/userController");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/getallusers", getallUser);

module.exports = router;
