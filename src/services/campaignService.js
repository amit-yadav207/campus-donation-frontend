// import axios from 'axios';

// export const getCampaigns = async () => {
//   const response = await axios.get('/api/campaigns');
//   return response.data;
// };


import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const getCampaigns = async () => {
    const response = await axios.get(`${BASE_URL}/api/campaigns`);
    return response.data;
};

export const createCampaign = async (campaignData) => {
    const token = localStorage.getItem('authToken'); // Retrieve the token
    if (token) {
        console.log('Token retrieved:', token);
    } else {
        console.log('No token found');
    }
    const response = await axios.post(`${BASE_URL}/api/campaigns/create`, campaignData,
        {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the headers
            },
        }
    );
    return response.data;
};

export const getCampaignById = async (id) => {
    const response = await axios.get(`${BASE_URL}/api/campaigns/${id}`);
    return response.data;
};
