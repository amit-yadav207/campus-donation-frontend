// import React, { useState, useEffect } from 'react';
// import CampaignCard from '../components/CampaignCard';
// import { getCampaigns } from '../services/campaignService';

// const CampaignList = () => {
//   const [campaigns, setCampaigns] = useState([]);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       const data = await getCampaigns();
//       setCampaigns(data);
//     };
//     fetchCampaigns();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Campaigns</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {campaigns.map(campaign => (
//           <CampaignCard key={campaign._id} campaign={campaign} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CampaignList;


// import React, { useState, useEffect } from 'react';
// import CampaignCard from '../components/CampaignCard';
// import { getCampaigns } from '../services/campaignService';

// const CampaignList = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       const data = await getCampaigns();
//       setCampaigns(data);
//     };
//     fetchCampaigns();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredCampaigns = campaigns.filter((campaign) =>
//     campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
//       <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Campaigns</h2>
      
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search campaigns..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="w-full p-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:border-blue-500"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredCampaigns.length > 0 ? (
//           filteredCampaigns.map((campaign) => (
//             <CampaignCard key={campaign._id} campaign={campaign} />
//           ))
//         ) : (
//           <p className="text-center text-gray-500 col-span-full">No campaigns found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CampaignList;




// import React, { useState, useEffect } from 'react';
// import CampaignCard from '../components/CampaignCard';
// import { getCampaigns } from '../services/campaignService';

// const CampaignList = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       const data = await getCampaigns();
//       setCampaigns(data);
//     };
//     fetchCampaigns();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredCampaigns = campaigns.filter((campaign) =>
//     campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Support a Cause You Care About</h1>
//         <p className="text-lg md:text-xl">Explore and contribute to impactful campaigns that make a difference.</p>
//       </section>

//       {/* Campaign List Section */}
//       <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-6">
//         <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Campaigns</h2>
        
//         {/* Search Bar */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Search campaigns..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="w-full p-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Campaign Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredCampaigns.length > 0 ? (
//             filteredCampaigns.map((campaign) => (
//               <CampaignCard key={campaign._id} campaign={campaign} />
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">No campaigns found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CampaignList;


// import React, { useState, useEffect } from 'react';
// import CampaignCard from '../components/CampaignCard';
// import { getCampaigns } from '../services/campaignService';

// const CampaignList = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       const data = await getCampaigns();
//       setCampaigns(data);
//     };
//     fetchCampaigns();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredCampaigns = campaigns.filter((campaign) =>
//     campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 px-6 text-center">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">Support a Cause You Care About</h1>
//         <p className="text-base md:text-lg">Explore and contribute to impactful campaigns that make a difference.</p>
//       </section>

//       {/* Campaign List Section */}
//       <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-6">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Campaigns</h2>

//         {/* Search Bar */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Search campaigns..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="w-full p-3 rounded-lg border-2 border-indigo-300 focus:outline-none focus:border-indigo-500"
//           />
//         </div>

//         {/* Campaign Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredCampaigns.length > 0 ? (
//             filteredCampaigns.map((campaign) => (
//               <CampaignCard key={campaign._id} campaign={campaign} />
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">No campaigns found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CampaignList;



// import React, { useState, useEffect } from 'react';
// import CampaignCard from '../components/CampaignCard';
// import { getCampaigns } from '../services/campaignService';
// import { Oval } from 'react-loader-spinner'; // Import the Oval spinner

// const CampaignList = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isLoading, setIsLoading] = useState(true); // State to track loading

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       const data = await getCampaigns();
//       setCampaigns(data);
//       setIsLoading(false); // Set loading to false once campaigns are fetched
//     };
//     fetchCampaigns();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredCampaigns = campaigns.filter((campaign) =>
//     campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 px-6 text-center">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">Support a Cause You Care About</h1>
//         <p className="text-base md:text-lg">Explore and contribute to impactful campaigns that make a difference.</p>
//       </section>

//       {/* Campaign List Section */}
//       <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-6">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Campaigns</h2>

//         {/* Search Bar */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Search campaigns..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="w-full p-3 rounded-lg border-2 border-indigo-300 focus:outline-none focus:border-indigo-500"
//           />
//         </div>

//         {/* Loading State: Show the spinner while loading */}
//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <Oval color="#00BFFF" height={50} width={50} />
//           </div>
//         ) : (
//           // Campaign Cards: Show after loading
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredCampaigns.length > 0 ? (
//               filteredCampaigns.map((campaign) => (
//                 <CampaignCard key={campaign._id} campaign={campaign} />
//               ))
//             ) : (
//               <p className="text-center text-gray-500 col-span-full">No campaigns found.</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CampaignList;




// import React, { useState, useEffect } from 'react';
// import CampaignCard from '../components/CampaignCard';
// import { getCampaigns } from '../services/campaignService';
// import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import default styles
// import { Oval } from 'react-loader-spinner'; // Import the Oval spinner
// const CampaignList = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const data = await getCampaigns();
//         setCampaigns(data);
//         setIsLoading(false);
//         toast.success('Campaigns loaded successfully!'); // Success message
//       } catch (error) {
//         setIsLoading(false);
//         toast.error('Failed to load campaigns. Please try again later.'); // Error message
//       }
//     };
//     fetchCampaigns();
//   }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredCampaigns = campaigns.filter((campaign) =>
//     campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 px-6 text-center">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">Support a Cause You Care About</h1>
//         <p className="text-base md:text-lg">Explore and contribute to impactful campaigns that make a difference.</p>
//       </section>

//       {/* Campaign List Section */}
//       <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-6">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Campaigns</h2>

//         {/* Search Bar */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Search campaigns..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="w-full p-3 rounded-lg border-2 border-indigo-300 focus:outline-none focus:border-indigo-500"
//           />
//         </div>

//         {/* Loading State: Show spinner or skeleton loader */}
//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <Oval color="#00BFFF" height={50} width={50} />
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredCampaigns.length > 0 ? (
//               filteredCampaigns.map((campaign) => (
//                 <CampaignCard key={campaign._id} campaign={campaign} />
//               ))
//             ) : (
//               <p className="text-center text-gray-500 col-span-full">No campaigns found.</p>
//             )}
//           </div>
//         )}
//       </div>

//       {/* ToastContainer to render the toasts */}
//       <ToastContainer />
//     </div>
//   );
// };

// export default CampaignList;



import React, { useState, useEffect } from 'react';
import CampaignCard from '../components/CampaignCard';
import { getCampaigns } from '../services/campaignService';
import toast, { Toaster } from 'react-hot-toast'; // Import HotToast
import { Oval } from 'react-loader-spinner'; // Import the Oval spinner

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getCampaigns();
        setCampaigns(data);
        setIsLoading(false);
        toast.success('Campaigns loaded successfully!'); // Success message
      } catch (error) {
        setIsLoading(false);
        toast.error('Failed to load campaigns. Please try again later.'); // Error message
      }
    };
    fetchCampaigns();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Support a Cause You Care About</h1>
        <p className="text-base md:text-lg">Explore and contribute to impactful campaigns that make a difference.</p>
      </section>

      {/* Campaign List Section */}
      <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-6">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Campaigns</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 rounded-lg border-2 border-indigo-300 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Loading State: Show spinner or skeleton loader */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Oval color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCampaigns.length > 0 ? (
              filteredCampaigns.map((campaign) => (
                <CampaignCard key={campaign._id} campaign={campaign} />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">No campaigns found.</p>
            )}
          </div>
        )}
      </div>

      {/* Toaster to render the toasts */}
      <Toaster position="top-center" />
    </div>
  );
};

export default CampaignList;
