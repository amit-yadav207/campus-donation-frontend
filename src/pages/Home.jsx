// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="container mx-auto p-4 text-center">
//       <h1 className="text-4xl font-bold mb-6">Welcome to the Campus Donation Platform</h1>
//       <p className="mb-6">Support your university’s causes by donating to ongoing campaigns.</p>
//       <Link to="/campaigns" className="btn-primary">
//         View Campaigns
//       </Link>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import CampaignCard from '../components/CampaignCard';

// const Home = ({ campaigns }) => {
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold text-center my-8">Featured Campaigns</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {campaigns.map(campaign => (
//           <CampaignCard key={campaign._id} campaign={campaign} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;






// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="font-sans text-gray-800">
//       {/* Hero Section */}
//       <header className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-center py-16">
//         <h1 className="text-4xl font-bold mb-4">Welcome to the Campus Donation Platform</h1>
//         <p className="text-xl mb-6">Empowering students, transforming lives, and making a difference.</p>
//         <Link
//           to="/campaigns"
//           className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
//         >
//           Explore Campaigns
//         </Link>
//       </header>

//       {/* Causes Section */}
//       <section className="py-16 px-6 text-center">
//         <h2 className="text-3xl font-semibold text-blue-500 mb-8">Our Causes</h2>
//         <div className="flex flex-wrap justify-center gap-8">
//           {['Education', 'Health', 'Environmental Sustainability', 'Festivals', 'Career Development and Internship Support', 'Disaster Relief'].map((cause, index) => (
//             <div
//               key={index}
//               className="bg-gray-100 p-6 w-80 h-72 rounded-lg shadow-lg hover:scale-105 transform transition"
//             >
//               <h3 className="text-green-500 text-xl font-semibold mb-4">{cause}</h3>
//               <p className="text-sm">
//                 Support various initiatives and campaigns within {cause.toLowerCase()} to make a lasting impact on our campus and beyond.
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Get Involved Section */}
//       <section className="bg-gray-50 py-16 px-6 text-center">
//         <h2 className="text-3xl font-semibold text-orange-600 mb-4">Get Involved</h2>
//         <p className="text-lg mb-6">Every contribution, big or small, makes a difference. Join us in supporting the next generation of change-makers!</p>
//         <Link
//           to="/payment"
//           className="bg-orange-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
//         >
//           Donate Now
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default Home;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   // Define icons based on each cause title
//   const causeIcons = {
//     Education: '🎓',
//     Health: '🏥',
//     'Environmental Sustainability': '🌍',
//     Festivals: '🎉',
//     'Career Development and Internship Support': '💼',
//     'Disaster Relief': '🚑',
//   };

//   // Function to truncate long descriptions
//   const truncateText = (text, maxLength) => {
//     return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
//   };

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Hero Section */}
//       <header className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-center py-16">
//         <h1 className="text-4xl font-bold mb-4">Welcome to the Campus Donation Platform</h1>
//         <p className="text-xl mb-6">Empowering students, transforming lives, and making a difference.</p>
//         <Link
//           to="/campaigns"
//           className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
//         >
//           Explore Campaigns
//         </Link>
//       </header>

//       {/* Causes Section */}
//       <section className="py-16 px-6 text-center">
//         <h2 className="text-3xl font-semibold text-blue-500 mb-8">Our Causes</h2>
//         <div className="flex flex-wrap justify-center gap-8">
//           {['Education', 'Health', 'Environmental Sustainability', 'Festivals', 'Career Development and Internship Support', 'Disaster Relief'].map((cause, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-green-100 to-white p-8 w-80 h-80 rounded-xl shadow-lg hover:scale-105 transform transition relative"
//             >
//               <div className="text-green-500 text-4xl mb-4">
//                 {causeIcons[cause] || '✨'}
//               </div>
//               <h3 className="text-green-600 text-2xl font-bold mb-4">{cause}</h3>
//               <p className="text-gray-700 text-sm mb-8">
//                 {truncateText(`Support various initiatives and campaigns within ${cause.toLowerCase()} to make a lasting impact on our campus and beyond.`, 80)}
//               </p>
//               <Link
//                 to={`/cause/${cause.toLowerCase().replace(/ /g, '-')}`}
//                 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition"
//               >
//                 Learn More
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Get Involved Section */}
//       <section className="bg-gray-50 py-16 px-6 text-center">
//         <h2 className="text-3xl font-semibold text-orange-600 mb-4">Get Involved</h2>
//         <p className="text-lg mb-6">Every contribution, big or small, makes a difference. Join us in supporting the next generation of change-makers!</p>
//         <Link
//           to="/payment"
//           className="bg-orange-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
//         >
//           Donate Now
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';
 
// const Home = () => {
//   // Define icons based on each cause title
//   const causeIcons = {
//     Education: '🎓',
//     Health: '🏥',
//     'Environmental Sustainability': '🌍',
//     Festivals: '🎉',
//     'Career Development and Internship Support': '💼',
//     'Disaster Relief': '🚑',
//   };

//   // Function to truncate long descriptions
//   const truncateText = (text, maxLength) => {
//     return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
//   };

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Hero Section */}
//       <header className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-center py-16">
//         <h1 className="text-4xl font-bold mb-4">Welcome to the Campus Donation Platform</h1>
//         <p className="text-xl mb-6">Empowering students, transforming lives, and making a difference.</p>
//         <Link
//           to="/campaigns"
//           className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
//         >
//           Explore Campaigns
//         </Link>
//       </header>

