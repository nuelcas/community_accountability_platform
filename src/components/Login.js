import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";
import "./Contact.css";
import Contact from "./Contact";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth(); // Use the login function from AuthContext
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        { email, password }
      );

      const { token, user } = response.data;

      if (token && user) {
        // Save token and user to localStorage
        localStorage.setItem("authToken", token);
        login(user);

        setMessage("Login Successfully");
        navigate("/reportissue");

        setTimeout(() => {
          setMessage("");
        }, 3000);
      } else {
        setMessage("Login failed. Invalid response from server.");
      }
    } catch (err) {
      // Handle error if login fails due to incorrect credentials or other issues
      if (err.response && err.response.status === 401) {
        setMessage("Invalid email or password");
      } else {
        setMessage("Login failed. Please try again.");
      }
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
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        {message && <div className="login-message">{message}</div>}

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
