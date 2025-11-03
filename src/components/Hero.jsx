import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Home from "../sections/Home.jsx";
import { Link } from "react-router-dom";

function MetallicPaint({ params = {} }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 🎨 Metallic black-white-gray palette
    const colors = ["#ffffff", "#d9d9d9", "#999999", "#666666", "#000000"];

    function draw(time) {
      ctx.clearRect(0, 0, width, height);
      const t = time * 0.001;

      for (let i = 0; i < 25; i++) {
        const x = Math.sin(t + i) * width * 0.5 + width / 2;
        const y = Math.cos(t * 1.3 + i * 2) * height * 0.5 + height / 2;
        const r = 60 + Math.sin(t * 0.8 + i) * 50;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, colors[i % colors.length]);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [params]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "black" }}
    />
  );
}

export default function HeroMarqWon() {
  return (
    <>
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Animated metallic background */}
      <MetallicPaint />

      {/* Subtle radial light overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 px-8 max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gray-100">Innovation That</span>{" "}
          <span className="text-gray-400">Works</span>
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-4xl text-gray-300 font-semibold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Efficiency That Scales
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          At <span className="text-white font-semibold">MarqWon Dynamic Pvt. Ltd.</span>, 
          we blend design precision with technological innovation. 
          From <span className="text-gray-200 font-medium">AI-driven platforms</span> 
          and <span className="text-gray-200 font-medium">SEO-optimized development</span> 
          to <span className="text-gray-200 font-medium">cloud transformation</span>, 
          we craft IT solutions that define tomorrow’s digital excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
           <Link
    to="/services"
    className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-300 hover:scale-105 transition-all duration-300 shadow-lg inline-block"
  >
    View Our Services
  </Link>
        </motion.div>
      </div>

     
    </section>
    <Home />

</>
  );
}
