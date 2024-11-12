// import React, { useEffect, useState } from 'react';
// import { getAllCampaigns, deleteCampaign, getAllUsers, deleteUser } from '../services/adminService';
// import { FaEdit, FaTrashAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

// const AdminDashboard = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loadingCampaigns, setLoadingCampaigns] = useState(true);
//   const [loadingUsers, setLoadingUsers] = useState(true);

//   useEffect(() => {
//     // Fetch all campaigns and users
//     const fetchCampaigns = async () => {
//       try {
//         const data = await getAllCampaigns();
//         setCampaigns(data);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       } finally {
//         setLoadingCampaigns(false);
//       }
//     };

//     const fetchUsers = async () => {
//       try {
//         const data = await getAllUsers();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       } finally {
//         setLoadingUsers(false);
//       }
//     };

//     fetchCampaigns();
//     fetchUsers();
//   }, []);

//   const handleDeleteCampaign = async (id) => {
//     try {
//       await deleteCampaign(id);
//       setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await deleteUser(id);
//       setUsers(users.filter((user) => user.id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleChangeStatus = async (id, status) => {
//     // Update campaign status (active/inactive)
//     try {
//       // You need to implement the logic for status change on the backend
//       console.log(`Changing status of campaign ${id} to ${status}`);
//     } catch (error) {
//       console.error('Error changing campaign status:', error);
//     }
//   };

//   if (loadingCampaigns || loadingUsers) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>

//       {/* Campaigns Table */}
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Campaigns</h2>
//       <div className="overflow-x-auto mb-6">
//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">Campaign Name</th>
//               <th className="py-2 px-4 border">Status</th>
//               <th className="py-2 px-4 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {campaigns.map((campaign) => (
//               <tr key={campaign.id}>
//                 <td className="py-2 px-4 border">{campaign.title}</td>
//                 <td className="py-2 px-4 border">
//                   <button
//                     onClick={() => handleChangeStatus(campaign.id, campaign.status === 'active' ? 'inactive' : 'active')}
//                     className={`px-4 py-2 rounded ${campaign.status === 'active' ? 'bg-green-500' : 'bg-red-500'} text-white`}
//                   >
//                     {campaign.status === 'active' ? 'Active' : 'Inactive'}
//                   </button>
//                 </td>
//                 <td className="py-2 px-4 border">
//                   <FaEdit className="mr-4 text-blue-500 cursor-pointer" />
//                   <FaTrashAlt
//                     onClick={() => handleDeleteCampaign(campaign.id)}
//                     className="mr-4 text-red-500 cursor-pointer"
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Users Table */}
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Users</h2>
//       <div className="overflow-x-auto mb-6">
//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">User Name</th>
//               <th className="py-2 px-4 border">Email</th>
//               <th className="py-2 px-4 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td className="py-2 px-4 border">{user.name}</td>
//                 <td className="py-2 px-4 border">{user.email}</td>
//                 <td className="py-2 px-4 border">
//                   <FaEdit className="mr-4 text-blue-500 cursor-pointer" />
//                   <FaTrashAlt
//                     onClick={() => handleDeleteUser(user.id)}
//                     className="mr-4 text-red-500 cursor-pointer"
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



// import React, { useEffect, useState } from 'react';
// import { getAllCampaigns, deleteCampaign, getAllUsers, deleteUser } from '../services/adminService';
// import { FaEdit, FaTrashAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

// const AdminDashboard = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loadingCampaigns, setLoadingCampaigns] = useState(true);
//   const [loadingUsers, setLoadingUsers] = useState(true);

//   useEffect(() => {
//     // Fetch all campaigns and users
//     const fetchCampaigns = async () => {
//       try {
//         const data = await getAllCampaigns();
//         setCampaigns(data);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       } finally {
//         setLoadingCampaigns(false);
//       }
//     };

//     const fetchUsers = async () => {
//       try {
//         const data = await getAllUsers();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       } finally {
//         setLoadingUsers(false);
//       }
//     };

//     fetchCampaigns();
//     fetchUsers();
//   }, []);

//   const handleDeleteCampaign = async (id) => {
//     try {
//       await deleteCampaign(id);
//       setCampaigns(campaigns.filter((campaign) => campaign.id !== id));
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await deleteUser(id);
//       setUsers(users.filter((user) => user.id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleChangeStatus = async (id, status) => {
//     // Update campaign status (active/inactive)
//     try {
//       // You need to implement the logic for status change on the backend
//       console.log(`Changing status of campaign ${id} to ${status}`);
//     } catch (error) {
//       console.error('Error changing campaign status:', error);
//     }
//   };

//   if (loadingCampaigns || loadingUsers) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       {/* Hero Section */}
//       <div className="hero-section bg-blue-500 text-white p-6 rounded-lg shadow-lg mb-8">
//         <h2 className="text-4xl font-bold">Welcome to the Admin Dashboard</h2>
//         <p className="text-xl mt-4">Manage campaigns and users effortlessly. Here's a quick overview of the system.</p>
//       </div>

//       <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>

