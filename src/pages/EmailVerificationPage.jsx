import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmailVerificationPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate an API call or some other method of checking email verification status
    setTimeout(() => {
      // Replace this with real verification logic, for example, check an API or token.
      const verificationStatus = localStorage.getItem("emailVerified"); // Example check (you can store this in localStorage/sessionStorage/cookie)
      
      if (verificationStatus === "true") {
        setIsVerified(true);
      } else {
        setIsVerified(false);
      }
      setLoading(false);
    }, 2000); // Simulating an API call delay
  }, []);

  useEffect(() => {
    if (isVerified) {
      navigate("/login"); // Redirect to login page once verified
    }
  }, [isVerified, navigate]);

  if (loading) {
    return <div>Loading...</div>; // You can add a loading spinner here
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center bg-white p-6 rounded-md shadow-lg">
        {!isVerified ? (
          <div>
            <h1 className="text-xl font-semibold mb-4">Please verify your email address</h1>
            <p className="text-gray-600">
              A verification link has been sent to your email. Please verify your email to continue.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              If you didn't receive the email, check your spam folder or{" "}
              <button
                onClick={() => alert("Resend verification email functionality")}
                className="text-blue-600"
              >
                Resend email
              </button>
            </p>
          </div>
        ) : (
          <div>
            <h1 className="text-xl font-semibold mb-4">Email Verified</h1>
            <p className="text-gray-600">You have successfully verified your email address.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailVerificationPage;
