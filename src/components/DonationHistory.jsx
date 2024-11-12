// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';  // To fetch userId from URL params
// import { getDonationHistory } from '../services/donationService';  // Assuming we add a service for donations

// const DonationHistory = () => {
//   const { userId } = useParams(); // Get the userId from URL params
//   const [donationHistory, setDonationHistory] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch donation history
//     const fetchDonationHistory = async () => {
//       try {
//         console.log("fontend useid:",userId)
//         const data = await getDonationHistory(userId);  // Service call to fetch donation history
//         setDonationHistory(data.donations);
//         setTotalAmount(data.totalAmount);
//       } catch (error) {
//         console.error('Error fetching donation history:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonationHistory();
//   }, [userId]);

//   if (loading) {
//     return (
//       <div className="text-center">
//         <div className="spinner-border" role="status"></div>
//         <span>Loading...</span>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">Donation History</h2>
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold">Total Amount Donated: ₹{totalAmount}</h3>
//       </div>

//       <table className="min-w-full table-auto border-collapse">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border">Campaign Name</th>
//             <th className="py-2 px-4 border">Amount Donated</th>
//             <th className="py-2 px-4 border">Donation Date</th>
//             <th className="py-2 px-4 border">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {donationHistory.map((donation) => (
//             <tr key={donation._id}>
//               <td className="py-2 px-4 border">{donation?.campaign?.title}</td>
//               <td className="py-2 px-4 border">₹{donation?.amount}</td>
//               <td className="py-2 px-4 border">{new Date(donation?.createdAt).toLocaleDateString()}</td>
//               <td className="py-2 px-4 border">{donation?.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DonationHistory;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';  // To fetch userId from URL params
// import { getDonationHistory } from '../services/donationService';  // Assuming we add a service for donations

// const DonationHistory = () => {
//   const { userId } = useParams(); // Get the userId from URL params
//   const [donationHistory, setDonationHistory] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch donation history
//     const fetchDonationHistory = async () => {
//       try {
//         console.log("frontend userId:", userId);
//         const data = await getDonationHistory(userId);  // Service call to fetch donation history
//         setDonationHistory(data.donations);
//         setTotalAmount(data.totalAmount);
//       } catch (error) {
//         console.error('Error fetching donation history:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonationHistory();
//   }, [userId]);

//   if (loading) {
//     return (
//       <div className="text-center">
//         <div className="spinner-border" role="status"></div>
//         <span>Loading...</span>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">Donation History</h2>
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold">Total Amount Donated: ₹{totalAmount}</h3>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="py-2 px-4 border">Campaign Name</th>
//               <th className="py-2 px-4 border">Amount Donated</th>
//               <th className="py-2 px-4 border">Donation Date</th>
//               <th className="py-2 px-4 border">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {donationHistory.map((donation) => (
//               <tr key={donation._id}>
//                 <td className="py-2 px-4 border">{donation?.campaign?.title}</td>
//                 <td className="py-2 px-4 border">₹{donation?.amount}</td>
//                 <td className="py-2 px-4 border">{new Date(donation?.createdAt).toLocaleDateString()}</td>
//                 <td className="py-2 px-4 border">{donation?.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DonationHistory;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';  // To fetch userId from URL params
// import { getDonationHistory } from '../services/donationService';  // Assuming we add a service for donations
// import { FaChevronRight, FaDollarSign, FaCalendarAlt, FaRegCheckCircle } from 'react-icons/fa'; // Importing icons from react-icons

// const DonationHistory = () => {
//   const { userId } = useParams(); // Get the userId from URL params
//   const [donationHistory, setDonationHistory] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch donation history
//     const fetchDonationHistory = async () => {
//       try {
//         console.log("frontend userId:", userId);
//         const data = await getDonationHistory(userId);  // Service call to fetch donation history
//         setDonationHistory(data.donations);
//         setTotalAmount(data.totalAmount);
//       } catch (error) {
//         console.error('Error fetching donation history:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDonationHistory();
//   }, [userId]);

//   if (loading) {
//     return (
//       <div className="text-center">
//         <div className="spinner-border" role="status"></div>
//         <span>Loading...</span>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6">
//       {/* Hero Section with Gradient and Centered Text */}
//       <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-8 rounded-lg shadow-lg mb-6 text-center">
//         <h1 className="text-4xl font-bold">Your Donation History</h1>
//         <p className="mt-4 text-lg">See all your past donations and the impact you've made.</p>

