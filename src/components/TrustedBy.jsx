import React from "react";

// IMPORT LOGOS
import myherbalashop from "../assets/my.png";
import joysBeverage from "../assets/joo.png";
import hydrax from "../assets/hyd.png";
import fourmax from "../assets/four.png";

export default function TrustedBy() {
  const trustedLogos = [
    { name: "MYherbalashop", logo: myherbalashop },
    { name: "Joys Beverage", logo: joysBeverage },
    { name: "Hydrax", logo: hydrax },
    { name: "Fourmax", logo: fourmax },
  ];

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <h3 className="text-center text-gray-900 text-xl md:text-2xl font-semibold mb-12">
        Trusted by Industry Leaders Worldwide
      </h3>

      {/* The container needs relative and overflow-hidden for both the scroll and the fade effect */}
      <div className="relative overflow-hidden trusted-logos-container">
        <div className="marquee-track">
          {/* Duplicate the array to create the seamless loop */}
          {[...trustedLogos, ...trustedLogos].map((brand, i) => (
            <div
              key={i}
              // Add a specific class for Fourmax sizing
              className={`logo-box ${brand.name === "Fourmax" ? "fourmax-logo-box" : ""}`}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}