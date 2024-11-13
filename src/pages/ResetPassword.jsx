// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { resetPassword } from '../services/authService';

// const ResetPassword = () => {
//     const { token } = useParams();
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(null);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null);
//         setSuccess(null); // Reset any previous success messages

//         if (password !== confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }

//         try {
//             await resetPassword(token, password );
//             setSuccess('Password reset successful! You can now login.');
//             // Redirect to login after a successful reset
//             setTimeout(() => navigate('/login'), 2000);
//         } catch (err) {
//             setError(err.response?.data?.message || 'Reset failed');
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
//                 <h2 className="text-xl font-bold mb-4">Reset Password</h2>
//                 {error && <div className="text-red-500 mb-4">{error}</div>}
//                 {success && <div className="text-green-500 mb-4">{success}</div>}
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                             New Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                             placeholder="Enter your new password"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                             Confirm Password
//                         </label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             required
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                             placeholder="Confirm your new password"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
//                     >
//                         Reset Password
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ResetPassword;



import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../services/authService';
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset any previous errors

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        toast.promise(
            resetPassword(token, password),
            {
                loading: 'Resetting password...',
                success: 'Password reset successful! Redirecting to login...',
                error: (err) => err.response?.data?.message || 'Password reset failed',
            }
        ).then(() => {
            // Redirect to login after a short delay
            setTimeout(() => navigate('/login'), 1000);
        }).catch(() => {}); // Handle toast.promise error state
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Reset Password</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Enter your new password"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            placeholder="Confirm your new password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
