// import React from 'react';
// import { useAuth } from '../context/AuthContext';

// const Profile = () => {
//   const { user } = useAuth();  // Access the user data from context

//   if (!user) {
//     return <p>Loading...</p>;  // Optionally, show a loading message or redirect if no user is found
//   }

//   return (
//     <div className="mt-16 max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-semibold text-center">User Profile</h1>
//       <div className="mt-6">
//         <div className="flex items-center space-x-4">
//           <h2 className="text-xl font-medium">Name:</h2>
//           <p>{user.name}</p>
//         </div>
//         <div className="flex items-center space-x-4 mt-4">
//           <h2 className="text-xl font-medium">Email:</h2>
//           <p>{user.email}</p>
//         </div>
//         <div className="flex items-center space-x-4 mt-4">
//           <h2 className="text-xl font-medium">Role:</h2>
//           <p>{user.role}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;




// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import profileBanner from '../assets/profileBanner.jpg'; // Assuming you have a banner image in assets

// const Profile = () => {
//   const { user } = useAuth();

//   if (!user) {
//     return <p className="text-center text-gray-500">Loading...</p>;
//   }

//   return (
//     <div className="mt-16 max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//       {/* Banner Section */}
//       <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
//         <img src={profileBanner} alt="Profile Banner" className="object-cover w-full h-full opacity-50" />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-3xl md:text-4xl font-bold text-white">User Profile</h1>
//         </div>
//       </div>

//       {/* User Details Section */}
//       <div className="p-6">
//         <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-sm">
//           <h2 className="text-xl font-medium text-gray-700">Name:</h2>
//           <p className="text-gray-800">{user.name}</p>
//         </div>
        
//         <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-sm">
//           <h2 className="text-xl font-medium text-gray-700">Email:</h2>
//           <p className="text-gray-800">{user.email}</p>
//         </div>
        
//         <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
//           <h2 className="text-xl font-medium text-gray-700">Role:</h2>
//           <p className="text-gray-800">{user.role}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();  // Access the user data from context

  if (!user) {
    return <p>Loading...</p>;  // Optionally, show a loading message or redirect if no user is found
  }

  return (
    <div className="bg-gradient-to-r from-teal-400 to-teal-600 min-h-screen flex items-center justify-center py-8">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6 sm:p-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-teal-800">User Profile</h1>
          <p className="mt-2 text-gray-500">Manage your personal information and settings</p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-6">
          {/* Profile Picture Placeholder */}
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-white text-3xl">
            <span>{user.name.charAt(0)}</span> {/* Initial letter of the name */}
          </div>

          <div className="w-full space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-medium">Name:</h2>
              <p className="text-gray-700">{user.name}</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-medium">Email:</h2>
              <p className="text-gray-700">{user.email}</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-lg font-medium">Role:</h2>
              <p className="text-gray-700">{user.role}</p>
            </div>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 text-center">
          <button className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
