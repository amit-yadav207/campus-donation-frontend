// import React, { useEffect, useState } from 'react';
// import { getAnalyticsData } from '../services/analyticsService'; // Assuming a service that fetches analytics data
// import { Line, Pie } from 'react-chartjs-2'; // Import charts
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const DonorAnalytics = () => {
//   const [analyticsData, setAnalyticsData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch analytics data
//   const fetchAnalyticsData = async () => {
//     try {
//       const data = await getAnalyticsData();
//       setAnalyticsData(data);
//     } catch (err) {
//       console.error('Error fetching analytics data:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAnalyticsData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const totalCampaigns = analyticsData?.totalCampaigns || 0;
//   const totalDonations = analyticsData?.totalDonations || 0;
//   const campaigns = analyticsData?.campaigns || [];
//   const donors = analyticsData?.donors || [];

//   // Prepare chart data for donation trends
//   const donationTrendData = {
//     labels: campaigns.map((campaign) => campaign.title),
//     datasets: [
//       {
//         label: 'Total Donations',
//         data: campaigns.map((campaign) => campaign.totalDonations),
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//         tension: 0.1,
//       },
//     ],
//   };

//   // Prepare chart data for donations per donor
//   const donationDistributionData = {
//     labels: donors.map((donor) => donor.name),
//     datasets: [
//       {
//         data: donors.map((donor) => donor.amount),
//         backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
//         hoverBackgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)'],
//       },
//     ],
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-8">Donor Analytics</h1>
      
//       {/* Campaign Summary Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
//         <div className="bg-white p-6 rounded-lg shadow-md text-center">
//           <h2 className="text-2xl font-semibold text-gray-700">Total Campaigns</h2>
//           <p className="text-xl text-gray-500">{totalCampaigns}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md text-center">
//           <h2 className="text-2xl font-semibold text-gray-700">Total Donations</h2>
//           <p className="text-xl text-gray-500">${totalDonations}</p>
//         </div>
//       </div>

//       {/* Campaign List */}
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Campaigns</h2>
//       <table className="min-w-full table-auto border-collapse mb-8">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border">Campaign</th>
//             <th className="py-2 px-4 border">Total Donations</th>
//             <th className="py-2 px-4 border">Goal Amount</th>
//             <th className="py-2 px-4 border">End Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {campaigns.map((campaign) => (
//             <tr key={campaign.id}>
//               <td className="py-2 px-4 border">{campaign.title}</td>
//               <td className="py-2 px-4 border">${campaign.totalDonations}</td>
//               <td className="py-2 px-4 border">${campaign.goalAmount}</td>
//               <td className="py-2 px-4 border">{campaign.endDate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Donation Trend Chart */}
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Donation Trend per Campaign</h2>
//       <Line data={donationTrendData} options={{ responsive: true }} />

//       {/* Donor Distribution Pie Chart */}
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Donor Contributions</h2>
//       <Pie data={donationDistributionData} options={{ responsive: true }} />
//     </div>
//   );
// };

// export default DonorAnalytics;



// import React, { useEffect, useState } from 'react';
// import { getAnalyticsData } from '../services/analyticsService';
// import { Line, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const DonorAnalytics = () => {
//   const [analyticsData, setAnalyticsData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchAnalyticsData = async () => {
//     try {
//       const data = await getAnalyticsData();
//       setAnalyticsData(data);
//     } catch (err) {
//       console.error('Error fetching analytics data:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAnalyticsData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const totalCampaigns = analyticsData?.totalCampaigns || 0;
//   const totalDonationAmount = analyticsData?.totalDonationAmount || 0;
//   const campaigns = analyticsData?.topCampaigns || [];
//   const donors = analyticsData?.topDonors || [];

//   const donationTrendData = {
//     labels: campaigns.map((campaign) => campaign.campaign.title),
//     datasets: [
//       {
//         label: 'Total Donations',
//         data: campaigns.map((campaign) => campaign.totalAmount),
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//         tension: 0.1,
//       },
//     ],
//   };

//   const donationDistributionData = {
//     labels: donors.map((donor) => donor.donor.name),
//     datasets: [
//       {
//         data: donors.map((donor) => donor.totalDonated),
//         backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'],
//         hoverBackgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)'],
//       },
//     ],
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-8">Donor Analytics</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
//         <div className="bg-white p-6 rounded-lg shadow-md text-center">
//           <h2 className="text-2xl font-semibold text-gray-700">Total Campaigns</h2>
//           <p className="text-xl text-gray-500">{totalCampaigns}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md text-center">
//           <h2 className="text-2xl font-semibold text-gray-700">Total Donation Amount</h2>
//           <p className="text-xl text-gray-500">${totalDonationAmount}</p>
//         </div>
//       </div>

//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Campaigns</h2>
//       <table className="min-w-full table-auto border-collapse mb-8">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border">Campaign</th>
//             <th className="py-2 px-4 border">Total Donations</th>
//             <th className="py-2 px-4 border">Goal Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {campaigns.map((campaign) => (
//             <tr key={campaign.campaign._id}>
//               <td className="py-2 px-4 border">{campaign.campaign.title}</td>
//               <td className="py-2 px-4 border">${campaign.totalAmount}</td>
//               <td className="py-2 px-4 border">${campaign.campaign.goalAmount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Donation Trend per Campaign</h2>
//       <Line data={donationTrendData} options={{ responsive: true, maintainAspectRatio: false }} />

//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Donor Contributions</h2>
//       <Pie data={donationDistributionData} options={{ responsive: true, maintainAspectRatio: false }} />
//     </div>
//   );
// };

// export default DonorAnalytics;




// import React, { useEffect, useState } from 'react';
// import { getAnalyticsData } from '../services/analyticsService';
// import { Line, Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from 'chart.js';

// // Register necessary chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// const DonorAnalytics = () => {
//   const [analyticsData, setAnalyticsData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch analytics data
//   const fetchAnalyticsData = async () => {
//     try {
//       const data = await getAnalyticsData();
//       setAnalyticsData(data);
//     } catch (err) {
//       console.error('Error fetching analytics data:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAnalyticsData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const totalCampaigns = analyticsData?.totalCampaigns || 0;
//   const totalDonations = analyticsData?.totalDonationAmount || 0;
//   const campaigns = analyticsData?.topCampaigns || [];
//   const donors = analyticsData?.topDonors || [];

//   // Prepare chart data for donation trends
//   const donationTrendData = {
//     labels: campaigns.map((campaign) => campaign.title),
//     datasets: [
//       {
//         label: 'Total Donations',
//         data: campaigns.map((campaign) => campaign.donationCount),
//         fill: false,
//         borderColor: 'rgba(75,192,192,1)',
//         tension: 0.1,
//       },
//     ],
//   };

//   // Prepare chart data for donations per donor
//   const donationDistributionData = {
//     labels: donors.map((donor) => donor.name),
//     datasets: [
//       {
//         data: donors.map((donor) => donor.totalDonated),
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.6)',
//           'rgba(54, 162, 235, 0.6)',
//           'rgba(255, 206, 86, 0.6)',
//           'rgba(75, 192, 192, 0.6)',
//         ],
//         hoverBackgroundColor: [
//           'rgba(255, 99, 132, 0.8)',
//           'rgba(54, 162, 235, 0.8)',
//           'rgba(255, 206, 86, 0.8)',
//           'rgba(75, 192, 192, 0.8)',
//         ],
//       },
//     ],
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-8">Donor Analytics</h1>
      
