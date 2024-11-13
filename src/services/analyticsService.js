import axios from 'axios';
import { BASE_URL } from '../utils/constants';


export const getAnalyticsData = async () => {
    const response = await axios.get(`${BASE_URL}/api/analytics`);
    return response.data;
};