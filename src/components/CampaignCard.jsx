// import React from 'react';
// import { Link } from 'react-router-dom';

// const CampaignCard = ({ campaign }) => {
//   const shareCampaign = () => {
//     const shareUrl = `${window.location.origin}/campaigns/${campaign._id}`;
//     navigator.clipboard.writeText(shareUrl);
//     alert('Campaign link copied to clipboard!');
//   };

//   return (
//     <div className="bg-white shadow-md rounded-md p-4">
//       <img src={campaign.image} alt={campaign.title} className="w-full h-40 object-cover rounded" />
//       <h3 className="text-xl font-semibold mt-2">{campaign.title}</h3>
//       <p className="text-gray-600 mt-2">{campaign.description}</p>
//       <div className="flex justify-between items-center mt-4">
//         <Link to={`/campaigns/${campaign._id}`} className="btn-primary">
//           Donate Now
//         </Link>
//         <button onClick={shareCampaign} className="btn-secondary">
//           Share
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CampaignCard;



// import React from 'react';
// import { Link,useNavigate } from 'react-router-dom';

// const CampaignCard = ({ campaign }) => {
//   const navigate = useNavigate();
//   return (
//     <div className="border p-4 rounded shadow-lg">
//       <h3 className="text-xl font-bold">{campaign.title}</h3>
//       <p>{campaign.description}</p>
//       <div className="flex justify-between mt-4">
//         <Link to={`/campaigns/${campaign._id}`} className="text-blue-500">View Details</Link>
//         <button className="bg-green-500 text-white py-1 px-3 rounded " onClick={()=>navigate(`/campaigns/${campaign._id}`)}>Donate</button>
//         <button className="bg-gray-500 text-white py-1 px-3 rounded">Share</button>
//       </div>
//     </div>
//   );
// };

// export default CampaignCard;








// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import img from '../assets/donation image.avif'
// const CampaignCard = ({ campaign }) => {
//   const navigate = useNavigate();

//   const shareCampaign = () => {
//     const shareUrl = `${window.location.origin}/campaigns/${campaign._id}`;
//     navigator.clipboard.writeText(shareUrl);
//     alert('Campaign link copied to clipboard!');
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 duration-200">
//       <img src={campaign.image||img} alt={campaign.title} className="w-full h-48 object-cover" />

//       <div className="p-6">
//         <h3 className="text-2xl font-semibold text-blue-600 mb-2">{campaign.title}</h3>
//         <p className="text-gray-700 mb-4 line-clamp-3">{campaign.description}</p>
        
//         <div className="flex justify-between items-center">
//           <Link to={`/campaigns/${campaign._id}`} className="text-blue-500 hover:underline font-semibold">
//             View Details
//           </Link>
          
//           <div className="flex space-x-2">
//             <button
//               className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300"
//               onClick={() => navigate(`/campaigns/${campaign._id}`)}
//             >
//               Donate
//             </button>
//             <button
//               className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition duration-300"
//               onClick={shareCampaign}
//             >
//               Share
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CampaignCard;




import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/donation image.avif';

const CampaignCard = ({ campaign }) => {
  const navigate = useNavigate();

  const shareCampaign = () => {
    const shareUrl = `${window.location.origin}/campaigns/${campaign._id}`;
    navigator.clipboard.writeText(shareUrl);
    alert('Campaign link copied to clipboard!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-200 hover:scale-105 w-full max-w-xs mx-auto">
      <img src={campaign.image || img} alt={campaign.title} className="w-full h-36 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-600 mb-1">{campaign.title}</h3>
        <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{campaign.description}</p>
        
        <div className="flex justify-between items-center">
          <Link to={`/campaigns/${campaign._id}`} className="text-blue-500 hover:underline font-medium text-sm">
            View Details
          </Link>
          
          <div className="flex space-x-1">
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 text-sm rounded-md transition duration-200"
              onClick={() => navigate(`/campaigns/${campaign._id}`)}
            >
              Donate
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 text-sm rounded-md transition duration-200"
              onClick={shareCampaign}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