//       {/* Campaigns Table */}
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Campaigns</h2>
//       <div className="overflow-x-auto mb-6">
//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">Campaign Name</th>
//               <th className="py-2 px-4 border">Status</th>
//               <th className="py-2 px-4 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {campaigns.map((campaign) => (
//               <tr key={campaign.id}>
//                 <td className="py-2 px-4 border">{campaign.title}</td>
//                 <td className="py-2 px-4 border text-center">
//                   {campaign.status === 'active' ? (
//                     <FaCheckCircle className="text-green-500 cursor-pointer" />
//                   ) : (
//                     <FaTimesCircle className="text-red-500 cursor-pointer" />
//                   )}
//                 </td>
//                 <td className="py-2 px-4 border text-center">
//                   <div className="flex justify-center space-x-4">
//                     <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700 transition-colors" />
//                     <FaTrashAlt
//                       onClick={() => handleDeleteCampaign(campaign.id)}
//                       className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Users Table */}
//       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Users</h2>
//       <div className="overflow-x-auto mb-6">
//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">User Name</th>
//               <th className="py-2 px-4 border">Email</th>
//               <th className="py-2 px-4 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td className="py-2 px-4 border">{user.name}</td>
//                 <td className="py-2 px-4 border">{user.email}</td>
//                 <td className="py-2 px-4 border text-center">
//                   <div className="flex justify-center space-x-4">
//                     <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700 transition-colors" />
//                     <FaTrashAlt
//                       onClick={() => handleDeleteUser(user.id)}
//                       className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;










// import React, { useEffect, useState } from 'react';
// import { getAllCampaigns, deleteCampaign, getAllUsers, deleteUser, updateCampaignStatus } from '../services/adminService';
// import { FaEdit, FaTrashAlt, FaCheckCircle, FaTimesCircle, FaCheck, FaTimes, FaDownload } from 'react-icons/fa';
// import { Oval } from 'react-loader-spinner';

// const AdminDashboard = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loadingCampaigns, setLoadingCampaigns] = useState(true);
//   const [loadingUsers, setLoadingUsers] = useState(true);

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const data = await getAllCampaigns();
//         setCampaigns(data);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       } finally {
//         setLoadingCampaigns(false);
//       }
//     };

//     const fetchUsers = async () => {
//       try {
//         const data = await getAllUsers();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       } finally {
//         setLoadingUsers(false);
//       }
//     };

//     fetchCampaigns();
//     fetchUsers();
//   }, []);

//   const handleDeleteCampaign = async (id) => {
//     try {
//       await deleteCampaign(id);
//       setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await deleteUser(id);
//       setUsers(users.filter((user) => user._id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleChangeStatus = async (id, status) => {
//     try {
//       await updateCampaignStatus(id, status);
//       setCampaigns(campaigns.map((campaign) => 
//         campaign._id === id ? { ...campaign, status } : campaign
//       ));
//     } catch (error) {
//       console.error('Error changing campaign status:', error);
//     }
//   };

//   const downloadReports = () => {
//     // Logic to generate and download a report (e.g., CSV format) with campaigns and users
//     console.log("Report generated and downloaded");
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-12 rounded-lg shadow-lg mb-8 text-center">
//         <h2 className="text-4xl font-bold">Welcome to the Admin Dashboard</h2>
//         <p className="text-xl mt-4">Manage campaigns and users effortlessly.</p>
//         <button
//           onClick={downloadReports}
//           className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
//         >
//           <FaDownload className="inline-block mr-2" /> Download Reports
//         </button>
//       </div>

//       <div className="grid grid-cols-2 gap-8 mb-8">
//         <div className="bg-blue-100 p-6 rounded-lg shadow-md">
//           <h3 className="text-2xl font-semibold">Total Campaigns: {campaigns.length}</h3>
//         </div>
//         <div className="bg-green-100 p-6 rounded-lg shadow-md">
//           <h3 className="text-2xl font-semibold">Total Users: {users.length}</h3>
//         </div>
//       </div>

//       <h2 className="text-3xl font-bold text-gray-800 mb-4">Campaigns</h2>
//       <div className="overflow-x-auto mb-6">
//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">Campaign Name</th>
//               <th className="py-2 px-4 border">Status</th>
//               <th className="py-2 px-4 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {campaigns.map((campaign) => (
//               <tr key={campaign._id}>
//                 <td className="py-2 px-4 border">{campaign.title}</td>
//                 <td className="py-2 px-4 border text-center">
//                   {campaign.status === 'active' ? (
//                     <FaCheckCircle className="text-green-500 cursor-pointer" onClick={() => handleChangeStatus(campaign._id, 'inactive')} />
//                   ) : (
//                     <FaTimesCircle className="text-red-500 cursor-pointer" onClick={() => handleChangeStatus(campaign._id, 'active')} />
//                   )}
//                 </td>
//                 <td className="py-2 px-4 border text-center">
//                   <div className="flex justify-center space-x-4">
//                     <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700 transition-colors" />
//                     <FaTrashAlt
//                       onClick={() => handleDeleteCampaign(campaign._id)}
//                       className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <h2 className="text-3xl font-bold text-gray-800 mb-4">Users</h2>
//       <div className="overflow-x-auto mb-6">
//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">User Name</th>
//               <th className="py-2 px-4 border">Email</th>
//               <th className="py-2 px-4 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td className="py-2 px-4 border">{user.name}</td>
//                 <td className="py-2 px-4 border">{user.email}</td>
//                 <td className="py-2 px-4 border text-center">
//                   <div className="flex justify-center space-x-4">
//                     <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700 transition-colors" />
//                     <FaTrashAlt
//                       onClick={() => handleDeleteUser(user._id)}
//                       className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;






