// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/images/caplogo3.png" alt="CAP Logo" className="navbar-logo" />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          <Link to="/ReportIssue">Report Issue</Link>
        </li>
        <li>
          <Link to="/Polls">Polls</Link>
        </li>
        <li>
          <Link to="/RealTimeTracking">Real-Time Tracking</Link>
        </li>
        <li>
          <Link to="/BlogPage">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
