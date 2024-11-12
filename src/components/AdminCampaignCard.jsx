import React from 'react';

const AdminCampaignCard = ({ campaign, onApprove, onReject }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <h3 className="text-xl font-bold">{campaign.title}</h3>
      <p>{campaign.description}</p>
      <div className="flex justify-between mt-4">
        <button onClick={() => onApprove(campaign._id)} className="bg-blue-500 text-white py-1 px-3 rounded">Approve</button>
        <button onClick={() => onReject(campaign._id)} className="bg-red-500 text-white py-1 px-3 rounded">Reject</button>
      </div>
    </div>
  );
};

export default AdminCampaignCard;
