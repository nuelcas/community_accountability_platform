// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Login.css";
import "./Contact.css"; // Ensure you have styling for Contact component
import Contact from "./Contact";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );
      console.log(response.data); // Handle success (JWT, etc.)
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="register-prompt">
          <p>Don't have an account?</p>
          <Link to="/register" className="register-link">
            Register Here
          </Link>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Login;
