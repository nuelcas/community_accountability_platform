// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // Import AuthContext
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user, logout } = useAuth(); // Access user and logout from AuthContext
//   const navigate = useNavigate(); // To redirect after logout

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = () => {
//     logout(); // Call logout from AuthContext
//     navigate("/"); // Redirect to home after logout
//   };

//   return (
//     <nav className="navbar">
//       <img src="/images/cap_logo.png" alt="CAP Logo" className="navbar-logo" />

//       {/* Hamburger Menu Icon */}
//       <div className="menu-toggle" onClick={toggleMenu}>
//         <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
//       </div>

//       {/* Navigation Links */}
//       <ul className={`nav-list ${isOpen ? "active" : ""}`}>
//         <li>
//           <Link to="/" onClick={() => setIsOpen(false)}>
//             Home
//           </Link>
//         </li>

//         {user ? (
//           // Show Logout if user is logged in
//           <li>
//             <button onClick={handleLogout} className="logout-btn">
//               Log Out
//             </button>
//           </li>
//         ) : (
//           // Show Login if user is not logged in
//           <li>
//             <Link to="/Login" onClick={() => setIsOpen(false)}>
//               Login
//             </Link>
//           </li>
//         )}

//         <li>
//           <Link to="/Register" onClick={() => setIsOpen(false)}>
//             Register
//           </Link>
//         </li>
//         <li>
//           <Link to="/ReportIssue" onClick={() => setIsOpen(false)}>
//             Report Issue
//           </Link>
//         </li>
//         <li>
//           <Link to="/Polls" onClick={() => setIsOpen(false)}>
//             Polls
//           </Link>
//         </li>
//         <li>
//           <Link to="/RealTimeTracking" onClick={() => setIsOpen(false)}>
//             Real-Time Tracking
//           </Link>
//         </li>
//         <li>
//           <Link to="/BlogPage" onClick={() => setIsOpen(false)}>
//             Blog
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import AuthContext
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth(); // Access user and logout from AuthContext
  const navigate = useNavigate(); // To redirect after logout

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout(); // Call logout from AuthContext
    navigate("/"); // Redirect to home after logout
  };

  return (
    <nav className="navbar">
      <img src="/images/cap_logo.png" alt="CAP Logo" className="navbar-logo" />

      {/* Hamburger Menu Icon */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-list ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>

        {user ? (
          // Show Logout if user is logged in
          <li>
            <Link
              to="/"
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
            >
              Log Out
            </Link>
          </li>
        ) : (
          // Show Login if user is not logged in
          <li>
            <Link to="/Login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          </li>
        )}

        <li>
          <Link to="/Register" onClick={() => setIsOpen(false)}>
            Register
          </Link>
        </li>
        <li>
          <Link to="/ReportIssue" onClick={() => setIsOpen(false)}>
            Report Issue
          </Link>
        </li>
        <li>
          <Link to="/Polls" onClick={() => setIsOpen(false)}>
            Polls
          </Link>
        </li>
        <li>
          <Link to="/RealTimeTracking" onClick={() => setIsOpen(false)}>
            Real-Time Tracking
          </Link>
        </li>
        <li>
          <Link to="/BlogPage" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