//       </div>

//       {/* Total Donation Section */}
//       <div className="mb-6 text-center">
//         <h3 className="text-xl font-semibold">
//           Total Amount Donated:  ${totalAmount}
//         </h3>
//       </div>

//       {/* Donation History Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">
//                 <FaChevronRight className="w-4 h-4 inline-block mr-2" /> Campaign Name
//               </th>
//               <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">
//                 <FaDollarSign className="w-4 h-4 inline-block mr-2" /> Amount Donated
//               </th>
//               <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">
//                 <FaCalendarAlt className="w-4 h-4 inline-block mr-2" /> Donation Date
//               </th>
//               <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">
//                 <FaRegCheckCircle className="w-4 h-4 inline-block mr-2" /> Status
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {donationHistory.map((donation) => (
//               <tr key={donation._id} className="hover:bg-gray-50">
//                 <td className="py-3 px-4 border text-sm text-gray-800">{donation?.campaign?.title}</td>
//                 <td className="py-3 px-4 border text-sm text-gray-800">${donation?.amount}</td>
//                 <td className="py-3 px-4 border text-sm text-gray-800">{new Date(donation?.createdAt).toLocaleDateString()}</td>
//                 <td className="py-3 px-4 border text-sm text-gray-800">{donation?.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DonationHistory;

import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"; // To fetch userId from URL params and navigate
import { getDonationHistory } from "../services/donationService"; // Assuming we add a service for donations
import {
  FaChevronRight,
  FaDollarSign,
  FaCalendarAlt,
  FaRegCheckCircle,
} from "react-icons/fa"; // Importing icons from react-icons

const DonationHistory = () => {
  const { userId } = useParams(); // Get the userId from URL params
  const navigate = useNavigate();
  const [donationHistory, setDonationHistory] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch donation history
    const fetchDonationHistory = async () => {
      try {
        console.log("frontend userId:", userId);
        const data = await getDonationHistory(userId); // Service call to fetch donation history
        setDonationHistory(data.donations);
        setTotalAmount(data.totalAmount);
      } catch (error) {
        console.error("Error fetching donation history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonationHistory();
  }, [userId]);

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status"></div>
        <span>Loading...</span>
      </div>
    );
  }

  const handleDonateNowClick = () => {
    navigate("/campaigns"); // Redirect to the donate page (adjust the route as necessary)
  };

  return (
    <div className="container mx-auto p-6">
      {/* Hero Section with Gradient and Centered Text */}
      <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-8 rounded-lg shadow-lg mb-6 text-center">
        <h1 className="text-4xl font-bold">Your Donation History</h1>
        <p className="mt-4 text-lg">
          See all your past donations and the impact you've made.
        </p>
      </div>

      {/* Total Donation Section */}
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold">
          Total Amount Donated: ${totalAmount}
        </h3>
      </div>

      {/* Conditional Rendering for Empty Donation History */}
      {donationHistory.length === 0 ? (
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-700">
            Make your first donation today!
          </p>
          <button
            onClick={handleDonateNowClick}
            className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Donate Now
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          {/* Donation History Table */}
          <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">
                  <FaChevronRight className="w-4 h-4 inline-block mr-2" />{" "}
                  Campaign Name
                </th>
                <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">
                  <FaDollarSign className="w-4 h-4 inline-block mr-2" /> Amount
                  Donated
                </th>
                <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">
                  <FaCalendarAlt className="w-4 h-4 inline-block mr-2" />{" "}
                  Donation Date
                </th>
                <th className="py-3 px-4 border text-left text-sm font-medium text-gray-600">
                  <FaRegCheckCircle className="w-4 h-4 inline-block mr-2" />{" "}
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {donationHistory.map((donation) => (
                <tr key={donation._id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border text-sm text-gray-800">
                    {donation?.campaign?.title}
                  </td>
                  <td className="py-3 px-4 border text-sm text-gray-800">
                    ${donation?.amount}
                  </td>
                  <td className="py-3 px-4 border text-sm text-gray-800">
                    {new Date(donation?.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 border text-sm text-gray-800">
                    {donation?.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DonationHistory;
