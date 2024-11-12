// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getCampaignById } from '../services/campaignService';
// import { makeDonation } from '../services/donationService';
// import DonationForm from '../forms/DonationForm';
// import { useNavigate } from 'react-router-dom';

// const CampaignDetail = () => {
//   const { id } = useParams();
//   const [campaign, setCampaign] = useState(null);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCampaign = async () => {
//       try {
//         const campaignData = await getCampaignById(id);
//         setCampaign(campaignData);
//         console.log(campaignData)
//       } catch (err) {
//         setError('Failed to load campaign details.');
//       }
//     };
//     fetchCampaign();
//   }, [id]);

//   const handleShare = () => {
//     const shareUrl = `${window.location.origin}/campaign/${id}`;
//     if (navigator.share) {
//       navigator.share({
//         title: campaign?.title || 'Campaign',
//         text: 'Check out this campaign!',
//         url: shareUrl,
//       }).catch((err) => console.error('Error sharing:', err));
//     } else {
//       navigator.clipboard.writeText(shareUrl);
//       alert('Campaign URL copied to clipboard.');
//     }
//   };

//   const handleDonationSubmit = async (amount) => {
//     try {
//       const donationData = { campaignId: id, amount };
//       await makeDonation(donationData);
//       alert('Thank you for your donation!');
//       navigate('/campaigns');
//     } catch (err) {
//       alert('Donation failed or campaign is not active yet. Please try again.');
//     }
//   };

//   if (!campaign) return <div>{error || 'Loading...'}</div>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">{campaign.title}</h1>
//       <p className="mb-6">{campaign.description}</p>
//       <p className="mb-2"><strong>Goal:</strong> ${campaign.goalAmount}</p>
//       <p className="mb-2"><strong>Raised:</strong> ${campaign.raisedAmount}</p>

//       <DonationForm onSubmit={handleDonationSubmit} />

//       <button
//         className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleShare}
//       >
//         Share Campaign
//       </button>
//     </div>
//   );
// };

// export default CampaignDetail;

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getCampaignById } from '../services/campaignService';
// import { makeDonation } from '../services/donationService';
// import DonationForm from '../forms/DonationForm';

// const CampaignDetail = () => {
//   const { id } = useParams();
//   const [campaign, setCampaign] = useState(null);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCampaign = async () => {
//       try {
//         const campaignData = await getCampaignById(id);
//         setCampaign(campaignData);
//       } catch (err) {
//         setError('Failed to load campaign details.');
//       }
//     };
//     fetchCampaign();
//   }, [id]);

//   const handleShare = () => {
//     const shareUrl = `${window.location.origin}/campaign/${id}`;
//     if (navigator.share) {
//       navigator.share({
//         title: campaign?.title || 'Campaign',
//         text: 'Check out this campaign!',
//         url: shareUrl,
//       }).catch((err) => console.error('Error sharing:', err));
//     } else {
//       navigator.clipboard.writeText(shareUrl);
//       alert('Campaign URL copied to clipboard.');
//     }
//   };

//   const handleDonationSubmit = async (amount) => {
//     try {
//       const donationData = { campaignId: id, amount };
//       await makeDonation(donationData);
//       alert('Thank you for your donation!');
//       navigate('/campaigns');
//     } catch (err) {
//       alert('Donation failed or campaign is not active yet. Please try again.');
//     }
//   };

//   if (!campaign) return <div>{error || 'Loading...'}</div>;

//   return (
//     <div className="container mx-auto p-6 md:p-10 bg-gray-50 rounded-lg shadow-lg max-w-3xl mt-10">
//       <h1 className="text-4xl font-extrabold text-blue-700 mb-4">{campaign.title}</h1>
//       <p className="text-lg text-gray-700 mb-6">{campaign.description}</p>

//       <div className="flex justify-between items-center mb-6">
//         <p className="text-xl font-semibold text-gray-800">
//           <strong>Goal:</strong> ${campaign.goalAmount.toLocaleString()}
//         </p>
//         <p className="text-xl font-semibold text-green-600">
//           <strong>Raised:</strong> ${campaign.raisedAmount.toLocaleString()}
//         </p>
//       </div>

//       <DonationForm onSubmit={handleDonationSubmit} />

//       <button
//         className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
//         onClick={handleShare}
//       >
//         Share Campaign
//       </button>
//     </div>
//   );
// };

