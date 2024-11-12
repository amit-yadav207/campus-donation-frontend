// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import CampaignList from "../pages/CampaignList";
// import CampaignDetail from "../pages/CampaignDetail";
// import CreateCampaign from "../pages/CreateCampaign";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import ForgotPassword from "../pages/ForgotPassword";
// import ResetPassword from "../pages/ResetPassword";
// import Dashboard from "../pages/Dashboard";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/campaigns" element={<CampaignList />} />
//       <Route path="/campaigns/:id" element={<CampaignDetail />} />
//       <Route path="/create-campaign" element={<CreateCampaign />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/reset-password/:token" element={<ResetPassword />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CampaignList from "../pages/CampaignList";
import CampaignDetail from "../pages/CampaignDetail";
import CreateCampaign from "../pages/CreateCampaign";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyAccount from '../pages/VerifyAccount';
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import AdminDashboard from "../pages/AdminDashboard";
import AuthRoute from "./AuthRoute"; // Import the AuthRoute component
import Profile from "../pages/Profile";
import EmailVerificationPage from "../pages/EmailVerificationPage";
import DonorAnalytics from "../pages/DonorAnalytics";
import DonationHistory from "../components/DonationHistory";


import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QD6LYGCbclWQkGcZLmc1vrdp4hTRb8eosVnDWnaRCPZXzAxsuPxRtcrNaZ8bVR25gwMVIvXgdXx1zgEUru3C90o00ddwWZpPA'); // Replace with your actual Stripe public key

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campaigns" element={<CampaignList />} />
      <Route path="/campaigns/:id" element={<Elements stripe={stripePromise}><CampaignDetail /></Elements>} />

      <Route path="/create-campaign" element={<CreateCampaign />} />
      <Route path="/donation-history/:userId" element={<AuthRoute element={<DonationHistory />} />}/>
      <Route path="/analytics" element={<DonorAnalytics />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify/:verificationToken" element={<VerifyAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/verify-email" element={<EmailVerificationPage />} />
      <Route
        path="/admin-dashboard"
        element={<AuthRoute element={<AdminDashboard />} />}
      />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
