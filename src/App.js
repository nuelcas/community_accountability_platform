import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import Home from "./components/Home";
import BlogPage from "./components/BlogPage";
import ReportIssue from "./components/ReportIssue";
import RealTimeTracking from "./components/RealTimeTracking";
import Login from "./components/Login";
import Register from "./components/Register";
import Polls from "./components/Polls";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/reportissue" element={<ReportIssue />} />
          <Route path="/realtimetracking" element={<RealTimeTracking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/polls" element={<Polls />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
