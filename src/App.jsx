import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhoWeAre from "./sections/WhoWeAre.jsx";
import WhatWeDo from "./sections/WhatWeDo.jsx";
import Services from "./sections/Services.jsx";
import Products from "./sections/Products.jsx";
import Careers from "./sections/Careers.jsx";
import DiscoverMore from "./sections/DiscoverMore.jsx";
import Enquiries from "./sections/Enquiries.jsx";
import Admin from "./sections/Admin.jsx";
import Footer from "./sections/footer.jsx";


export default function App() {
  const [overlap, setOverlap] = useState(false);

  return (
    <Router>
      {/* ✅ Use flex column layout to push footer to bottom */}
      <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
        
        {/* Navbar always visible */}
        <Navbar overlap={overlap} />
        
        {/* Main content fills space between header and footer */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/discover-me" element={<DiscoverMore />} />
            <Route path="/enquiries" element={<Enquiries />} />
            <Route path="/admin" element={<Admin />} />
            
    
        
          </Routes>


        </main>

        {/* ✅ Footer always visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}
