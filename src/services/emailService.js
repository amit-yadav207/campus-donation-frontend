
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const sendEmail = async ({to,subject,body}) => {
  
    const token = localStorage.getItem('authToken'); // Retrieve the token
    if (token) {
        console.log('Token retrieved:', token);
    } else {
        console.log('No token found');
    }
    const response = await axios.post(`${BASE_URL}/api/donations/email`,
        { to,subject,body },
        {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the headers
            },
        }

    );
    return response.data;
};
