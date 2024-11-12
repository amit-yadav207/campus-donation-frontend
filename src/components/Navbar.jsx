// // Navbar.js
// import React from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { FaUser } from "react-icons/fa";
// import { TbLogin2, TbLogout2 } from "react-icons/tb";

// const Navbar = () => {
//   const { token, user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = () => navigate("/login");
//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   const navLinks = [
//     { to: "/", text: "Home", role: "all" },
//     { to: "/campaigns", text: "Campaigns", role: "all" },
//     { to: "/create-campaign", text: "Start a Campaign", role: "student" },
//     { to: "/admin-dashboard", text: "Admin Dashboard", role: "admin" },
//   ];

//   console.log("user", user);
//   return (
//     <nav className="bg-gray-800 text-white py-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold">
//           Campus Donations
//         </Link>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-4">
//           {navLinks.map(
//             (link, index) =>
//               (link.role === "all" || link.role === user?.role) && (
//                 <NavLink
//                   key={index}
//                   to={link.to}
//                   className="text-sm px-4 hover:text-gray-300"
//                 >
//                   {link.text}
//                 </NavLink>
//               )
//           )}

//           {/* Conditional rendering of login/logout buttons */}
//           {token ? (
//             <>
//               <button
//                 className="flex items-center space-x-1 text-sm px-4 hover:text-gray-300"
//                 onClick={() => navigate("/profile")}
//               >
//                 <FaUser />
//                 <span>Profile</span>
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center space-x-1 text-sm px-4 hover:text-gray-300"
//               >
//                 <span>Logout</span>
//                 <TbLogout2 />
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={handleLogin}
//               className="flex items-center space-x-1 text-sm px-4 hover:text-gray-300"
//             >
//               <span>Login</span>
//               <TbLogin2 />
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { FaUser, FaBars } from "react-icons/fa";
// import { TbLogin2, TbLogout2 } from "react-icons/tb";
// import { IoClose } from "react-icons/io5";

// const Navbar = () => {
//   const { token, user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const handleLogin = () => navigate("/login");
//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

//   const navLinks = [
//     { to: "/", text: "Home", role: "all" },
//     { to: "/campaigns", text: "Campaigns", role: "all" },
//     { to: "/create-campaign", text: "Start a Campaign", role: "student" },
//     { to: "/admin-dashboard", text: "Admin Dashboard", role: "admin" },
//   ];

//   return (
//     <nav className="bg-gray-800 text-white py-4  sticky top-0 shadow-lg z-50">
//       <div className="container mx-auto flex justify-between items-center px-4">
//         {/* Logo */}
//         <Link to="/" className="text-2xl font-bold">
//           Campus Donations
//         </Link>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={toggleDrawer}
//           className="text-white text-2xl md:hidden focus:outline-none"
//         >
//           {isDrawerOpen ? <IoClose /> : <FaBars />}
//         </button>

//         {/* Navigation Links (always visible on large screens) */}
//         <div className="hidden md:flex items-center space-x-4">
//           {navLinks.map(
//             (link, index) =>
//               (link.role === "all" || link.role === user?.role) && (
//                 <NavLink
//                   key={index}
//                   to={link.to}
//                   className={({ isActive }) =>
//                     `text-sm px-4 py-2 ${
//                       isActive ? "text-blue-400 underline" : "hover:text-gray-300"
//                     }`
//                   }
//                 >
//                   {link.text}
//                 </NavLink>
//               )
//           )}

//           {/* Conditional rendering of login/logout buttons */}
//           {token ? (
//             <>
//               <button
//                 onClick={() => navigate("/profile")}
//                 className="flex items-center space-x-1 text-sm px-4 py-2 hover:text-gray-300"
//               >
//                 <FaUser />
//                 <span>Profile</span>
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="flex items-center space-x-1 text-sm px-4 py-2 hover:text-gray-300"
//               >
//                 <span>Logout</span>
//                 <TbLogout2 />
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={handleLogin}
//               className="flex items-center space-x-1 text-sm px-4 py-2 hover:text-gray-300"
//             >
//               <span>Login</span>
//               <TbLogin2 />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Drawer (Side Menu) */}
//       <div
//         className={`${
//           isDrawerOpen ? "right-0" : "-right-full"
//         } fixed top-0 bottom-0 w-64 bg-gray-800 text-white z-50 transition-all duration-300 md:hidden`}
//       >
//         <div className="flex justify-between items-center p-4">
//           <Link to="/" className="text-2xl font-bold">
//             Campus Donations
//           </Link>
//           <button
//             onClick={toggleDrawer}
//             className="text-white text-2xl"
//           >
//             <IoClose />
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col p-4 space-y-4">
//           {navLinks.map(
//             (link, index) =>
//               (link.role === "all" || link.role === user?.role) && (
//                 <NavLink
//                   key={index}
//                   to={link.to}
//                   className={({ isActive }) =>
//                     `block text-sm px-4 py-2 ${
//                       isActive ? "text-blue-400" : "hover:text-gray-300"
//                     }`
//                   }
//                   onClick={() => setIsDrawerOpen(false)} // Close the drawer when link is clicked
//                 >
//                   {link.text}
//                 </NavLink>
//               )
//           )}

