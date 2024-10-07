// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <img src="/images/caplogo3.png" alt="CAP Logo" className="navbar-logo" />
//       <div className={`nav-links ${isOpen ? "open" : ""}`}>
//         <li>
//           <Link to="/" onClick={() => setIsOpen(false)}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/Login" onClick={() => setIsOpen(false)}>
//             Login
//           </Link>
//         </li>
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
//       </div>
//       <div className="menu-icon" onClick={toggleMenu}>
//         <span className="hamburger"></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src="/images/caplogo3.png" alt="CAP Logo" className="navbar-logo" />

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
        <li>
          <Link to="/Login" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </li>
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
