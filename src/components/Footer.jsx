// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-4 mt-auto">
//       <div className="container mx-auto text-center">
//         <p>&copy; {new Date().getFullYear()} Campus Donation Platform. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Campus Donation Platform. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebookF size={24} />
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <FaTwitter size={24} />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700"
          >
            <FaLinkedinIn size={24} />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
