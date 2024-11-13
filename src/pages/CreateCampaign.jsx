// import React, { useState } from 'react';
// import { createCampaign } from '../services/campaignService';
// import { useNavigate } from 'react-router-dom';

// const CreateCampaign = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [goal, setGoal] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     const campaignData = {
//       title,
//       description,
//       goal: parseFloat(goal), // Ensure goal is a number
//     };

//     try {
//       await createCampaign(campaignData);
//       alert('Campaign created successfully!');
//       navigate('/campaigns'); // Redirect to the list of campaigns after creation
//     } catch (err) {
//       setError('Failed to create campaign. Please try again.');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Create a New Campaign</h1>
//       {error && <div className="mb-4 text-red-600">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <label className="block mb-2 text-sm font-bold text-gray-700">
//           Campaign Title:
//         </label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="mb-4 px-3 py-2 border rounded"
//           placeholder="Enter campaign title"
//           required
//         />

//         <label className="block mb-2 text-sm font-bold text-gray-700">
//           Description:
//         </label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="mb-4 px-3 py-2 border rounded"
//           placeholder="Enter campaign description"
//           required
//         ></textarea>

//         <label className="block mb-2 text-sm font-bold text-gray-700">
//           Goal Amount:
//         </label>
//         <input
//           type="number"
//           value={goal}
//           onChange={(e) => setGoal(e.target.value)}
//           className="mb-4 px-3 py-2 border rounded"
//           placeholder="Enter campaign goal amount"
//           required
//         />

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Create Campaign
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateCampaign;



// import React, { useState } from 'react';
// import { createCampaign } from '../services/campaignService';
// import { useNavigate } from 'react-router-dom';

