const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { registerUser, findUserByEmail } = require("../models/userModel");
require("dotenv").config();

// User registration
const register = (req, res) => {
  const { username, email, password } = req.body;

  registerUser(username, email, password, (err, result) => {
    if (err)
      return res.status(500).json({ error: "User registration failed." });
    res.status(201).json({ message: "User registered successfully!" });
  });
};

// User login
const login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, (err, user) => {
    if (err || !user) return res.status(400).json({ error: "User not found." });

    const isPasswordMatch = bcrypt.compareSync(password, user.password);
    if (!isPasswordMatch)
      return res.status(400).json({ error: "Invalid credentials." });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login successful!", token });
  });
};

module.exports = { register, login };
