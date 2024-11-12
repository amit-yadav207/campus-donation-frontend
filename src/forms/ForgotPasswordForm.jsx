// ForgotPasswordForm.jsx
import React, { useState } from 'react';

const ForgotPasswordForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email });
  };

  return (
    <div className='bg-green-500'>
    <form onSubmit={handleSubmit} className="p-4 border rounded ">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
    </form>
    </div>
  );
};

export default ForgotPasswordForm;
