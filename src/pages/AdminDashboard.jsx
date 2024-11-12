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











import React, { useEffect, useState } from 'react';
import { getAllCampaigns, deleteCampaign, getAllUsers, deleteUser } from '../services/adminService';
import { FaEdit, FaTrashAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Oval } from 'react-loader-spinner';
const AdminDashboard = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [users, setUsers] = useState([]);
  const [loadingCampaigns, setLoadingCampaigns] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    // Fetch all campaigns and users
    const fetchCampaigns = async () => {
      try {
        const data = await getAllCampaigns();
        setCampaigns(data);
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
    alert(`deleting campaign with id ${id}`)
    try {
      await deleteCampaign(id);
      setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
    } catch (error) {
      console.error('Error deleting campaign:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleChangeStatus = async (id, status) => {
    // Update campaign status (active/inactive)
    try {
      // You need to implement the logic for status change on the backend
      console.log(`Changing status of campaign ${id} to ${status}`);
    } catch (error) {
      console.error('Error changing campaign status:', error);
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
        <p className="text-xl mt-4">Manage campaigns and users effortlessly. Here's a quick overview of the system.</p>
      </div>

      

      {/* Campaigns Table */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Campaigns</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Campaign Name</th>
              <th className="py-2 px-4 border w-1/4">Status</th>
              <th className="py-2 px-4 border w-1/4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id}>
                <td className="py-2 px-4 border">{campaign.title}</td>
                <td className="py-2 px-4 border text-center">
                  {campaign.status === 'active' ? (
                    <FaCheckCircle className="text-green-500 cursor-pointer" />
                  ) : (
                    <FaTimesCircle className="text-red-500 cursor-pointer" />
                  )}
                </td>
                <td className="py-2 px-4 border text-center">
                  <div className="flex justify-center space-x-4">
                    <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700 transition-colors" />
                    <FaTrashAlt
                      onClick={() => handleDeleteCampaign(campaign._id)}
                      className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Users Table */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Users</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border">User Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border w-1/4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border text-center">
                  <div className="flex justify-center space-x-4">
                    <FaEdit className="text-blue-500 cursor-pointer hover:text-blue-700 transition-colors" />
                    <FaTrashAlt
                      onClick={() => handleDeleteUser(user._id)}
                      className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;




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