// export default CampaignDetail;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getCampaignById } from "../services/campaignService";
// import { makeDonation } from "../services/donationService";
// import DonationForm from "../forms/DonationForm";
// import { FaHeart, FaDollarSign, FaShareAlt } from "react-icons/fa";
// const CampaignDetail = () => {
//   const { id } = useParams();
//   const [campaign, setCampaign] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCampaign = async () => {
//       try {
//         const campaignData = await getCampaignById(id);
//         setCampaign(campaignData);
//       } catch (err) {
//         setError("Failed to load campaign details.");
//       }
//     };
//     fetchCampaign();
//   }, [id]);

//   const handleShare = () => {
//     const shareUrl = `${window.location.origin}/campaign/${id}`;
//     if (navigator.share) {
//       navigator
//         .share({
//           title: campaign?.title || "Campaign",
//           text: "Check out this campaign!",
//           url: shareUrl,
//         })
//         .catch((err) => console.error("Error sharing:", err));
//     } else {
//       navigator.clipboard.writeText(shareUrl);
//       alert("Campaign URL copied to clipboard.");
//     }
//   };

//   const handleSuccessfulDonation = async ({paymentIntent,amount}) => {
//     console.log("at details page intent: ",paymentIntent)
//     try {
//       const donationData = {
//         campaignId: id,
//         amount:amount,
//         transactionId: paymentIntent.id,
//       };

//       await makeDonation(donationData);
//       alert("Donation recorded successfully!");

//       // Additional actions like refreshing campaign data here
//     } catch (err) {
//       console.log("failed to revord donation;", err)
//       console.error("Failed to record donation:", err);
//     }
//   };

//   const handleDonationSubmit = async (amount) => {
//     try {
//       const donationData = { campaignId: id, amount };
//       await makeDonation(donationData);
//       alert("Thank you for your donation!");
//       navigate("/campaigns");
//     } catch (err) {
//       alert("Donation failed or campaign is not active yet. Please try again.");
//     }
//   };

//   if (!campaign) return <div>{error || "Loading..."}</div>;

//   const goalAmount = campaign?.goalAmount || 0;
//   const raisedAmount = campaign?.raisedAmount || 0;
//   const totalDonors = campaign?.totalDonors || 10;
//   const totalAmount = campaign?.totalAmount || 10;
//   const progressPercentage = ((raisedAmount / goalAmount) * 100).toFixed(2);

//   return (
//     <div className="container mx-auto p-6 md:p-10 bg-gray-50 rounded-lg shadow-lg max-w-3xl my-6 ">
//       <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
//         {campaign.title}
//       </h1>
//       <p className="text-lg text-gray-700 mb-6">{campaign.description}</p>

//       {/* Campaign Progress Section */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="w-1/3">
//           <p className="text-xl font-semibold text-gray-800">
//             <strong>Goal:</strong> ${goalAmount.toLocaleString()}
//           </p>
//           <p className="text-xl font-semibold text-green-600">
//             <strong>Raised:</strong> ${raisedAmount.toLocaleString()}
//           </p>
//         </div>

//         {/* Vertical Progress Bar */}
//         {/* Horizontal Progress Bar */}
//         <div className="w-full mt-6">
//           <div className="relative pt-1">
//             {/* Outer Container for Progress Bar */}
//             <div className="flex mb-2 items-center justify-between">
//               <div className="text-sm font-medium text-gray-600">
//                 Goal Progress
//               </div>
//               <div className="text-sm font-semibold text-gray-600">
//                 {progressPercentage}% Achieved
//               </div>
//             </div>
//             <div className="flex mb-2">
//               {/* Background of the Progress Bar */}
//               <div className="w-full bg-gray-300 h-2 rounded-full">
//                 {/* Dynamic Progress Bar */}
//                 <div
//                   className="h-2 rounded-full bg-gradient-to-r from-green-400 to-teal-500"
//                   style={{ width: `${progressPercentage}%` }} // Set width dynamically
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Donation Icons */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex items-center space-x-4">
//           <FaHeart className="text-red-500 text-3xl" />
//           <p className="text-xl text-gray-700 font-semibold">
//             {totalDonors} Donors
//           </p>
//         </div>

//         <div className="flex items-center space-x-4">
//           <FaDollarSign className="text-teal-600 text-3xl" />
//           <p className="text-xl text-gray-700 font-semibold">
//             {totalAmount.toLocaleString()}
//           </p>
//         </div>
//       </div>

//       <DonationForm onSuccessfulDonation={handleSuccessfulDonation} campaignId={id} />

//       {/* Share Campaign Button */}
//       <button
//         className="mt-1 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
//         onClick={handleShare}
//       >
//         <FaShareAlt className="inline mr-2" /> Share Campaign
//       </button>
//     </div>
//   );
// };

