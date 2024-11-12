import React from 'react';

const DonationCard = ({ donation }) => {
  return (
    <div className="border p-4 rounded bg-green-100 mb-4">
      <h4 className="text-lg font-semibold">{donation.campaignTitle}</h4>
      <p>Amount: ${donation.amount}</p>
      <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
    </div>
  );
};

export default DonationCard;
