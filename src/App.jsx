import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index.jsx"; // Import your routes
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar"; // Global Navbar component
import Footer from "./components/Footer"; // Global Footer component

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Global Navbar */}
          <Navbar />

          {/* Main Content with Routing */}
          <main className="flex-grow">
            <AppRoutes />
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
