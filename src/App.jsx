import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Hero from "./components/Hero.jsx";
import WhoWeAre from "./sections/WhoWeAre.jsx";
import WhatWeDo from "./sections/WhatWeDo.jsx";
import Services from "./sections/Services.jsx";
import Products from "./sections/Products.jsx";
import Careers from "./sections/Careers.jsx";
import DiscoverMore from "./sections/DiscoverMore.jsx";


// 🆕 Welcome Intro
import WelcomeIntro from "./components/WelcomeIntro.jsx";

export default function App() {
  const [overlap, setOverlap] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide intro after 4s
    const timer = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
        {showIntro ? (
          <WelcomeIntro />
        ) : (
          <>
            <Navbar overlap={overlap} />
            <main>
              <Routes>
                {/* Home Page */}
                <Route path="/" element={<Hero />} />

                {/* Separate Pages */}
                <Route path="/who-we-are" element={<WhoWeAre />} />
                <Route path="/what-we-do" element={<WhatWeDo />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/discover-me" element={<DiscoverMore />} />
                
              </Routes>
            </main>
            <ThemeToggle />
          </>
        )}
      </div>
    </Router>
  );
}
