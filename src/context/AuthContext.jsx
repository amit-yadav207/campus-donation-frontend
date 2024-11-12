// // AuthContext.js
// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     localStorage.getItem("token") != null
//   ); // Default: logged out

//   const [loggedInUser, setUser] = useState({});

//   const loginContext = (user) => {
//     setIsLoggedIn(true);
//     setUser(user);
//     console.log("set loggedin True and set user ", user);
//   };

//   const logoutContext = () => {
//     try {
//       setIsLoggedIn(false);
//       setUser({});
//       console.log(
//         "User logged out, set loggedIn to false, and reset user:",
//         user
//       );
//       localStorage.removeItem("token");
//     } catch (err) {
//       console.error("Error in logoutContext:", err);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{ isLoggedIn, loggedInUser, loginContext, logoutContext }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the AuthContext
const AuthContext = createContext();
// const BASE_URL = "http://localhost:5000";
const BASE_URL='https://campus-donation-backend.onrender.com'

// Custom hook to use auth context in any component
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component to provide the auth state and functions
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Load token and user data from local storage on initial render
  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    const savedUser = JSON.parse(localStorage.getItem("authUser"));

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(savedUser);

      // Set token as default in axios headers
      axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
    }
  }, []);

  // Login function
  async function login(credentials) {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/login`,
        credentials
      );
      const { token, user } = response.data;

      if (token && user) {
        setToken(token);
        setUser(user);

        // Store token and user data in local storage
        localStorage.setItem("authToken", token);
        localStorage.setItem("authUser", JSON.stringify(user));

        // Set token as default in axios headers
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
      return true;
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  // Logout function
  function logout() {
    // Clear token and user data from state
    setToken(null);
    setUser(null);

    // Remove token and user data from local storage
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");

    // Remove token from axios headers
    delete axios.defaults.headers.common["Authorization"];
  }

  // Register function
  async function register(newUser) {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/register`,
        newUser
      );
      const { token, user } = response.data;

      if (token && user) {
        setToken(token);
        setUser(user);

        // Store token and user data in local storage
        localStorage.setItem("authToken", token);
        localStorage.setItem("authUser", JSON.stringify(user));

        // Set token as default in axios headers
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  }

  const value = {
    user,
    token,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
