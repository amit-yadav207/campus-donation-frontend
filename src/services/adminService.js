import axios from 'axios';


const BASE_URL = 'http://localhost:5000'
const API_URL = `${BASE_URL}/api`; // Update the base URL to your API endpoint

export const getAllCampaigns = async () => {
  const response = await axios.get(`${API_URL}/campaigns`);
  return response.data;
};

export const deleteCampaign = async (id) => {
  await axios.delete(`${API_URL}/campaigns/${id}`);
};

export const getAllUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/users/${id}`);
};
