import React from "react";
import Home from "../sections/Home";
import TrustedBy from "./TrustedBy";
import Homecontent from "../components/Homecontent.jsx";

// NOTE: Ensure 'inter' or a similar clean sans-serif font is configured in your Tailwind/CSS
export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] bg-white text-black flex flex-col items-center justify-center pt-28 pb-40 px-6">
      
      <div className="max-w-4xl text-center">

        {/* HEADLINE: Kept your finalized headline */}
        {/* Note: I removed the non-standard 'mt-15' from h1 */}
        <h1 className="text-5xl md:text-7xl lg:text-[76px] font-semibold tracking-tighter leading-none text-[#1D1D1D] font-sans mt-10">
          Accelerate Your Growth,
          <br />
          Define The Future
        </h1>

        {/* SUBTEXT: Kept your finalized subtext */}
      <p className="mt-8 text-xl md:text-2xl text-[#4A4A4A] font-light leading-relaxed max-w-2xl mx-auto font-sans">
 Intelligent, scalable solutions that help you grow faster and work smarter.
</p>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary Button: Text and href updated to Explore Services */}
          <a
            href="/services" 
            className="px-8 py-4 rounded-full bg-black text-white text-lg font-medium hover:bg-gray-800 transition shadow-lg"
          >
            Explore Services
          </a>

          {/* Secondary Button: Text and href updated to Explore Products. 
              Underline logic is now simplified to only show on hover. */}
          <a
            href="/products"
            // The class 'pb-1 border-b border-white' ensures no initial underline.
            // 'hover:border-black' adds the underline only on hover.
            className="text-lg text-black font-medium pb-1 border-b border-white hover:border-black transition duration-300"
          >
            Explore Products
          </a>
        </div>
      </div>

<TrustedBy />
      
      <Home />
      <Homecontent />

      
     
    </section>
  );
}