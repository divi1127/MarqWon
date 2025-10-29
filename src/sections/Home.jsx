import React from "react";
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
} from "lucide-react";

//
// 🧩 1. SERVICES CAROUSEL DATA
//
const services = [
  { title: "Website Development", icon: <Globe className="w-6 h-6 text-gray-400" /> },
  { title: "Application Development", icon: <Smartphone className="w-6 h-6 text-gray-400" /> },
  { title: "CRM, ERP & Workflow Systems", icon: <Workflow className="w-6 h-6 text-gray-400" /> },
  { title: "Custom Software", icon: <Code2 className="w-6 h-6 text-gray-400" /> },
  { title: "Startup MVP", icon: <Rocket className="w-6 h-6 text-gray-400" /> },
  { title: "E-Commerce Development", icon: <ShoppingCart className="w-6 h-6 text-gray-400" /> },
  { title: "Business Development", icon: <Briefcase className="w-6 h-6 text-gray-400" /> },
  { title: "UI/UX Design", icon: <Palette className="w-6 h-6 text-gray-400" /> },
  { title: "Graphics Design", icon: <PenTool className="w-6 h-6 text-gray-400" /> },
  { title: "Game Development", icon: <Gamepad2 className="w-6 h-6 text-gray-400" /> },
  { title: "Cyber Security", icon: <ShieldCheck className="w-6 h-6 text-gray-400" /> },
  { title: "Digital Transformation", icon: <RefreshCw className="w-6 h-6 text-gray-400" /> },
  { title: "Crypto & Web3 Solutions", icon: <Zap className="w-6 h-6 text-gray-400" /> },
  { title: "Branding & Identity", icon: <PenTool className="w-6 h-6 text-gray-400" /> },
  { title: "Digital Marketing", icon: <Megaphone className="w-6 h-6 text-gray-400" /> },
];

//
// 🧭 2. MARQWON PROCESS DATA
//
const processSteps = [
  {
    icon: <Cpu className="w-6 h-6 text-indigo-500" />,
    title: "Connect with MarqWon",
    desc: "Begin your digital transformation by connecting with our experts — we align your business needs with the right technology roadmap.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-purple-500" />,
    title: "Build & Deploy Smart Solutions",
    desc: "We craft scalable, secure, and cloud-powered applications that adapt to your evolving needs — from AI to enterprise-grade systems.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-pink-500" />,
    title: "Monitor & Optimize",
    desc: "Gain real-time insights and ensure robust data security with continuous performance tracking and innovation-driven updates.",
  },
];

//
// 🧠 3. COMPONENT
//
export default function Services() {
  return (
    <div className="bg-black text-white">
      {/* ================== SERVICES CAROUSEL ================== */}
      <section className="relative bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#1a1a1a] py-14 overflow-hidden border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-gray-300 font-semibold text-sm tracking-widest uppercase">
            Our Expertise
          </h2>
        </div>

        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="relative flex overflow-hidden">
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
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 mx-6 min-w-max"
                >
                  {service.icon}
                  <span
                    className="text-gray-300 text-xl tracking-widest uppercase"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                      letterSpacing: "1.5px",
                      textShadow: "0 0 10px rgba(255,255,255,0.1)",
                    }}
                  >
                    {service.title}
                  </span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================== MARQWON PROCESS ================== */}
      <section className="py-24 bg-white text-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 opacity-70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 items-center gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
              How We Work
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              From setup to{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                success
              </span>{" "}
              — just three simple steps.
            </h2>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-md">
              We simplify complex technology — making innovation accessible,
              measurable, and impactful for every business we empower.
            </p>
          </motion.div>

          {/* Right Steps */}
          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                className="relative flex items-start p-6 bg-white shadow-lg border border-gray-100 rounded-2xl hover:shadow-2xl transition-all"
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-full mr-5">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.3, type: "spring" }}
                  className="absolute top-4 right-4 text-xs text-gray-400 font-semibold"
                >
                  0{i + 1}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
