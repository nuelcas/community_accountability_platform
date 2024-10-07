// src/components/Register.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // To navigate to the login page
import axios from "axios";
import "./Register.css";
import Contact from "./Contact";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State for success or error message

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/api/users/register", // Corrected URL
        {
          name,
          email,
          password,
        }
      );

      // Display success message
      setMessage("Registration successful!");

      // Clear input fields after successful registration
      setName("");
      setEmail("");
      setPassword("");

      // Set a timer to clear the message after 3 seconds
      setTimeout(() => {
        setMessage("");
      }, 3000); // 3 seconds
    } catch (err) {
      console.error("Registration failed", err);
      setMessage("Registration failed");
    }
  };

  return (
    <div className="container">
      {message && <div className="success-message">{message}</div>}{" "}
      {/* Display success or error message */}
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
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input-field"
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
