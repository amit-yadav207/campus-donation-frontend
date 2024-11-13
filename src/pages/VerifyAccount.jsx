import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from "react-spinners"; // Importing the ClipLoader spinner
import { BASE_URL } from '../utils/constants';

const VerifyAccount = () => {
  const {verificationToken }= useParams();
  const token=verificationToken
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        setIsLoading(true);
        // const backendUrl =  'http://localhost:5000'; // Fallback for local testing
        const backendUrl=BASE_URL
        console.log("Verifying with URL:", `${backendUrl}/api/auth/verify/${token}`);
        
        const response = await axios.get(`${backendUrl}/api/auth/verify/${token}`);
        
        setMessage(response.data.message || 'Your account has been verified successfully!');
      } catch (error) {
        console.error("Verification error:", error); // Log the error for debugging
        setMessage('Verification failed. The link may have expired or is invalid.');
      } finally {
        setIsLoading(false);
      }
    };
  
    if (token) {
      console.log("Token found:", token);
      verifyAccount();
    } else {
      setMessage('Invalid or missing verification token.');
      setIsLoading(false);
    }
  }, [token]);
  
  
  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
         
          <p className="text-xl font-semibold mt-4">Processing your verification...</p>
           {/* React Spinner Component */}
           <ClipLoader
           color="#36d7b7" // Green color for the spinner
           loading={isLoading} // Set loading state
           size={50} // Size of the spinner
           className="mt-4 mx-auto" // Centering the spinner
         />
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <p className="text-xl font-semibold">{message}</p>
          <button onClick={() => navigate('/login')} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
            Go to Login
          </button>
        </div>
      )}
    </div>
  );
};

export default VerifyAccount;
