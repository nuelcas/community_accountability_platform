const db = require("../config/db"); // Assuming you have a database configuration

// Function to find a user by email
exports.findUserByEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email = ?";

  try {
    const [results] = await db.promise().execute(query, [email]);

    if (results.length === 0) {
      return null; // No user found
    }

    return results[0]; // Return the first matching user
  } catch (err) {
    throw new Error("Database query failed");
  }
};

// Function to register a new user
exports.registerUser = async (name, email, hashedPassword) => {
  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  try {
    const [results] = await db
      .promise()
      .execute(query, [name, email, hashedPassword]);

    return results; // Return the result of the insert operation
  } catch (err) {
    throw new Error("Database insert failed");
  }
};
