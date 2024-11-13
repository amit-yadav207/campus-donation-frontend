// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset any previous errors
//     try {
//       console.log('going to context')
//       const success = await login({ email, password });
//       if (success) {
//         console.log('success')
//         navigate("/"); // Only navigate if login was successful
//       }
//     } catch (err) {
//       console.error("Error during login process:", err);
//       setError(err.response?.data?.message || "Login failed");
//     }
//     // try {
//     //   console.log("Attempting login...");
//     //   const response = await login({ email, password });
//     //   console.log("Login response:", response);

//     //   console.log("Setting user in context");
//     //   loginContext(response.user); // Remove await if loginContext is synchronous
//     //   console.log("User set in context successfully");

//     //   localStorage.setItem("token", response.token);
//     //   console.log("Token stored in local storage:", response.token);

//     //   navigate("/dashboard");
//     // } catch (err) {
//     //   console.error("Error during login process:", err);
//     //   setError(err.response?.data?.message || "Login failed");
//     // }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4">Login</h2>
//         {error && <div className="text-red-500 mb-4">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-sm">
//           Don't have an account?{" "}
//           <a href="/register" className="text-blue-500 hover:underline">
//             Register
//           </a>
//         </p>
//         <p className="mt-2 text-sm">
//           Forgot your password?{" "}
//           <a href="/forgot-password" className="text-blue-500 hover:underline">
//             Reset it
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset any previous errors
//     try {
//       console.log('going to context')
//       const success = await login({ email, password });
//       if (success) {
//         console.log('success')
//         navigate("/"); // Only navigate if login was successful
//       }
//     } catch (err) {
//       console.error("Error during login process:", err);
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Login</h2>
//         {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <a href="/register" className="text-blue-500 hover:underline">
//               Register
//             </a>
//           </p>
//           <p className="mt-2 text-sm text-gray-600">
//             Forgot your password?{" "}
//             <a href="/forgot-password" className="text-blue-500 hover:underline">
//               Reset it
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset any previous errors
//     try {
//       console.log('going to context')
//       const success = await login({ email, password });
//       if (success) {
//         console.log('success')
//         navigate("/"); // Only navigate if login was successful
//       }
//     } catch (err) {
//       console.error("Error during login process:", err);
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Login</h2>
//         {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <a href="/register" className="text-blue-500 hover:underline">
//               Register
//             </a>
//           </p>
//           <p className="mt-2 text-sm text-gray-600">
//             Forgot your password?{" "}
//             <a href="/forgot-password" className="text-blue-500 hover:underline">
//               Reset it
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { toast } from "react-hot-toast"; // Importing react-hot-toast

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null); // Reset any previous errors
//     try {
//       console.log('going to context');
//       const success = await login({ email, password });
//       if (success) {
//         console.log('success');
//         toast.success("Login successful!"); // Success toast notification
//         navigate("/"); // Only navigate if login was successful
//       }
//     } catch (err) {
//       console.error("Error during login process:", err);
//       const errorMessage = err.response?.data?.message || "Login failed";
//       setError(errorMessage);
//       toast.error(errorMessage); // Error toast notification
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Login</h2>
//         {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{" "}
//             <a href="/register" className="text-blue-500 hover:underline">
//               Register
//             </a>
//           </p>
//           <p className="mt-2 text-sm text-gray-600">
//             Forgot your password?{" "}
//             <a href="/forgot-password" className="text-blue-500 hover:underline">
//               Reset it
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast"; // Importing react-hot-toast

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    setIsLoading(true); // Set loading to true

    await toast.promise(login({ email, password }), {
      loading: "Logging in...",
      success: () => {
        navigate("/"); // Navigate only if login was successful
        return <p>Login successful!</p>;
      },
      error: (err) => {
        const errorMessage = err.response?.data?.message || "Login failed";
        setError(errorMessage); // Set error message in state
        setIsLoading(false); // Set loading to false after promise is resolved
        return <p>{errorMessage}</p>;
      },
    });
    setIsLoading(false); // Set loading to false after promise is resolved
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading} // Disable button if loading
            className={`w-full ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600"
            } text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105`}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Forgot your password?{" "}
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Reset it
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