// import React, { useEffect, useState } from 'react';
// import { getAllCampaigns, deleteCampaign, getAllUsers, deleteUser, approveCampaign, rejectCampaign, changeCampaignStatus } from '../services/adminService';
// import { FaEdit, FaTrashAlt, FaCheckCircle, FaTimesCircle, FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
// import { Oval } from 'react-loader-spinner';

// const AdminDashboard = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loadingCampaigns, setLoadingCampaigns] = useState(true);
//   const [loadingUsers, setLoadingUsers] = useState(true);

//   useEffect(() => {
//     // Fetch all campaigns and users
//     const fetchCampaigns = async () => {
//       try {
//         const data = await getAllCampaigns();
//         setCampaigns(data);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       } finally {
//         setLoadingCampaigns(false);
//       }
//     };

//     const fetchUsers = async () => {
//       try {
//         const data = await getAllUsers();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       } finally {
//         setLoadingUsers(false);
//       }
//     };

//     fetchCampaigns();
//     fetchUsers();
//   }, []);

//   const handleDeleteCampaign = async (id) => {
//     alert(`deleting campaign with id ${id}`);
//     try {
//       await deleteCampaign(id);
//       setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await deleteUser(id);
//       setUsers(users.filter((user) => user._id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleApproveCampaign = async (id) => {
//     alert(`approving id ${id}`)
//     try {
//       await approveCampaign(id);
//       setCampaigns(campaigns.map((campaign) => (campaign._id === id ? { ...campaign, status: 'approved' } : campaign)));
//     } catch (error) {
//       console.error('Error approving campaign:', error);
//     }
//   };

//   const handleRejectCampaign = async (id) => {
//     try {
//       await rejectCampaign(id);
//       setCampaigns(campaigns.map((campaign) => (campaign._id === id ? { ...campaign, status: 'rejected' } : campaign)));
//     } catch (error) {
//       console.error('Error rejecting campaign:', error);
//     }
//   };

//   const handleChangeStatus = async (id, status) => {
//     try {
//       await changeCampaignStatus(id, status);
//       setCampaigns(campaigns.map((campaign) => (campaign._id === id ? { ...campaign, status } : campaign)));
//     } catch (error) {
//       console.error('Error changing campaign status:', error);
//     }
//   };

//   if (loadingCampaigns || loadingUsers) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Oval color="#00BFFF" height={80} width={80} />
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="hero-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-12 rounded-lg shadow-lg mb-8 text-center">
//         <h2 className="text-4xl font-bold">Welcome to the Admin Dashboard</h2>
//         <p className="text-xl mt-4">Manage campaigns and users effortlessly. Here's a quick overview of the system.</p>
//       </div>

//       {/* Campaigns Table */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">Campaigns</h2>
//       <div className="overflow-x-auto mb-6">
//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">Campaign Name</th>
//               <th className="py-2 px-4 border w-1/4">Status</th>
//               <th className="py-2 px-4 border w-1/4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {campaigns.map((campaign) => (
//               <tr key={campaign._id}>
//                 <td className="py-2 px-4 border">{campaign.title}</td>
//                 <td className="py-2 px-4 border text-center">
//                   {campaign.status === 'active' ? (
//                     <FaCheckCircle className="text-green-500 cursor-pointer" title='active' />
//                   ) : campaign.status === 'approved' ? (
//                     <FaRegCheckCircle className="text-green-500 cursor-pointer" title='approved'/>
//                   ) : campaign.status === 'pending' ? (
//                     <FaRegTimesCircle className="text-red-500 cursor-pointer" title='pending'/>
//                   ) : (
//                     <FaTimesCircle className="text-red-500 cursor-pointer" title='rejected' />
//                   )}
//                 </td>
//                 <td className="py-2 px-4 border text-center">
//                   <div className="flex justify-center space-x-4">
//                     <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700 transition-colors" />
//                     {campaign.status === 'approved' || campaign.status === 'rejected' ? (
//                       <FaTimesCircle
//                         onClick={() => handleDeleteCampaign(campaign._id)}
//                         className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"

//                       />
//                     ) : (
//                       <>
//                         <FaCheckCircle
//                           onClick={() => handleApproveCampaign(campaign._id)}
//                           className="text-green-500 cursor-pointer hover:text-green-700 transition-colors"
//                           title='approve'
//                         />
//                         <FaTimesCircle
//                           onClick={() => handleRejectCampaign(campaign._id)}
//                           className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
//                           title='reject'
//                         />
//                       </>
//                     )}
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Users Table */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">Users</h2>
//       <div className="overflow-x-auto mb-6">
//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">User Name</th>
//               <th className="py-2 px-4 border">Email</th>
//               <th className="py-2 px-4 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td className="py-2 px-4 border">{user.name}</td>
//                 <td className="py-2 px-4 border">{user.email}</td>
//                 <td className="py-2 px-4 border text-center">
//                   <FaTrashAlt
//                     onClick={() => handleDeleteUser(user._id)}
//                     className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;






















































