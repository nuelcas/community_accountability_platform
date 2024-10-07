const express = require("express");
const { register, login } = require("../controllers/userController");
const authenticate = require("../middleware/authenticate");
const router = express.Router();

router.post("/register", register); // Register Route
router.post("/login", login); // Login Route

router.get("/protected", authenticate, (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome to the protected route!", user: req.user });
});

module.exports = router;
