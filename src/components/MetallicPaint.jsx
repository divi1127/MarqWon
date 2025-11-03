import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MetallicPaint from "./MetallicPaint"; // ✅ Local file, not from npm
import logo from "../assets/logomain.png";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = logo;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white overflow-hidden">
      {/* Metallic animated background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <MetallicPaint
          params={{
            edge: 2,
            patternBlur: 0.005,
            patternScale: 2,
            refraction: 0.015,
            speed: 0.3,
            liquid: 0.07,
          }}
        />
      </div>

      {/* Centered logo */}
      {loaded && (
        <motion.img
          src={logo}
          alt="Logo"
          className="w-40 h-auto z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      )}

      {/* Overlaying text */}
      <div className="absolute z-20 text-center px-8">
        <motion.h1
          className="font-extrabold leading-tight text-[4vw] sm:text-[3vw] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Engineering Digital <br />
          <span className="text-gray-400">Momentum for Tomorrow</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          At MarqWon, we design intelligent systems that turn bold ideas into
          scalable realities.
        </motion.p>
      </div>
    </section>
  );
}