// import React, { useEffect, useState } from 'react';
// import { getAllCampaigns, deleteCampaign, getAllUsers, deleteUser } from '../services/adminService';
// import { FaEdit, FaTrashAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import { Oval } from 'react-loader-spinner';
// const AdminDashboard = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loadingCampaigns, setLoadingCampaigns] = useState(true);
//   const [loadingUsers, setLoadingUsers] = useState(true);

//   useEffect(() => {
//     // Fetch all campaigns and users
//     const fetchCampaigns = async () => {
//       try {
//         const data = await getAllCampaigns();
//         setCampaigns(data);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       } finally {
//         setLoadingCampaigns(false);
//       }
//     };

//     const fetchUsers = async () => {
//       try {
//         const data = await getAllUsers();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       } finally {
//         setLoadingUsers(false);
//       }
//     };

//     fetchCampaigns();
//     fetchUsers();
//   }, []);

//   const handleDeleteCampaign = async (id) => {
//     alert(`deleting campaign with id ${id}`)
//     try {
//       await deleteCampaign(id);
//       setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await deleteUser(id);
//       setUsers(users.filter((user) => user._id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleChangeStatus = async (id, status) => {
//     // Update campaign status (active/inactive)
//     try {
//       // You need to implement the logic for status change on the backend
//       console.log(`Changing status of campaign ${id} to ${status}`);
//     } catch (error) {
//       console.error('Error changing campaign status:', error);
//     }
//   };

  

//   if (loadingCampaigns || loadingUsers) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Oval color="#00BFFF" height={80} width={80} />
//       </div>
//     );
//   }


//   return (
//     <div className="container mx-auto p-6">
//       {/* Hero Section */}
//       <div className="hero-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-12 rounded-lg shadow-lg mb-8 text-center">
//         <h2 className="text-4xl font-bold">Welcome to the Admin Dashboard</h2>
//         <p className="text-xl mt-4">Manage campaigns and users effortlessly. Here's a quick overview of the system.</p>
//       </div>

      

//       {/* Campaigns Table */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">Campaigns</h2>
//       <div className="overflow-x-auto mb-6">
//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">Campaign Name</th>
//               <th className="py-2 px-4 border w-1/4">Status</th>
//               <th className="py-2 px-4 border w-1/4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {campaigns.map((campaign) => (
//               <tr key={campaign._id}>
//                 <td className="py-2 px-4 border">{campaign.title}</td>
//                 <td className="py-2 px-4 border text-center">
//                   {campaign.status === 'active' ? (
//                     <FaCheckCircle className="text-green-500 cursor-pointer" />
//                   ) : (
//                     <FaTimesCircle className="text-red-500 cursor-pointer" />
//                   )}
//                 </td>
//                 <td className="py-2 px-4 border text-center">
//                   <div className="flex justify-center space-x-4">
//                     <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700 transition-colors" />
//                     <FaTrashAlt
//                       onClick={() => handleDeleteCampaign(campaign._id)}
//                       className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Users Table */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">Users</h2>
//       <div className="overflow-x-auto mb-6">
//         <table className="min-w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border">User Name</th>
//               <th className="py-2 px-4 border">Email</th>
//               <th className="py-2 px-4 border w-1/4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td className="py-2 px-4 border">{user.name}</td>
//                 <td className="py-2 px-4 border">{user.email}</td>
//                 <td className="py-2 px-4 border text-center">
//                   <div className="flex justify-center space-x-4">
//                     <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700 transition-colors" />
//                     <FaTrashAlt
//                       onClick={() => handleDeleteUser(user._id)}
//                       className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
//                     />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

















// import React, { useEffect, useState } from 'react';
// import { getAllCampaigns, deleteCampaign, getAllUsers, deleteUser } from '../services/adminService';
// import { FaTrashAlt, FaTimes } from 'react-icons/fa';
// import { Oval } from 'react-loader-spinner';

// const AdminDashboard = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [filteredCampaigns, setFilteredCampaigns] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loadingCampaigns, setLoadingCampaigns] = useState(true);
//   const [loadingUsers, setLoadingUsers] = useState(true);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [filterStatus, setFilterStatus] = useState('All');

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const data = await getAllCampaigns();
//         setCampaigns(data);
//         setFilteredCampaigns(data);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       } finally {
//         setLoadingCampaigns(false);
//       }
//     };

//     const fetchUsers = async () => {
//       try {
//         const data = await getAllUsers();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       } finally {
//         setLoadingUsers(false);
//       }
//     };

//     fetchCampaigns();
//     fetchUsers();
//   }, []);

//   const handleDeleteCampaign = async (id) => {
//     try {
//       await deleteCampaign(id);
//       setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
//       setFilteredCampaigns(filteredCampaigns.filter((campaign) => campaign._id !== id));
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await deleteUser(id);
//       setUsers(users.filter((user) => user._id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const closeModal = () => {
//     setSelectedCampaign(null);
//     setSelectedUser(null);
//   };

