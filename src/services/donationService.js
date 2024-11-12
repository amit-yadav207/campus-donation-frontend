// import axios from 'axios';

// export const donateToCampaign = async (campaignId, donation) => {
//   const response = await axios.post(`/api/donations/${campaignId}`, donation);
//   return response.data;
// };


import axios from 'axios';

// const BASE_URL = 'http://localhost:5000'
const BASE_URL='https://campus-donation-backend.onrender.com'

export const makeDonation = async (donationData) => {
    const id = donationData.campaignId
    const token = localStorage.getItem('authToken'); // Retrieve the token
    if (token) {
        console.log('Token retrieved:', token);
    } else {
        console.log('No token found');
    }
    const response = await axios.post(`${BASE_URL}/api/campaigns/${id}/donate`,
        { amount: donationData.amount,transactionId:donationData.transactionId },
        {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the headers
            },
        }

    );
    return response.data;
};





export const getUserSecret = async ({campaignId,amount}) => {
    const response = await axios.post(`${BASE_URL}/api/donations/${campaignId}/donate`,{amount});
    return response.data;
};



export const getUserDonations = async () => {
    const response = await axios.get(`${BASE_URL}/api/donations`);
    return response.data;
};



export const getDonationHistory = async (userId) => {
  const response = await axios.get(`${BASE_URL}/api/donations/donation-history/${userId}`);
  return response.data;  // { donations: [...], totalAmount: number }
};