//       {/* Campaign Summary Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div className="bg-white p-6 rounded-lg shadow-md text-center">
//           <h2 className="text-2xl font-semibold text-gray-700">Total Campaigns</h2>
//           <p className="text-xl text-gray-500">{totalCampaigns}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md text-center">
//           <h2 className="text-2xl font-semibold text-gray-700">Total Donations</h2>
//           <p className="text-xl text-gray-500">${totalDonations}</p>
//         </div>
//       </div>

//      {/* Campaign List */}
// <h2 className="text-3xl font-semibold text-gray-800 mb-4">Campaigns</h2>
// <div className="overflow-x-auto mb-8">
//   <table className="min-w-full table-auto border-collapse">
//     <thead>
//       <tr>
//         <th className="py-2 px-4 border">Campaign</th>
//         <th className="py-2 px-4 border">Total Donations</th>
//         <th className="py-2 px-4 border">Goal Amount</th>
//         <th className="py-2 px-4 border">Donation Count</th>
//       </tr>
//     </thead>
//     <tbody>
//       {campaigns.map((campaign) => (
//         <tr key={campaign.id}>
//           <td className="py-2 px-4 border">{campaign.title}</td>
//           <td className="py-2 px-4 border">${campaign.totalAmount}</td>
//           <td className="py-2 px-4 border">${campaign.goalAmount}</td>
//           <td className="py-2 px-4 border">{campaign.donationCount}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>


