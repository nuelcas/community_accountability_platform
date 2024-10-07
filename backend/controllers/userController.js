const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { findUserByEmail, registerUser } = require("../models/userModel");

// Register Controller
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash password asynchronously
    const hashedPassword = await bcrypt.hash(password, 10);

    // Register user in the database
    await registerUser(name, email, hashedPassword);
    return res.status(201).json({ message: "Registered successfully!" });
  } catch (err) {
    console.error("Registration error:", err);
    return res
      .status(500)
      .json({ message: "Server error during registration." });
  }
};

// Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res
      .status(200)
      .json({
        message: "Login successful",
        token,
        user: { id: user.id, email: user.email },
      });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error during login." });
  }
};