// export default CampaignDetail;

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getCampaignById } from "../services/campaignService";
// import { makeDonation } from "../services/donationService";
// import DonationForm from "../forms/DonationForm";
// import { FaHeart, FaDollarSign, FaShareAlt } from "react-icons/fa";

// const CampaignDetail = () => {
//   const { id } = useParams();
//   const [campaign, setCampaign] = useState(null);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCampaign = async () => {
//       try {
//         const campaignData = await getCampaignById(id);
//         setCampaign(campaignData);
//       } catch (err) {
//         setError("Failed to load campaign details.");
//       }
//     };
//     fetchCampaign();
//   }, [id]);

//   const handleShare = () => {
//     const shareUrl = `${window.location.origin}/campaign/${id}`;
//     if (navigator.share) {
//       navigator
//         .share({
//           title: campaign?.title || "Campaign",
//           text: "Check out this campaign!",
//           url: shareUrl,
//         })
//         .catch((err) => console.error("Error sharing:", err));
//     } else {
//       navigator.clipboard.writeText(shareUrl);
//       alert("Campaign URL copied to clipboard.");
//     }
//   };

//   const handleSuccessfulDonation = async ({ paymentIntent, amount }) => {
//     console.log("at details page intent: ", paymentIntent);
//     try {
//       const donationData = {
//         campaignId: id,
//         amount,
//         transactionId: paymentIntent.id,
//       };

//       await makeDonation(donationData);
//       alert("Donation recorded successfully!");

//       // Re-fetch campaign data to reflect real-time changes
//       const updatedCampaign = await getCampaignById(id);
//       setCampaign(updatedCampaign);

//     } catch (err) {
//       console.error("Failed to record donation:", err);
//     }
//   };

//   if (!campaign) return <div>{error || "Loading..."}</div>;

//   const goalAmount = campaign?.goalAmount || 0;
//   const raisedAmount = campaign?.raisedAmount || 0;
//   const totalDonors = campaign?.totalDonors || 10;
//   const totalAmount = campaign?.totalAmount || 10;
//   const progressPercentage = ((raisedAmount / goalAmount) * 100).toFixed(2);

//   return (
//     <div className="container mx-auto p-6 md:p-10 bg-gray-50 rounded-lg shadow-lg max-w-3xl my-6 ">
//       <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
//         {campaign.title}
//       </h1>
//       <p className="text-lg text-gray-700 mb-6">{campaign.description}</p>

//       {/* Campaign Progress Section */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="w-1/3">
//           <p className="text-xl font-semibold text-gray-800">
//             <strong>Goal:</strong> ${goalAmount.toLocaleString()}
//           </p>
//           <p className="text-xl font-semibold text-green-600">
//             <strong>Raised:</strong> ${raisedAmount.toLocaleString()}
//           </p>
//         </div>

//         {/* Horizontal Progress Bar */}
//         <div className="w-full mt-6">
//           <div className="relative pt-1">
//             <div className="flex mb-2 items-center justify-between">
//               <div className="text-sm font-medium text-gray-600">
//                 Goal Progress
//               </div>
//               <div className="text-sm font-semibold text-gray-600">
//                 {progressPercentage}% Achieved
//               </div>
//             </div>
//             <div className="flex mb-2">
//               <div className="w-full bg-gray-300 h-2 rounded-full">
//                 <div
//                   className="h-2 rounded-full bg-gradient-to-r from-green-400 to-teal-500"
//                   style={{ width: `${progressPercentage}%` }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Donation Icons */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex items-center space-x-4">
//           <FaHeart className="text-red-500 text-3xl" />
//           <p className="text-xl text-gray-700 font-semibold">
//             {totalDonors} Donors
//           </p>
//         </div>

//         <div className="flex items-center space-x-4">
//           <FaDollarSign className="text-teal-600 text-3xl" />
//           <p className="text-xl text-gray-700 font-semibold">
//             {totalAmount.toLocaleString()}
//           </p>
//         </div>
//       </div>

//       <DonationForm onSuccessfulDonation={handleSuccessfulDonation} campaignId={id} />

//       {/* Share Campaign Button */}
//       <button
//         className="mt-1 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
//         onClick={handleShare}
//       >
//         <FaShareAlt className="inline mr-2" /> Share Campaign
//       </button>
//     </div>
//   );
// };