//      {/* Donation Trend Chart */}
// <h2 className="text-3xl font-semibold text-gray-800 mb-4">Donation Trend per Campaign</h2>
// <div className="max-w-full mx-auto h-96 px-4 sm:px-6 lg:px-8">
//   <Line
//     data={donationTrendData}
//     options={{
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         legend: {
//           position: 'top',
//         },
//       },
//     }}
//   />
// </div>


// {/* Donor Distribution Pie Chart */}
// <h2 className="text-3xl font-semibold text-gray-800 mb-4">Donor Contributions</h2>
// <div className="max-w-4xl mx-auto h-96">
//   <Pie
//     data={donationDistributionData}
//     options={{
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         legend: {
//           position: 'top',
//         },
//       },
//     }}
//   />
// </div>

//     </div>
//   );
// };

// export default DonorAnalytics;






import React, { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { getAnalyticsData } from '../services/analyticsService';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DonorAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch analytics data
  const fetchAnalyticsData = async () => {
    try {
      const data = await getAnalyticsData();
      setAnalyticsData(data);
    } catch (err) {
      console.error('Error fetching analytics data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Oval color="#00BFFF" height={80} width={80} />
      </div>
    );
  }


  const totalCampaigns = analyticsData?.totalCampaigns || 0;
  const totalDonations = analyticsData?.totalDonationAmount || 0;
  const campaigns = analyticsData?.topCampaigns || [];
  const donors = analyticsData?.topDonors || [];

  // Prepare chart data for donation trends
  const donationTrendData = {
    labels: campaigns.map((campaign) => campaign.title),
    datasets: [
      {
        label: 'Total Donations',
        data: campaigns.map((campaign) => campaign.donationCount),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  // Prepare chart data for donations per donor
  const donationDistributionData = {
    labels: donors.map((donor) => donor.name),
    datasets: [
      {
        data: donors.map((donor) => donor.totalDonated),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-12 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Donor Analytics Dashboard</h1>
        <p className="text-lg text-center">Track donation trends, top campaigns, and donor contributions in real-time.</p>
      </div>

      {/* Campaign Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Total Campaigns</h2>
          <p className="text-xl text-gray-500">{totalCampaigns}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Total Donations</h2>
          <p className="text-xl text-gray-500">${totalDonations}</p>
        </div>
      </div>

      {/* Campaign List */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Campaigns</h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Campaign</th>
              <th className="py-2 px-4 border">Total Donations</th>
              <th className="py-2 px-4 border">Goal Amount</th>
              <th className="py-2 px-4 border">Donation Count</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign,index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{campaign.title}</td>
                <td className="py-2 px-4 border">${campaign.totalAmount}</td>
                <td className="py-2 px-4 border">${campaign.goalAmount}</td>
                <td className="py-2 px-4 border">{campaign.donationCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Donation Trend Chart */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Donation Trend per Campaign</h2>
      <div className="max-w-full mx-auto h-96 px-4 sm:px-6 lg:px-8">
        <Line
          data={donationTrendData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
            },
          }}
        />
      </div>

      {/* Donor Distribution Pie Chart */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Donor Contributions</h2>
      <div className="max-w-4xl mx-auto h-96">
        <Pie
          data={donationDistributionData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default DonorAnalytics;
