const db = require("../config");
const bcrypt = require("bcryptjs");

// Register a new user
const registerUser = (username, email, password, callback) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

  db.query(sql, [username, email, hashedPassword], (err, results) => {
    if (err) {
      return callback({ success: false, message: "Error registering." });
    }
    callback(null, { success: true, message: "Registered successfully!" });
  });
};

// Find user by email (for login)
const findUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, results) => {
    if (err || results.length === 0) {
      return callback({
        success: false,
        message: "Login failed. User not found.",
      });
    }
    callback(null, results[0]);
  });
};

module.exports = { registerUser, findUserByEmail };
