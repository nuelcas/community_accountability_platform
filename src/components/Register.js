// src/components/Register.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // To navigate to the login page
import axios from "axios";
import "./Register.css"; // Make sure to create and style this file
import Contact from "./Contact";

const Register = () => {
  const [name, setName] = useState(""); // New state for name
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name, // Include name in the request
          username,
          password,
        }
      );
      console.log(response.data); // Handle success
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  return (
    <div className="container">
      <div className="register-container">
        <div className="register-form">
          <h2>Join Our Community</h2>
          <p className="mission-statement">
            At CAP, we believe in accountability and empowerment. By
            registering, you become a vital part of a platform that strives to
            drive positive change in communities. Join us in fostering
            transparency and trust.
          </p>
          <form onSubmit={handleRegister} className="form-elements">
            <input
              type="text"
              placeholder="Name" // Input field for name
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
            <button type="submit" className="register-button">
              Register
            </button>
          </form>

          <div className="already-registered">
            <p>Already have an account?</p>
            <Link to="/login" className="login-button">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Register;
