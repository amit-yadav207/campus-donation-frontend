// import axios from 'axios';


// const BASE_URL = 'http://localhost:5000'
// // const BASE_URL='https://campus-donation-backend.onrender.com'
// const API_URL = `${BASE_URL}/api`; // Update the base URL to your API endpoint

// export const getAllCampaigns = async () => {
//   const response = await axios.get(`${API_URL}/campaigns`);
//   return response.data;
// };

// export const deleteCampaign = async (id) => {
//   await axios.delete(`${API_URL}/campaigns/${id}`);
// };

// export const getAllUsers = async () => {
//   const response = await axios.get(`${API_URL}/users`);
//   return response.data;
// };

// export const deleteUser = async (id) => {
//   await axios.delete(`${API_URL}/users/${id}`);
// };




import axios from 'axios';
import { BASE_URL } from '../utils/constants';
const API_URL = `${BASE_URL}/api`; // Update the base URL to your API endpoint

export const getAllCampaigns = async () => {
  const response = await axios.get(`${API_URL}/campaigns`);
  return response.data;
};

export const deleteCampaign = async (id) => {
  await axios.delete(`${API_URL}/campaigns/${id}`);
};

export const updateCampaignStatus = async (id, status) => {
  try {
    const response = await axios.put(`${API_URL}/campaigns/${id}/status`, { status });
    return response.data;
  } catch (error) {
    console.error('Error updating campaign status:', error);
    throw error;
  }
};

export const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/users/${id}`);
};