//       {/* Causes Section */}
//       <section className="py-16 px-6 text-center">
//         <h2 className="text-3xl font-semibold text-blue-500 mb-8">Our Causes</h2>
//         <div className="flex flex-wrap justify-center gap-8">
//           {['Education', 'Health', 'Environmental Sustainability', 'Festivals', 'Career Development and Internship Support', 'Disaster Relief'].map((cause, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-green-100 to-white p-8 w-80 h-80 rounded-xl shadow-lg hover:scale-105 transform transition relative"
//             >
//               <div className="text-green-500 text-4xl mb-4">
//                 {causeIcons[cause] || '✨'}
//               </div>
//               <h3 className="text-green-600 text-2xl font-bold mb-4">{cause}</h3>
//               <p className="text-gray-700 text-sm mb-8">
//                 {truncateText(`Support various initiatives and campaigns within ${cause.toLowerCase()} to make a lasting impact on our campus and beyond.`, 80)}
//               </p>
//               <Link
//                 to={`/cause/${cause.toLowerCase().replace(/ /g, '-')}`}
//                 className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition"
//               >
//                 Learn More
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Get Involved Section */}
//       <section className="bg-gradient-to-br from-blue-500 to-green-500   py-16 px-6 text-center text-white">
//         <h2 className="text-4xl font-semibold mb-4">Get Involved</h2>
//         <p className="text-lg max-w-2xl mx-auto mb-6">
//           Every contribution, big or small, makes a difference. Join us in supporting the next generation of change-makers!
//         </p>
//         <Link
//           to="/campaigns"
//           className="bg-white text-orange-600 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition shadow-md hover:shadow-lg"
//         >
//           Donate Now
//         </Link>
//       </section>
      
//     </div>
//   );
// };

// export default Home;













import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Define the truncateText function to limit text length
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  // Define icons based on each cause title
  const causeIcons = {
    Education: '🎓',
    Health: '🏥',
    'Environmental Sustainability': '🌍',
    Festivals: '🎉',
    'Career Development and Internship Support': '💼',
    'Disaster Relief': '🚑',
  };

  // Static data for each cause
  const causeDetails = {
    Education: {
      description: 'Empower the next generation through access to education and resources.',
      impact: 'Thousands of students benefit from scholarships, learning programs, and more.',
      icon: '🎓',
    },
    Health: {
      description: 'Improving healthcare access, awareness, and supporting medical research.',
      impact: 'Help fund medical treatments, healthcare education, and disease prevention programs.',
      icon: '🏥',
    },
    'Environmental Sustainability': {
      description: 'Tackling climate change and promoting eco-friendly initiatives.',
      impact: 'Contribute to planting trees, cleaning up oceans, and reducing carbon footprints.',
      icon: '🌍',
    },
    Festivals: {
      description: 'Celebrating cultural heritage and bringing communities together through festivals.',
      impact: 'Support local festivals, cultural events, and awareness programs.',
      icon: '🎉',
    },
    'Career Development and Internship Support': {
      description: 'Helping students grow professionally through internships and career services.',
      impact: 'Assist students with career counseling, job fairs, and paid internships.',
      icon: '💼',
    },
    'Disaster Relief': {
      description: 'Providing urgent aid in times of natural disasters and emergencies.',
      impact: 'Help fund relief efforts, rebuild communities, and support affected families.',
      icon: '🚑',
    },
  };

  // State to manage modal visibility and content
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Function to open modal and set dynamic content
  const openModal = (cause) => {
    setModalContent(causeDetails[cause]);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-500 to-green-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Campus Donation Platform</h1>
        <p className="text-xl mb-6">Empowering students, transforming lives, and making a difference.</p>
        <Link
          to="/campaigns"
          className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
        >
          Explore Campaigns
        </Link>
      </header>

      {/* Causes Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-500 mb-8">Our Causes</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {['Education', 'Health', 'Environmental Sustainability', 'Festivals', 'Career Development and Internship Support', 'Disaster Relief'].map((cause, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-100 to-white p-8 w-80 h-80 rounded-xl shadow-lg hover:scale-105 transform transition relative"
            >
              <div className="text-green-500 text-4xl mb-4">
                {causeIcons[cause] || '✨'}
              </div>
              <h3 className="text-green-600 text-2xl font-bold mb-4">{cause}</h3>
              <p className="text-gray-700 text-sm mb-8">
                {truncateText(`Support various initiatives and campaigns within ${cause.toLowerCase()} to make a lasting impact on our campus and beyond.`, 80)}
              </p>
              <button
                onClick={() => openModal(cause)}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="bg-gradient-to-br from-blue-500 to-green-500 py-16 px-6 text-center text-white">
        <h2 className="text-4xl font-semibold mb-4">Get Involved</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Every contribution, big or small, makes a difference. Join us in supporting the next generation of change-makers!
        </p>
        <Link
          to="/campaigns"
          className="bg-white text-orange-600 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition shadow-md hover:shadow-lg"
        >
          Donate Now
        </Link>
      </section>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-600 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-center mb-4">{modalContent.icon}  {modalContent.description}</h2>
            <p className="text-lg">{modalContent.description}</p>
            <p className="text-sm text-gray-600 mt-4">{modalContent.impact}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

