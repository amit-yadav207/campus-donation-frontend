import axios from 'axios';

const BASE_URL = 'http://localhost:5000'

export const getAnalyticsData = async () => {
    const response = await axios.get(`${BASE_URL}/api/analytics`);
    return response.data;
};