//   const filterCampaigns = (status) => {
//     setFilterStatus(status);
//     if (status === 'All') {
//       setFilteredCampaigns(campaigns);
//     } else {
//       setFilteredCampaigns(campaigns.filter(campaign => campaign.status === status.toLowerCase()));
//     }
//   };

//   if (loadingCampaigns || loadingUsers) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Oval color="#00BFFF" height={80} width={80} />
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6">
//       {/* Hero Section */}
//       <div className="hero-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-12 rounded-lg shadow-lg mb-8 text-center">
//         <h2 className="text-4xl font-bold">Welcome to the Admin Dashboard</h2>
//         <p className="text-xl mt-4">Manage campaigns and users effortlessly.</p>
//       </div>

//       {/* Filter Options */}
//       <div className="mb-6 flex justify-between items-center">
//         <h2 className="text-3xl font-bold text-gray-800">Campaigns</h2>
//         <div className="space-x-4">
//           {['All', 'Active', 'Pending'].map((status) => (
//             <button
//               key={status}
//               onClick={() => filterCampaigns(status)}
//               className={`px-4 py-2 rounded-full shadow ${
//                 filterStatus === status ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
//               } hover:bg-blue-500 hover:text-white transition`}
//             >
//               {status}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Campaigns List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {filteredCampaigns.map((campaign) => (
//           <div
//             key={campaign._id}
//             className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
//             onClick={() => setSelectedCampaign(campaign)}
//           >
//             <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
//             <span
//               className={`px-2 pb-0.5 font-thin text-xs  rounded-full text-white shadow ${
//                 campaign.status === 'active' ? 'bg-green-500' : 'bg-red-500'
//               }`}
//             >
//               {campaign.status === 'active' ? 'Active' : 'Pending'}
//             </span>
//             <div className="flex justify-end mt-4">
//               <FaTrashAlt
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleDeleteCampaign(campaign._id);
//                 }}
//                 className="text-red-500 cursor-pointer hover:text-red-700"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Users List */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">Users</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {users.map((user) => (
//           <div
//             key={user._id}
//             className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
//             onClick={() => setSelectedUser(user)}
//           >
//             <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
//             <p className="text-gray-600">Email: {user.email}</p>
//             <div className="flex justify-end mt-4">
//               <FaTrashAlt
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleDeleteUser(user._id);
//                 }}
//                 className="text-red-500 cursor-pointer hover:text-red-700"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Campaign/User Details */}
//       {(selectedCampaign || selectedUser) && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-2xl font-semibold">
//                 {selectedCampaign ? 'Campaign Details' : 'User Details'}
//               </h3>
//               <FaTimes className="text-gray-600 cursor-pointer" onClick={closeModal} />
//             </div>
//             {selectedCampaign && (
//               <div>
//                 <p className="text-gray-700 mb-2">Title: {selectedCampaign.title}</p>
//                 <p className="text-gray-700 mb-2">
//                   Status: <span className={`px-2 pb-0.5 font-thin text-xs rounded-full shadow text-white ${selectedCampaign.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}>
//                     {selectedCampaign.status === 'active' ? 'Active' : 'Pending'}
//                   </span>
//                 </p>
//                 <p className="text-gray-700">Description: {selectedCampaign.description}</p>
//               </div>
//             )}
//             {selectedUser && (
//               <div>
//                 <p className="text-gray-700 mb-2">Name: {selectedUser.name}</p>
//                 <p className="text-gray-700 mb-2">Email: {selectedUser.email}</p>
//                 <p className="text-gray-700">Role: {selectedUser.role}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;








// import React, { useEffect, useState } from 'react';
// import { getAllCampaigns, deleteCampaign, getAllUsers, deleteUser, updateCampaignStatus } from '../services/adminService';
// import { FaTrashAlt, FaTimes } from 'react-icons/fa';
// import { Oval } from 'react-loader-spinner';

// const AdminDashboard = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [filteredCampaigns, setFilteredCampaigns] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loadingCampaigns, setLoadingCampaigns] = useState(true);
//   const [loadingUsers, setLoadingUsers] = useState(true);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [filterStatus, setFilterStatus] = useState('All');

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const data = await getAllCampaigns();
//         setCampaigns(data);
//         setFilteredCampaigns(data);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       } finally {
//         setLoadingCampaigns(false);
//       }
//     };

//     const fetchUsers = async () => {
//       try {
//         const data = await getAllUsers();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       } finally {
//         setLoadingUsers(false);
//       }
//     };

//     fetchCampaigns();
//     fetchUsers();
//   }, []);

//   const handleDeleteCampaign = async (id) => {
//     try {
//       await deleteCampaign(id);
//       setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
//       setFilteredCampaigns(filteredCampaigns.filter((campaign) => campaign._id !== id));
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await deleteUser(id);
//       setUsers(users.filter((user) => user._id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleUpdateCampaignStatus = async (id, newStatus) => {
//     try {
//       await updateCampaignStatus(id, newStatus); // Assuming this API is created
//       setCampaigns(campaigns.map(campaign => 
//         campaign._id === id ? { ...campaign, status: newStatus } : campaign
//       ));
//       setFilteredCampaigns(filteredCampaigns.map(campaign => 
//         campaign._id === id ? { ...campaign, status: newStatus } : campaign
//       ));
//     } catch (error) {
//       console.error('Error updating campaign status:', error);
//     }
//   };

