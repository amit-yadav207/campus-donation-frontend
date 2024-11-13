import axios from 'axios';
import { BASE_URL } from '../utils/constants';



// Function for user login
export const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/api/auth/login`, credentials);
  console.log("res from backend at service: ",response.data)
  return response.data;
};

// Function for user registration
export const register = async (userData) => {
  const response = await axios.post(`${BASE_URL}/api/auth/register`, userData);
  return response.data;
};

// Function for forgot password
export const forgotPassword = async (emailData) => {
  const response = await axios.post(`${BASE_URL}/api/auth/forgot-password`, emailData);
  return response.data;
};

// Function for resetting password
export const resetPassword = async (token, newPassword) => {
  const response = await axios.put(`${BASE_URL}/api/auth/reset-password/${token}`, { password: newPassword });
  return response.data;
};

// Include other authentication-related functions here