// export default CampaignDetail;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCampaignById } from "../services/campaignService";
import { makeDonation } from "../services/donationService";
import DonationForm from "../forms/DonationForm";
import { FaHeart, FaDollarSign, FaShareAlt } from "react-icons/fa";
import { ClipLoader } from "react-spinners"; // Importing the ClipLoader spinner
import { sendEmail } from "../services/emailService"; // Assume you have an email service
import { useAuth } from "../context/AuthContext";
const CampaignDetail = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [donationStatus, setDonationStatus] = useState(null); // To track donation status (success or failure)
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const campaignData = await getCampaignById(id);
        setCampaign(campaignData);
      } catch (err) {
        setError("Failed to load campaign details.");
      }
    };
    fetchCampaign();
  }, [id]);

  const handleShare = () => {
    const shareUrl = `${window.location.origin}/campaign/${id}`;
    if (navigator.share) {
      navigator
        .share({
          title: campaign?.title || "Campaign",
          text: "Check out this campaign!",
          url: shareUrl,
        })
        .catch((err) => console.error("Error sharing:", err));
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Campaign URL copied to clipboard.");
    }
  };

  const handleSuccessfulDonation = async ({ paymentIntent, amount }) => {
    console.log("at details page intent: ", paymentIntent);

    setIsLoading(true); // Show loading state
    setDonationStatus(null); // Reset donation status

    try {
      const donationData = {
        campaignId: id,
        amount:amount,
        transactionId: paymentIntent.id,
      };

      await makeDonation(donationData);
      alert("Donation recorded successfully!");

      // Send email notification about the successful donation
      await sendEmail({
        to: user.email, // This should be the donor or campaign organizer's email
        subject: "Donation Success",
        body: `Your donation of $${amount} has been successfully processed for the campaign: ${campaign.title}. Thank you for your contribution!`,
      });

      // Re-fetch campaign data to reflect real-time changes
      const updatedCampaign = await getCampaignById(id);
      setCampaign(updatedCampaign);

      setDonationStatus("success"); // Set status to success
    } catch (err) {
      console.error("Failed to record donation:", err);
      setDonationStatus("failure"); // Set status to failure
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  if (!campaign) return <div>{error || "Loading..."}</div>;

  const goalAmount = campaign?.goalAmount || 0;
  const raisedAmount = campaign?.raisedAmount || 0;
  const totalDonors = campaign?.totalDonors || 10;
  const totalAmount = campaign?.totalAmount || 10;
  const progressPercentage = ((raisedAmount / goalAmount) * 100).toFixed(2);

  return (
    <div className="container mx-auto p-6 md:p-10 bg-gray-50 rounded-lg shadow-lg max-w-3xl my-6 ">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
        {campaign.title}
      </h1>
      <p className="text-lg text-gray-700 mb-6">{campaign.description}</p>

      {/* Campaign Progress Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/3">
          <p className="text-xl font-semibold text-gray-800">
            <strong>Goal:</strong> ${goalAmount.toLocaleString()}
          </p>
          <p className="text-xl font-semibold text-green-600">
            <strong>Raised:</strong> ${raisedAmount.toLocaleString()}
          </p>
        </div>

        {/* Horizontal Progress Bar */}
        <div className="w-full mt-6">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div className="text-sm font-medium text-gray-600">
                Goal Progress
              </div>
              <div className="text-sm font-semibold text-gray-600">
                {progressPercentage}% Achieved
              </div>
            </div>
            <div className="flex mb-2">
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-green-400 to-teal-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Icons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <FaHeart className="text-red-500 text-3xl" />
          <p className="text-xl text-gray-700 font-semibold">
            {totalDonors} Donors
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <FaDollarSign className="text-teal-600 text-3xl" />
          <p className="text-xl text-gray-700 font-semibold">
            {totalAmount.toLocaleString()}
          </p>
        </div>
      </div>

      <DonationForm
        onSuccessfulDonation={handleSuccessfulDonation}
        campaignId={id}
      />

      

     {/* Loading Spinner Modal */}
     {isLoading && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-700">
              Processing your payment...
            </p>
            {/* React Spinner Component */}
            <ClipLoader
              color="#36d7b7" // Green color for the spinner
              loading={isLoading} // Set loading state
              size={50} // Size of the spinner
              className="mt-4 mx-auto" // Centering the spinner
            />
          </div>
        </div>
      </div>
    )}

      {/* Share Campaign Button */}
      <button
        className="mt-1 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        onClick={handleShare}
      >
        <FaShareAlt className="inline mr-2" /> Share Campaign
      </button>
    </div>
  );
};

export default CampaignDetail;
