import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BlogPage from "./components/BlogPage";
import ReportIssue from "./components/ReportIssue";
import RealTimeTracking from "./components/RealTimeTracking";
import Login from "./components/Login";
import Register from "./components/Register";
import Polls from "./components/Polls";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";
import axios from "axios"; // Import axios for making the API request

function App() {
  const [protectedData, setProtectedData] = useState(null);
  const { user } = useAuth(); // Get authentication state

  // Function to fetch the protected data when a user accesses a protected route
  const fetchProtectedData = () => {
    const token = localStorage.getItem("authToken"); // Fetch the token from local storage
    if (!token) {
      console.error("No token found, please login.");
      return;
    }

    axios
      .get("http://localhost:3000/api/protected", {
        headers: {
          Authorization: `Bearer ${token}`, // Attach the token to the request
        },
      })
      .then((response) => {
        console.log(response.data);
        setProtectedData(response.data); // Store the protected data in state
      })
      .catch((error) => console.error("Error fetching protected data:", error));
  };

  useEffect(() => {
    if (user) {
      fetchProtectedData(); // Fetch protected data once the user is logged in
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protect routes by wrapping them with ProtectedRoute */}
        <Route
          path="/reportissue"
          element={
            <ProtectedRoute>
              <ReportIssue protectedData={protectedData} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/realtimetracking"
          element={
            <ProtectedRoute>
              <RealTimeTracking protectedData={protectedData} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/polls"
          element={
            <ProtectedRoute>
              <Polls protectedData={protectedData} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
