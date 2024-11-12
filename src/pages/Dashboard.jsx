import React, { useEffect, useState } from 'react';
import { getUserDonations } from '../services/donationService';
import { getCampaigns } from '../services/campaignService'; // Assuming you have this service
import DonationCard from '../components/DonationCard';
import CampaignCard from '../components/CampaignCard';

const Dashboard = () => {
  const [donations, setDonations] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDonations = await getUserDonations();
        const userCampaigns = await getCampaigns(); // Fetch user's campaigns
        setDonations(userDonations);
        setCampaigns(userCampaigns);
      } catch (err) {
        setError('Failed to fetch user data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      {loading && <div>Loading...</div>}
      {error && <div className="mb-4 text-red-600">{error}</div>}

      <h2 className="text-2xl font-bold mb-2">Your Campaigns</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {campaigns.length > 0 ? (
          campaigns.map((campaign) => (
            <CampaignCard key={campaign._id} campaign={campaign} />
          ))
        ) : (
          <div>No campaigns created yet.</div>
        )}
      </div>

      <h2 className="text-2xl font-bold mb-2">Your Donations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {donations.length > 0 ? (
          donations.map((donation) => (
            <DonationCard key={donation._id} donation={donation} />
          ))
        ) : (
          <div>No donations made yet.</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