// const CreateCampaign = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [goal, setGoal] = useState('');
//   const [endDate, setEndDate] = useState(''); // New state for end date
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     const campaignData = {
//       title,
//       description,
//       goalAmount: parseFloat(goal), // Ensure goal is a number
//       endDate, // Include endDate in the campaign data
//     };

//     try {
//       await createCampaign(campaignData);
//       alert('Campaign created successfully!');
//       navigate('/campaigns'); // Redirect to the list of campaigns after creation
//     } catch (err) {
//       setError('Failed to create campaign. Please try again.');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Create a New Campaign</h1>
//       {error && <div className="mb-4 text-red-600">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <label className="block mb-2 text-sm font-bold text-gray-700">
//           Campaign Title:
//         </label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="mb-4 px-3 py-2 border rounded"
//           placeholder="Enter campaign title"
//           required
//         />

//         <label className="block mb-2 text-sm font-bold text-gray-700">
//           Description:
//         </label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="mb-4 px-3 py-2 border rounded"
//           placeholder="Enter campaign description"
//           required
//         ></textarea>

//         <label className="block mb-2 text-sm font-bold text-gray-700">
//           Goal Amount:
//         </label>
//         <input
//           type="number"
//           value={goal}
//           onChange={(e) => setGoal(e.target.value)}
//           className="mb-4 px-3 py-2 border rounded"
//           placeholder="Enter campaign goal amount"
//           required
//         />

//         <label className="block mb-2 text-sm font-bold text-gray-700">
//           End Date:
//         </label>
//         <input
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           className="mb-4 px-3 py-2 border rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Create Campaign
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateCampaign;




  // import React, { useState } from 'react';
  // import { createCampaign } from '../services/campaignService';
  // import { useNavigate } from 'react-router-dom';

  // const CreateCampaign = () => {
  //   const [title, setTitle] = useState('');
  //   const [description, setDescription] = useState('');
  //   const [goal, setGoal] = useState('');
  //   const [endDate, setEndDate] = useState('');
  //   const [error, setError] = useState('');
  //   const navigate = useNavigate();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setError('');

  //     const campaignData = {
  //       title,
  //       description,
  //       goalAmount: parseFloat(goal),
  //       endDate,
  //     };

  //     try {
  //       await createCampaign(campaignData);
  //       alert('Campaign created successfully!');
  //       navigate('/campaigns');
  //     } catch (err) {
  //       setError('Failed to create campaign. Please try again.');
  //     }
  //   };

  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
  //         <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create a New Campaign</h1>
          
  //         {error && (
  //           <div className="mb-4 text-red-600 font-semibold text-center">
  //             {error}
  //           </div>
  //         )}
          
  //         <form onSubmit={handleSubmit}>
  //           <div className="mb-4">
  //             <label className="block mb-2 text-sm font-medium text-gray-700">Campaign Title:</label>
  //             <input
  //               type="text"
  //               value={title}
  //               onChange={(e) => setTitle(e.target.value)}
  //               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
  //               placeholder="Enter campaign title"
  //               required
  //             />
  //           </div>

  //           <div className="mb-4">
  //             <label className="block mb-2 text-sm font-medium text-gray-700">Description:</label>
  //             <textarea
  //               value={description}
  //               onChange={(e) => setDescription(e.target.value)}
  //               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
  //               placeholder="Enter campaign description"
  //               required
  //             ></textarea>
  //           </div>

  //           <div className="mb-4">
  //             <label className="block mb-2 text-sm font-medium text-gray-700">Goal Amount:</label>
  //             <input
  //               type="number"
  //               value={goal}
  //               onChange={(e) => setGoal(e.target.value)}
  //               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
  //               placeholder="Enter campaign goal amount"
  //               required
  //             />
  //           </div>

  //           <div className="mb-4">
  //             <label className="block mb-2 text-sm font-medium text-gray-700">End Date:</label>
  //             <input
  //               type="date"
  //               value={endDate}
  //               onChange={(e) => setEndDate(e.target.value)}
  //               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
  //               required
  //             />
  //           </div>

  //           <button
  //             type="submit"
  //             className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
  //           >
  //             Create Campaign
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // };

  // export default CreateCampaign;



//   import React, { useState } from 'react';
// import { createCampaign } from '../services/campaignService';
// import { useNavigate } from 'react-router-dom';

// const CreateCampaign = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [goal, setGoal] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     const campaignData = {
//       title,
//       description,
//       goalAmount: parseFloat(goal),
//       endDate,
//     };

//     try {
//       await createCampaign(campaignData);
//       alert('Campaign created successfully!');
//       navigate('/campaigns');
//     } catch (err) {
//       setError('Failed to create campaign. Please try again.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
//         <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create a New Campaign</h1>
        
//         {error && (
//           <div className="mb-4 text-red-600 font-semibold text-center">
//             {error}
//           </div>
//         )}
        
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2 text-sm font-medium text-gray-700">Campaign Title:</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               placeholder="Enter campaign title"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-2 text-sm font-medium text-gray-700">Description:</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               placeholder="Enter campaign description"
//               required
//             ></textarea>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-2 text-sm font-medium text-gray-700">Goal Amount:</label>
//             <input
//               type="number"
//               value={goal}
//               onChange={(e) => setGoal(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               placeholder="Enter campaign goal amount"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-2 text-sm font-medium text-gray-700">End Date:</label>
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
//           >
//             Create Campaign
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateCampaign;



import React, { useState } from 'react';
import { createCampaign } from '../services/campaignService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; // Import toast from react-hot-toast

const CreateCampaign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const campaignData = {
      title,
      description,
      goalAmount: parseFloat(goal),
      endDate,
    };

    // Use toast.promise to show loading, success, and error messages
    toast.promise(
      createCampaign(campaignData),
      {
        loading: 'Creating campaign...',
        success: 'Campaign created successfully!',
        error: 'Failed to create campaign. Please try again.',
      }
    ).then(() => {
      navigate('/campaigns'); // Navigate on success
    }).catch((err) => {
      setError('Failed to create campaign. Please try again.');
      console.error("Error during campaign creation:", err);
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Create a New Campaign</h1>
        
        {error && (
          <div className="mb-4 text-red-600 font-semibold text-center">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Campaign Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter campaign title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter campaign description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Goal Amount:</label>
            <input
              type="number"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter campaign goal amount"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Create Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