//           {/* Conditional rendering of login/logout buttons */}
//           {token ? (
//             <>
//               <button
//                 onClick={() => {
//                   navigate("/profile");
//                   setIsDrawerOpen(false);
//                 }}
//                 className="flex items-center space-x-1 text-sm px-4 py-2 hover:text-gray-300"
//               >
//                 <FaUser />
//                 <span>Profile</span>
//               </button>
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   setIsDrawerOpen(false);
//                 }}
//                 className="flex items-center space-x-1 text-sm px-4 py-2 hover:text-gray-300"
//               >
//                 <span>Logout</span>
//                 <TbLogout2 />
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => {
//                 handleLogin();
//                 setIsDrawerOpen(false);
//               }}
//               className="flex items-center space-x-1 text-sm px-4 py-2 hover:text-gray-300"
//             >
//               <span>Login</span>
//               <TbLogin2 />
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Overlay when drawer is open */}
//       <div
//         className={`${
//           isDrawerOpen ? "block" : "hidden"
//         } fixed inset-0 bg-black opacity-50 z-40`}
//         onClick={toggleDrawer}
//       ></div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUser, FaBars } from "react-icons/fa";
import { TbLogin2, TbLogout2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import logo from "../assets/donate3.png"; // Assuming logo is an image file

const Navbar = () => {
  const { token, user, logout } = useAuth();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLogin = () => navigate("/login");
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const userId=user?._id
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const navLinks = [
    { to: "/", text: "Home", role: "all" },
    { to: "/admin-dashboard", text: "Dashboard", role: "admin" },
    { to: "/campaigns", text: "Campaigns", role: "all" },
    { to: "/create-campaign", text: "Start a Campaign", role: "student" },
    { to: "/analytics", text: "Analytics", role: "all" },
    { to: `/donation-history/${userId}`, text: "History", role: "all" },
  ];

  return (
    <nav className="bg-gray-800 text-white py-4 sticky top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Campus Donations Logo" className="h-8" />
          <span className="text-2xl font-bold">Campus Donations</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleDrawer}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          {isDrawerOpen ? <IoClose /> : <FaBars />}
        </button>

        {/* Navigation Links (always visible on large screens) */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map(
            (link, index) =>
              (link.role === "all" || link.role === user?.role) && (
                <NavLink
                  key={index}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm px-4 py-2 ${
                      isActive ? "text-blue-400 border-b-2 border-current pb-2"  : "hover:text-gray-300"
                    }`
                  }
                >
                  {link.text}
                </NavLink>
              )
          )}

          {/* Conditional rendering of login/logout buttons */}
          {token ? (
            <>
              <button
                onClick={() => navigate("/profile")}
                className="flex items-center space-x-1 text-sm px-4 py-2 hover:text-gray-300"
              >
                <FaUser />
                <span>Profile</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-sm px-4 py-2 hover:text-gray-300"
              >
                <span>Logout</span>
                <TbLogout2 />
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center space-x-1 text-sm px-4 py-2 hover:text-gray-300"
            >
              <span>Login</span>
              <TbLogin2 />
            </button>
          )}
        </div>
      </div>

      {/* Drawer (Side Menu) */}
      <div
        className={`${
          isDrawerOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-64 bg-gray-800 text-white z-50 transition-all duration-300 md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <button
            onClick={toggleDrawer}
            className="text-white text-2xl"
          >
            <IoClose />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map(
            (link, index) =>
              (link.role === "all" || link.role === user?.role) && (
                <NavLink
                  key={index}
                  to={link.to}
                  className={({ isActive }) =>
                    `block text-sm px-4 py-2 ${
                      isActive ? "text-blue-400" : "hover:text-gray-300"
                    }`
                  }
                  onClick={() => setIsDrawerOpen(false)} // Close the drawer when link is clicked
                >
                  {link.text}
                </NavLink>
              )
          )}

          {/* Conditional rendering of login/logout buttons */}
          {token ? (
            <>
              <button
                onClick={() => {
                  navigate("/profile");
                  setIsDrawerOpen(false);
                }}
                className="flex items-center space-x-1 text-sm px-4 py-2 hover:text-gray-300"
              >
                <FaUser />
                <span>Profile</span>
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  setIsDrawerOpen(false);
                }}
                className="flex items-center space-x-1 text-sm px-4 py-2 hover:text-gray-300"
              >
                <span>Logout</span>
                <TbLogout2 />
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogin();
                setIsDrawerOpen(false);
              }}
              className="flex items-center space-x-1 text-sm px-4 py-2 hover:text-gray-300"
            >
              <span>Login</span>
              <TbLogin2 />
            </button>
          )}
        </div>
      </div>

      {/* Overlay when drawer is open */}
      <div
        className={`${
          isDrawerOpen ? "block" : "hidden"
        } fixed inset-0 bg-black opacity-50 z-40`}
        onClick={toggleDrawer}
      ></div>
    </nav>
  );
};

export default Navbar;
