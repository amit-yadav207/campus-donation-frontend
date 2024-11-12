import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../services/authService';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await forgotPassword({ email });
      setMessage(response.message);
      setTimeout(() => navigate('/login'), 3000); // Redirect after 3 seconds
    } catch (err) {
      setError(err.response ? err.response.data.message : 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md mt-20">
      <h1 className="text-3xl font-bold mb-4 text-center">Forgot Password</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {message && <div className="text-green-600 mb-4">{message}</div>}
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