//   const closeModal = () => {
//     setSelectedCampaign(null);
//     setSelectedUser(null);
//   };

//   const filterCampaigns = (status) => {
//     setFilterStatus(status);
//     if (status === 'All') {
//       setFilteredCampaigns(campaigns);
//     } else {
//       setFilteredCampaigns(campaigns.filter(campaign => campaign.status === status.toLowerCase()));
//     }
//   };

//   if (loadingCampaigns || loadingUsers) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Oval color="#00BFFF" height={80} width={80} />
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6">
//       {/* Hero Section */}
//       <div className="hero-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-12 rounded-lg shadow-lg mb-8 text-center">
//         <h2 className="text-4xl font-bold">Welcome to the Admin Dashboard</h2>
//         <p className="text-xl mt-4">Manage campaigns and users effortlessly.</p>
//       </div>

//       {/* Filter Options */}
//       <div className="mb-6 flex justify-between items-center">
//         <h2 className="text-3xl font-bold text-gray-800">Campaigns</h2>
//         <div className="space-x-4">
//           {['All', 'Active', 'Pending'].map((status) => (
//             <button
//               key={status}
//               onClick={() => filterCampaigns(status)}
//               className={`px-4 py-2 rounded-full shadow ${filterStatus === status ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-500 hover:text-white transition`}
//             >
//               {status}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Campaigns List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {filteredCampaigns.map((campaign) => (
//           <div
//             key={campaign._id}
//             className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
//             onClick={() => setSelectedCampaign(campaign)}
//           >
//             <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
//             <span
//               className={`px-2 pb-0.5 font-thin text-xs rounded-full text-white shadow ${campaign.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}
//             >
//               {campaign.status === 'active' ? 'Active' : 'Pending'}
//             </span>
//             <div className="flex justify-end mt-4">
//               <FaTrashAlt
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleDeleteCampaign(campaign._id);
//                 }}
//                 className="text-red-500 cursor-pointer hover:text-red-700"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Users List */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">Users</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {users.map((user) => (
//           <div
//             key={user._id}
//             className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
//             onClick={() => setSelectedUser(user)}
//           >
//             <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
//             <p className="text-gray-600">Email: {user.email}</p>
//             <p className="text-gray-600">Role: {user.role}</p>
//             <div className="flex justify-end mt-4">
//               <FaTrashAlt
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleDeleteUser(user._id);
//                 }}
//                 className="text-red-500 cursor-pointer hover:text-red-700"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Campaign/User Details */}
//       {(selectedCampaign || selectedUser) && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-2xl font-semibold">
//                 {selectedCampaign ? 'Campaign Details' : 'User Details'}
//               </h3>
//               <FaTimes className="text-gray-600 cursor-pointer" onClick={closeModal} />
//             </div>
//             {selectedCampaign && (
//               <div>
//                 <p className="text-gray-700 mb-2">Title: {selectedCampaign.title}</p>
//                 <div className="mb-4">
//                   <label htmlFor="status" className="text-gray-700">Change Status:</label>
//                   <select
//                     id="status"
//                     value={selectedCampaign.status}
//                     onChange={(e) => handleUpdateCampaignStatus(selectedCampaign._id, e.target.value)}
//                     className="block w-full p-2 mt-2 border rounded-md"
//                   >
//                     <option value="active">Active</option>
//                     <option value="pending">Pending</option>
//                   </select>
//                 </div>
//                 <p className="text-gray-700">Description: {selectedCampaign.description}</p>
//               </div>
//             )}
//             {selectedUser && (
//               <div>
//                 <p className="text-gray-700 mb-2">Name: {selectedUser.name}</p>
//                 <p className="text-gray-700 mb-2">Email: {selectedUser.email}</p>
//                 <p className="text-gray-700">Role: {selectedUser.role}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;






// import React, { useEffect, useState } from 'react';
// import { getAllCampaigns, deleteCampaign, updateCampaignStatus, getAllUsers, deleteUser } from '../services/adminService';
// import { FaTrashAlt, FaTimes } from 'react-icons/fa';
// import { Oval } from 'react-loader-spinner';

// const AdminDashboard = () => {
//   const [campaigns, setCampaigns] = useState([]);
//   const [filteredCampaigns, setFilteredCampaigns] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loadingCampaigns, setLoadingCampaigns] = useState(true);
//   const [loadingUsers, setLoadingUsers] = useState(true);
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [filterStatus, setFilterStatus] = useState('All');

//   useEffect(() => {
//     const fetchCampaigns = async () => {
//       try {
//         const data = await getAllCampaigns();
//         setCampaigns(data);
//         setFilteredCampaigns(data);
//       } catch (error) {
//         console.error('Error fetching campaigns:', error);
//       } finally {
//         setLoadingCampaigns(false);
//       }
//     };

//     const fetchUsers = async () => {
//       try {
//         const data = await getAllUsers();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       } finally {
//         setLoadingUsers(false);
//       }
//     };

