import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🚨 FIX: IMPORT ALL COMPONENTS USED BELOW 
// (Checking against your original file, these look like the necessary imports)

import Navbar from "./components/Navbar.jsx"; // <-- ADD THIS LINE
import Hero from "./components/Hero.jsx"; // <-- ADD THIS LINE
import ScrollToTop from "./components/ScrollToTop.jsx"; 
import Footer from "./sections/footer.jsx"; // <-- ADD THIS LINE

// Section Imports
import WhoWeAre from "./sections/WhoWeAre.jsx";
import Services from "./sections/Services.jsx";
import Products from "./sections/Products.jsx";
import Careers from "./sections/Careers.jsx";
import Enquiries from "./sections/Enquiries.jsx";

import ServiceDetailPage from "./sections/ServiceDetailPage.jsx";
import PrivacyPolicyPage from "./sections/PrivacyPolicyPage.jsx";
import TermsAndConditionsPage from "./sections/TermsAndConditionsPage.jsx";

// You can safely remove the unused 'other imports' comment now.

export default function App() {
  const [overlap, setOverlap] = useState(false);

  return (
    <Router>
      
      {/* Scroll component to ensure page always starts at the top */}
      <ScrollToTop /> 
      
      {/* Use flex column layout to push footer to bottom */}
      <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
        
        {/* Navbar always visible */}
        <Navbar overlap={overlap} /> 
        
        {/* Main content fills space between header and footer */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/enquiries" element={<Enquiries />} />
            

            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsAndConditionsPage/>} />

            {/* Services Detail Pages */}
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            {/* Optional: 404 fallback */}
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center h-screen text-gray-400">
                  <h2 className="text-3xl">404 | Page Not Found</h2>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer always visible on all pages */}
        <Footer /> 
      </div>
    </Router>
  );
}