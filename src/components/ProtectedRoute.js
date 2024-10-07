// import React, { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"; // Ensure this path is correct

// const ProtectedRoute = ({ children, onAccess }) => {
//   const { user } = useAuth(); // Check user authentication from AuthContext
//   const token = localStorage.getItem("authToken"); // Check for token in localStorage

//   useEffect(() => {
//     if (user && token && onAccess) {
//       onAccess(); // Fetch protected data if user and token exist
//     }
//   }, [user, token, onAccess]);

//   if (!user || !token) {
//     return <Navigate to="/login" replace />; // Redirect to login if not authenticated
//   }

//   return children; // Render the protected route component if authenticated
// };

// export default ProtectedRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const token = localStorage.getItem("authToken");

  if (!user || !token) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children; // Render the protected route component if authenticated
};

export default ProtectedRoute;
