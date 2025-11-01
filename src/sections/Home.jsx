import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Workflow,
  Code2,
  Rocket,
  ShoppingCart,
  Briefcase,
  Palette,
  Gamepad2,
  ShieldCheck,
  RefreshCw,
  Zap,
  PenTool,
  Megaphone,
  Cpu,
  Cloud,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// 🌐 SERVICES LIST
const services = [
  { title: "Website Development", icon: Globe },
  { title: "Application Development", icon: Smartphone },
  { title: "CRM, ERP & Workflow Systems", icon: Workflow },
  { title: "Custom Software", icon: Code2 },
  { title: "Startup MVP", icon: Rocket },
  { title: "E-Commerce Development", icon: ShoppingCart },
  { title: "Business Development", icon: Briefcase },
  { title: "UI/UX Design", icon: Palette },
  { title: "Graphics Design", icon: PenTool },
  { title: "Game Development", icon: Gamepad2 },
  { title: "Cyber Security", icon: ShieldCheck },
  { title: "Digital Transformation", icon: RefreshCw },
  { title: "Crypto & Web3 Solutions", icon: Zap },
  { title: "Branding & Identity", icon: PenTool },
  { title: "Digital Marketing", icon: Megaphone },
];

// ⚙️ PROCESS STEPS
const processSteps = [
  {
    icon: <Cpu className="w-6 h-6 text-white" />,
    title: "Connect with MarqWon",
    desc: "Begin your digital transformation by connecting with our experts — we align your business needs with the right technology roadmap.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-white" />,
    title: "Build & Deploy Smart Solutions",
    desc: "We craft scalable, secure, and cloud-powered applications that adapt to your evolving needs — from AI to enterprise-grade systems.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Monitor & Optimize",
    desc: "Gain real-time insights and ensure robust data security with continuous performance tracking and innovation-driven updates.",
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  useEffect(() => {
    const autoScroll = setInterval(nextSlide, 3000);
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* 🌌 Background Layer */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl bottom-20 right-20"></div>
        <div className="absolute w-[250px] h-[250px] bg-white/5 rounded-full blur-2xl bottom-0 left-1/3"></div>
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* 🌟 HEADER */}
      <section className="relative z-10 py-16 text-center">
        <h2 className="text-sm uppercase tracking-[4px] text-gray-400">Our Expertise</h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text"
        >
          Elevate Your Digital Experience
        </motion.h1>
      </section>

      {/* 🔁 SERVICES SCROLL — FIRST */}
      <div className="relative z-10 flex overflow-hidden mb-24 mt-10">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="flex gap-24 whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 60,
            }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex items-center gap-3 mx-6 min-w-max">
                  <Icon className="w-6 h-6 text-gray-400" />
                  <span
                    className="text-gray-300 text-lg tracking-widest uppercase"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                      letterSpacing: "1.5px",
                      textShadow: "0 0 8px rgba(255,255,255,0.15)",
                    }}
                  >
                    {service.title}
                  </span>
                </div>
              );
            })}
          </motion.div>
        ))}
      </div>

      {/* 🧊 GLASSMORPHIC CARDS — SECOND */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 pb-24">
        {processSteps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 hover:scale-[1.02] transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-full bg-white/10">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* 🌀 3D SERVICE CAROUSEL — LAST */}
      <section className="relative z-10 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-200">Explore Our Services</h3>
            <div className="flex items-center gap-2">
              <button onClick={prevSlide} className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition">
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button onClick={nextSlide} className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-[380px] perspective-[1200px]">
            {services.map((s, i) => {
              const Icon = s.icon;
              const offset = (i - currentIndex + services.length) % services.length;
              const position = offset > services.length / 2 ? offset - services.length : offset;

              const baseX = position * 220;
              const curveAdjust = Math.sin((position / 5) * Math.PI) * 40;
              const translateX = baseX + curveAdjust;

              const rotateY = position * -18;
              const scale = 1 - Math.abs(position) * 0.08;
              const zIndex = 100 - Math.abs(position);
              const isActive = position === 0;

              return (
                <motion.div
                  key={s.title}
                  className={`absolute top-1/2 left-1/2 w-[220px] h-[300px] rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 flex flex-col items-center justify-center text-center transform-gpu transition-all ${
                    isActive ? "scale-105 ring-2 ring-white/30 shadow-[0_0_30px_rgba(255,255,255,0.2)]" : ""
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${
                      -Math.abs(position) * 150
                    }px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity: Math.abs(position) > 4 ? 0 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  <Icon className="w-10 h-10 text-white/80 mb-4" />
                  <h4 className="text-sm font-semibold text-gray-200 px-3">{s.title}</h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
