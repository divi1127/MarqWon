import React from "react";

// IMPORT LOGOS
import myherbalashop from "../assets/my.png";
import joysBeverage from "../assets/joyss.png";
import hydrax from "../assets/hyd.png";

export default function TrustedBy() {
  const trustedLogos = [
    { name: "MYherbalashop", logo: myherbalashop },
    { name: "Joys Beverage", logo: joysBeverage },
    { name: "Hydrax", logo: hydrax },
  ];

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <h3 className="text-center text-gray-900 text-xl md:text-2xl font-semibold mb-12">
        Trusted by Industry Leaders Worldwide
      </h3>

      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {[...trustedLogos, ...trustedLogos].map((brand, i) => (
            <div
              key={i}
              className="logo-box"
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