//     fetchCampaigns();
//     fetchUsers();
//   }, []);

//   const handleDeleteCampaign = async (id) => {
//     try {
//       await deleteCampaign(id);
//       setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
//       setFilteredCampaigns(filteredCampaigns.filter((campaign) => campaign._id !== id));
//     } catch (error) {
//       console.error('Error deleting campaign:', error);
//     }
//   };

//   const handleDeleteUser = async (id) => {
//     try {
//       await deleteUser(id);
//       setUsers(users.filter((user) => user._id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   const handleChangeStatus = async (campaignId, newStatus) => {
//     try {
//       await updateCampaignStatus(campaignId, newStatus);
//       // Update the status locally after the API call
//       setCampaigns(campaigns.map((campaign) =>
//         campaign._id === campaignId ? { ...campaign, status: newStatus } : campaign
//       ));
//       // Re-filter campaigns if needed
//       filterCampaigns(filterStatus);
//     } catch (error) {
//       console.error('Error changing campaign status:', error);
//     }
//   };

//   const closeModal = () => {
//     setSelectedCampaign(null);
//     setSelectedUser(null);
//   };

//   const filterCampaigns = (status) => {
//     setFilterStatus(status);
//     if (status === 'All') {
//       setFilteredCampaigns(campaigns);
//     } else {
//       setFilteredCampaigns(campaigns.filter(campaign => campaign.status === status.toLowerCase()));
//     }
//   };

//   if (loadingCampaigns || loadingUsers) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Oval color="#00BFFF" height={80} width={80} />
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6">
//       {/* Hero Section */}
//       <div className="hero-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-12 rounded-lg shadow-lg mb-8 text-center">
//         <h2 className="text-4xl font-bold">Welcome to the Admin Dashboard</h2>
//         <p className="text-xl mt-4">Manage campaigns and users effortlessly.</p>
//       </div>

//       {/* Filter Options */}
//       <div className="mb-6 flex justify-between items-center">
//         <h2 className="text-3xl font-bold text-gray-800">Campaigns</h2>
//         <div className="space-x-4">
//           {['All', 'Active', 'Pending'].map((status) => (
//             <button
//               key={status}
//               onClick={() => filterCampaigns(status)}
//               className={`px-4 py-2 rounded-full shadow ${
//                 filterStatus === status ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
//               } hover:bg-blue-500 hover:text-white transition`}
//             >
//               {status}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Campaigns List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {filteredCampaigns.map((campaign) => (
//           <div
//             key={campaign._id}
//             className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
//             onClick={() => setSelectedCampaign(campaign)}
//           >
//             <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
//             <div className="flex items-center mb-4">
//               <span
//                 className={`px-2 pb-0.5 font-thin text-xs rounded-full text-white shadow ${
//                   campaign.status === 'active' ? 'bg-green-500' : 'bg-red-500'
//                 }`}
//               >
//                 {campaign.status === 'active' ? 'Active' : 'Pending'}
//               </span>
//               {/* Add a button to toggle the status */}
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   const newStatus = campaign.status === 'active' ? 'pending' : 'active';
//                   handleChangeStatus(campaign._id, newStatus);
//                 }}
//                 className="ml-4 text-blue-500 hover:text-blue-700"
//               >
//                 Toggle Status
//               </button>
//             </div>
//             <div className="flex justify-end mt-4">
//               <FaTrashAlt
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleDeleteCampaign(campaign._id);
//                 }}
//                 className="text-red-500 cursor-pointer hover:text-red-700"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Users List */}
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">Users</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {users.map((user) => (
//           <div
//             key={user._id}
//             className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
//             onClick={() => setSelectedUser(user)}
//           >
//             <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
//             <p className="text-gray-600">Email: {user.email}</p>
//             <div className="flex justify-end mt-4">
//               <FaTrashAlt
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleDeleteUser(user._id);
//                 }}
//                 className="text-red-500 cursor-pointer hover:text-red-700"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Campaign/User Details */}
//       {(selectedCampaign || selectedUser) && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-2xl font-semibold">
//                 {selectedCampaign ? 'Campaign Details' : 'User Details'}
//               </h3>
//               <FaTimes className="text-gray-600 cursor-pointer" onClick={closeModal} />
//             </div>
//             {selectedCampaign && (
//               <div>
//                 <p className="text-gray-700 mb-2">Title: {selectedCampaign.title}</p>
//                 <p className="text-gray-700 mb-2">
//                   Status: <span className={`px-2 pb-0.5 font-thin text-xs rounded-full ${selectedCampaign.status === 'active' ? 'bg-green-500' : 'bg-red-500'} text-white`}>{selectedCampaign.status === 'active' ? 'Active' : 'Pending'}</span>
//                 </p>
//                 <p className="text-gray-700 mb-2">Description: {selectedCampaign.description}</p>
//               </div>
//             )}
//             {selectedUser && (
//               <div>
//                 <p className="text-gray-700 mb-2">Name: {selectedUser.name}</p>
//                 <p className="text-gray-700 mb-2">Email: {selectedUser.email}</p>
//                 <p className="text-gray-700 mb-2">Role: {selectedUser.role}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;










