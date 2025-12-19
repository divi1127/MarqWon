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
        Trusted by Forward-Thinking Businesses Worldwide
      </h3>

      {/* Marquee Wrapper */}
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-20">
          {[...trustedLogos, ...trustedLogos, ...trustedLogos].map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[180px]"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-25 object-contain grayscale brightness-0 opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
