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
   <h3 className="text-center text-gray-900 md:text-1xl font-semibold mb-12">
  Trusted by Industry Leaders Worldwide
</h3>


      {/* MARQUEE */}
      <div className="relative overflow-hidden marquee-mask">
        <div className="marquee-track">
          {[...trustedLogos, ...trustedLogos, ...trustedLogos].map(
            (brand, i) => (
              <img
                key={i}
                src={brand.logo}
                alt={brand.name}
                className="h-20 md:h-24 object-contain filter invert grayscale hover:grayscale-0 transition duration-300"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