import React, { useEffect, useState } from 'react';
import { getAllCampaigns, deleteCampaign, updateCampaignStatus, getAllUsers, deleteUser } from '../services/adminService';
import { FaTrashAlt, FaTimes } from 'react-icons/fa';
import { Oval } from 'react-loader-spinner';

const AdminDashboard = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loadingCampaigns, setLoadingCampaigns] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterRole, setFilterRole] = useState('All');

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getAllCampaigns();
        setCampaigns(data);
        setFilteredCampaigns(data);  // Set initial filtered campaigns to all campaigns
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      } finally {
        setLoadingCampaigns(false);
      }
    };

    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
        setFilteredUsers(data);  // Set initial filtered users to all users
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchCampaigns();
    fetchUsers();
  }, []);

  const handleDeleteCampaign = async (id) => {
    try {
      await deleteCampaign(id);
      setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
      setFilteredCampaigns(filteredCampaigns.filter((campaign) => campaign._id !== id));
    } catch (error) {
      console.error('Error deleting campaign:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user._id !== id));
      setFilteredUsers(filteredUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleChangeStatus = async (campaignId, newStatus) => {
    try {
      await updateCampaignStatus(campaignId, newStatus);
      setCampaigns(campaigns.map((campaign) =>
        campaign._id === campaignId ? { ...campaign, status: newStatus } : campaign
      ));
      filterCampaigns(filterStatus);
    } catch (error) {
      console.error('Error changing campaign status:', error);
    }
  };

  const closeModal = () => {
    setSelectedCampaign(null);
    setSelectedUser(null);
  };

  // Filter campaigns based on status
  const filterCampaigns = (status) => {
    setFilterStatus(status);
    if (status === 'All') {
      setFilteredCampaigns(campaigns);
    } else {
      setFilteredCampaigns(campaigns.filter(campaign => campaign.status === status.toLowerCase()));
    }
  };

  // Filter users based on role
  const filterUsers = (role) => {
    setFilterRole(role);
    if (role === 'All') {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter(user => user.role === role));
    }
  };

  if (loadingCampaigns || loadingUsers) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Oval color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="hero-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white p-12 rounded-lg shadow-lg mb-8 text-center">
        <h2 className="text-4xl font-bold">Welcome to the Admin Dashboard</h2>
        <p className="text-xl mt-4">Manage campaigns and users effortlessly.</p>
      </div>

      {/* Campaigns Section */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Campaigns</h2>
        {/* Filter options for Campaigns */}
        <div className="space-x-4">
          {['All', 'Active', 'Pending'].map((status) => (
            <button
              key={status}
              onClick={() => filterCampaigns(status)}
              className={`px-4 py-2 rounded-full shadow ${filterStatus === status ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-500 hover:text-white transition`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Campaigns List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredCampaigns.map((campaign) => (
          <div
            key={campaign._id}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
            onClick={() => setSelectedCampaign(campaign)}
          >
            <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
            <div className="flex items-center mb-4">
              <span
                className={`px-2 pb-0.5 font-thin text-xs rounded-full text-white shadow ${campaign.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}
              >
                {campaign.status === 'active' ? 'Active' : 'Pending'}
              </span>
              {/* Add a button to toggle the status */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const newStatus = campaign.status === 'active' ? 'pending' : 'active';
                  handleChangeStatus(campaign._id, newStatus);
                }}
                className="ml-4 text-blue-500 hover:text-blue-700"
                title='double click to toggle'
              >
                Toggle Status
              </button>
            </div>
            <div className="flex justify-end mt-4">
              <FaTrashAlt
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteCampaign(campaign._id);
                }}
                className="text-red-500 cursor-pointer hover:text-red-700"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Users Section */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Users</h2>
        {/* Filter options for Users */}
        <div className="space-x-4">
          {['All', 'student', 'donor', 'admin'].map((role) => (
            <button
              key={role}
              onClick={() => filterUsers(role)}
              className={`px-4 py-2 rounded-full shadow ${filterRole === role ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-500 hover:text-white transition`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Users List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredUsers.map((user) => (
          <div
            key={user._id}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
            onClick={() => setSelectedUser(user)}
          >
            <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
            <p className="text-gray-600">Email: {user.email}</p>
            <div className="flex justify-end mt-4">
              <FaTrashAlt
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteUser(user._id);
                }}
                className="text-red-500 cursor-pointer hover:text-red-700"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Campaign/User Details */}
      {(selectedCampaign || selectedUser) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                {selectedCampaign ? 'Campaign Details' : 'User Details'}
              </h2>
              <FaTimes onClick={closeModal} className="text-gray-600 cursor-pointer" />
            </div>
            {selectedCampaign && (
              <div>
                <p><strong>Title:</strong> {selectedCampaign.title}</p>
                <p><strong>Description:</strong> {selectedCampaign.description}</p>
                <p><strong>Goal:</strong> {selectedCampaign.goal}</p>
                <p><strong>Status:</strong> {selectedCampaign.status}</p>
              </div>
            )}
            {selectedUser && (
              <div>
                <p><strong>Name:</strong> {selectedUser.name}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Role:</strong> {selectedUser.role}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
