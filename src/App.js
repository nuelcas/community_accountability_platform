import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Polls from "./components/Polls";
import RealTimeTracking from "./components/RealTimeTracking";
import ReportIssue from "./components/ReportIssue";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/polls" element={<Polls />} />
          <Route path="/realtimetracking" element={<RealTimeTracking />} />
          <Route path="/reportissue" element={<ReportIssue />} />
          <Route path="/blogpage" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
