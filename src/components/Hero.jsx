import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Home from "../sections/Home";

export default function Hero() {
  // Track mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Tilt mapping
  const rotateX = useTransform(y, [0, window.innerHeight], [15, -15]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-15, 15]);

  // Light reflection mapping
  const lightX = useTransform(x, [0, window.innerWidth], ["0%", "100%"]);
  const lightY = useTransform(y, [0, window.innerHeight], ["0%", "100%"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <>
    <section
      id="top"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center
                 bg-white text-[#23272A] transition-colors duration-500 px-4 sm:px-6 md:px-12"
    >
      {/* 🎨 Spotlight effect */}
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[70vh] w-[70vh] 
                   rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(200,200,200,0.5) 0%, rgba(255,255,255,0) 70%)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="shine-text">Powering Tomorrow’s</span> <br />
          <span className="text-gray-800">Technology Solutions</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          We build scalable software, AI-powered applications, <br />
          secure cloud infrastructure, and modern digital platforms — <br />
          helping businesses innovate and grow with confidence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 sm:mt-10 flex justify-center gap-3 sm:gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.9 }}
        >
          <a
            href="#services"
            className="rounded-xl px-5 py-2 sm:px-6 sm:py-3 border border-gray-800 bg-black text-white 
                       backdrop-blur-md shadow-md hover:scale-105 transition-transform text-sm sm:text-base"
          >
            Our Services
          </a>
          <a
            href="#products"
            className="rounded-xl px-5 py-2 sm:px-6 sm:py-3 border border-gray-500 bg-gray-300 text-black 
                       backdrop-blur-md shadow-md hover:scale-105 transition-transform text-sm sm:text-base"
          >
            Our Products
          </a>
        </motion.div>

        {/* 🌟 Floating Image with Tilt + Light */}
        <motion.div
          style={{ rotateX, rotateY }}
          className="mt-12 sm:mt-16 flex justify-center perspective-1000"
        >
          <div className="relative">
            <img
              src="/src/assets/mockup.png" // replace with your image
              alt="IT Solutions Mockup"
              className="w-[220px] sm:w-[280px] md:w-[380px] lg:w-[450px] rounded-2xl shadow-2xl"
            />
            <motion.div
              style={{
                left: lightX,
                top: lightY,
                transform: "translate(-50%, -50%)",
              }}
              className="absolute w-[200%] h-[200%] rounded-full 
                         bg-white/20 blur-3xl pointer-events-none"
            />
          </div>
        </motion.div>

        
      </div>
    </section>
    <Home/>
   </>
  );
}
