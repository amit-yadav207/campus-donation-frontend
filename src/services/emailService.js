
import axios from 'axios';

// const BASE_URL = 'http://localhost:5000'
const BASE_URL='https://campus-donation-backend.onrender.com'

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
