import axios from 'axios';

// const BASE_URL = 'http://localhost:5000'
const BASE_URL='https://campus-donation-backend.onrender.com'

export const getAnalyticsData = async () => {
    const response = await axios.get(`${BASE_URL}/api/analytics`);
    return response.data;
};