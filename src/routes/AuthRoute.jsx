import React from "react";
import { Navigate } from "react-router-dom";

// Dummy authentication check (you can replace it with real authentication logic)
const isAuthenticated = () => {
  // This could be a check to see if a token exists or if the user is logged in
  return localStorage.getItem("authToken") != null; // Replace with actual check
};

const AuthRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

export default AuthRoute;
