// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { register } from '../services/authService';

// const Register = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('student'); // Default role
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null); // Reset any previous errors

//         try {
//             await register({ name, email, password, role });
//             // Redirect to verification page
//             navigate('/verify-email');
//         } catch (err) {
//             setError(err.response?.data?.message || 'Registration failed');
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
//                 <h2 className="text-xl font-bold mb-4">Register</h2>
//                 {error && <div className="text-red-500 mb-4">{error}</div>}
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             id="name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                             placeholder="Enter your name"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                             placeholder="Enter your email"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                             placeholder="Enter your password"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//                             Role
//                         </label>
//                         <select
//                             id="role"
//                             value={role}
//                             onChange={(e) => {
//                                 console.log(e.target.value); // Check the selected value
//                                 setRole(e.target.value)}}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//                         >
//                             <option value="student">Student</option>
//                             <option value="donor">Donor</option>
//                             <option value="admin">Admin</option>
//                         </select>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
//                     >
//                         Register
//                     </button>
//                 </form>
//                 <p className="mt-4 text-sm">
//                     Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Register;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { register } from '../services/authService';

// const Register = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('student'); // Default role
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null); // Reset any previous errors

//         try {
//             await register({ name, email, password, role });
//             // Redirect to verification page
//             navigate('/verify-email');
//         } catch (err) {
//             setError(err.response?.data?.message || 'Registration failed');
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Register</h2>
//                 {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             id="name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                             className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//                             placeholder="Enter your name"
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//                             placeholder="Enter your email"
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//                             placeholder="Enter your password"
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//                             Role
//                         </label>
//                         <select
//                             id="role"
//                             value={role}
//                             onChange={(e) => setRole(e.target.value)}
//                             className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//                         >
//                             <option value="student">Student</option>
//                             <option value="donor">Donor</option>
//                             <option value="admin">Admin</option>
//                         </select>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//                     >
//                         Register
//                     </button>
//                 </form>
//                 <p className="mt-4 text-sm text-center">
//                     Already have an account?{' '}
//                     <a href="/login" className="text-blue-500 hover:underline">
//                         Login
//                     </a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Register;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { register } from '../services/authService';

// const Register = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [role, setRole] = useState('student'); // Default role
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null); // Reset any previous errors

//         try {
//             await register({ name, email, password, role });
//             // Redirect to verification page
//             navigate('/verify-email');
//         } catch (err) {
//             setError(err.response?.data?.message || 'Registration failed');
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//                 <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Register</h2>
//                 {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             id="name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             required
//                             className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//                             placeholder="Enter your name"
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//                             placeholder="Enter your email"
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//                             placeholder="Enter your password"
//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//                             Role
//                         </label>
//                         <select
//                             id="role"
//                             value={role}
//                             onChange={(e) => setRole(e.target.value)}
//                             className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//                         >
//                             <option value="student">Student</option>
//                             <option value="donor">Donor</option>
//                             <option value="admin">Admin</option>
//                         </select>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//                     >
//                         Register
//                     </button>
//                 </form>
//                 <p className="mt-4 text-sm text-center">
//                     Already have an account?{' '}
//                     <a href="/login" className="text-blue-500 hover:underline">
//                         Login
//                     </a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Register;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student'); // Default role
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset any previous errors

        toast.promise(
            register({ name, email, password, role }),
            {
                loading: 'Registering...',
                success: () => {
                    navigate('/verify-email');
                    return 'Registration successful! Please verify your email.';
                },
                error: (err) => {
                    setError(err.response?.data?.message || 'Registration failed');
                    return 'Registration failed. Please try again.';
                },
            }
        );
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Register</h2>
                {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Role
                        </label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                        >
                            <option value="student">Student</option>
                            <option value="donor">Donor</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-sm text-center">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
