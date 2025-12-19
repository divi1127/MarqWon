import React, { useEffect } from "react"; // <-- 1. Import useEffect Hook
import TrustedBy from "./TrustedBy";
import Homecontent from "../components/Homecontent.jsx";
import { Link } from "react-router-dom";

export default function Hero() {

    // 2. Implement useEffect for "Reload" action on mount/remount
    useEffect(() => {
        // This code runs every time the component is mounted (e.g., when 
        // navigating back from a different page like /services).
        
        console.log("🟢 HOME PAGE RE-MOUNTED: Executing page refresh/initialization logic.");
        
        // **PLACE YOUR REFRESH/RELOAD LOGIC HERE:**
        // For example, if you need to scroll to the top, reset an animation, or fetch new data:
        // 
        // window.scrollTo(0, 0); // To ensure you always start at the top
        // fetchDataForHero(); // To ensure data is always fresh

    }, []); // Empty dependency array [] ensures it runs only on mount

    return (
        <>
        <section className="relative w-full min-h-[80vh] bg-white text-black flex flex-col items-center justify-center pt-28 pb-10 px-6">
            
            <div className="max-w-4xl text-center">

                {/* HEADLINE */}
                <h1 className="text-5xl md:text-7xl lg:text-[76px] font-semibold tracking-tighter leading-none text-[#1D1D1D] font-sans mt-10">
                    Accelerate Your Growth,
                    <br />
                    Define The Future
                </h1>

                {/* SUBTEXT */}
                <p className="mt-8 text-xl md:text-2xl text-[#4A4A4A] font-light leading-relaxed max-w-2xl mx-auto font-sans">
                    Intelligent, scalable solutions that help you grow faster and work smarter.
                </p>

                {/* BUTTONS */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    
                    {/* Primary Button: Link to /services */}
                    <Link
                        to="/services"
                        className="px-8 py-4 rounded-full bg-black text-white text-lg font-extralight hover:bg-gray-800 transition shadow-lg"
                    >
                        Explore Services
                    </Link>

                    {/* Secondary Button: Updated to use <Link> for client-side navigation */}
                    <Link
                        to="/products"
                        // The class 'pb-1 border-b border-white' ensures no initial underline.
                        // 'hover:border-black' adds the underline only on hover.
                        className="text-lg text-black font-medium pb-1 border-b border-white hover:border-black transition duration-300"
                    >
                        Explore Products
                    </Link>
                </div>
            </div>
            

            <TrustedBy />
            
            {/* <Home /> */}
            <Homecontent />
            
        </section>

        </>
    );
}