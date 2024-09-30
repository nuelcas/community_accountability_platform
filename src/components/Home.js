// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Assuming you will create this CSS file for styling
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <img
          src="/images/capwallpaper.jpeg"
          alt="Unhappy People"
          className="hero-image"
        />
        <h1 className="slogan">
          Empowering Communities Through Accountability
        </h1>
        <p className="description">
          At Community Accountability Platform (CAP), our mission is to foster
          transparency, trust, and collaboration among community members to
          drive positive change and accountability in all facets of life.
        </p>
        <Link to="/register" className="register-button">
          Get Involved
        </Link>
      </header>
      <Contact />
    </div>
  );
};

export default Home;
