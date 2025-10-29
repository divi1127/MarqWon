import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ShieldCheck,
  Smartphone,
  Workflow,
  Rocket,
  RefreshCw,
  ShoppingCart,
  Brush,
  Megaphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  { title: "Web Applications Development", desc: "We craft modern, SEO-optimized websites and scalable web apps.", icon: Globe, imgQuery: "web development", color: "from-blue-500 to-indigo-500" },
  { title: "Application Development", desc: "Full-stack web & mobile applications, built to scale.", icon: Smartphone, imgQuery: "mobile app", color: "from-green-500 to-emerald-500" },
  { title: "CRM, ERP & Workflow Systems", desc: "Tailored ERP/CRM to automate and optimize workflows.", icon: Workflow, imgQuery: "erp crm", color: "from-orange-500 to-yellow-500" },
  { title: "E-commerce Development", desc: "Conversion-focused commerce platforms with secure payments.", icon: ShoppingCart, imgQuery: "ecommerce", color: "from-rose-500 to-pink-600" },
  { title: "Automation", desc: "Automate repetitive tasks and improve efficiency.", icon: RefreshCw, imgQuery: "automation", color: "from-cyan-500 to-teal-500" },
  { title: "Custom Software", desc: "Bespoke software aligned to your processes and goals.", icon: Globe, imgQuery: "custom software", color: "from-indigo-500 to-sky-500" },
  { title: "Business Development", desc: "Data-driven strategies to expand and scale your business.", icon: Megaphone, imgQuery: "business development", color: "from-yellow-500 to-orange-500" },
  { title: "UI/UX Design", desc: "Engaging and usable interfaces that convert users.", icon: Brush, imgQuery: "ui ux design", color: "from-purple-500 to-indigo-500" },
  { title: "Graphics Design", desc: "Brand visuals that tell your story and build trust.", icon: Brush, imgQuery: "graphic design", color: "from-pink-500 to-red-500" },
  { title: "Game Development", desc: "Immersive games for web, mobile & cross-platform.", icon: Rocket, imgQuery: "game development", color: "from-teal-500 to-green-500" },
  { title: "Digital Transformation", desc: "Cloud, AI & data to modernize your organization.", icon: RefreshCw, imgQuery: "digital transformation", color: "from-cyan-500 to-teal-500" },
  { title: "Branding & Design", desc: "Strategic brand systems and visual identity.", icon: Brush, imgQuery: "branding design", color: "from-indigo-500 to-sky-500" },
  { title: "Digital Marketing", desc: "SEO, PPC & social strategies to grow traffic & leads.", icon: Megaphone, imgQuery: "digital marketing", color: "from-yellow-500 to-orange-500" },
  { title: "Startup MVP Planning", desc: "Rapid prototyping and investor-ready MVPs.", icon: Rocket, imgQuery: "startup mvp", color: "from-red-500 to-pink-500" },
  { title: "Cyber Security", desc: "Pen testing, encryption & monitoring to secure systems.", icon: ShieldCheck, imgQuery: "cyber security", color: "from-gray-700 to-black" },
  { title: "Crypto & Web3 Solutions", desc: "Smart contracts, dapps and blockchain platforms.", icon: ShieldCheck, imgQuery: "blockchain web3", color: "from-purple-500 to-pink-500" },
];

const fadeInLeft = { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 } };
const fadeInRight = { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 } };

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  useEffect(() => {
    const autoScroll = setInterval(nextSlide, 3000);
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#faf8f6] text-gray-900">
      {/* ✅ 3D Curved Carousel */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf8f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-semibold">Explore Our Services</h3>
            <div className="flex items-center gap-2">
              <button onClick={prevSlide} className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextSlide} className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ✅ 3D Center Curve */}
          <div className="relative flex items-center justify-center h-[380px] perspective-[1200px] overflow-visible">
            {services.map((s, i) => {
              const Icon = s.icon;
              const offset = (i - currentIndex + services.length) % services.length;
              const position = offset > services.length / 2 ? offset - services.length : offset;

              // ✅ Balanced curved layout
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
                  className={`absolute top-1/2 left-1/2 w-[240px] h-[320px] rounded-3xl shadow-xl bg-white overflow-hidden transform-gpu cursor-pointer ${
                    isActive ? "scale-105 ring-4 ring-indigo-400" : ""
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-80`} />
                  <img
                    src={`https://source.unsplash.com/600x400/?${s.imgQuery}`}
                    alt={s.title}
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute bottom-5 left-5 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-5 h-5" />
                      <h4 className="font-bold text-sm">{s.title}</h4>
                    </div>
                    <p className="text-xs opacity-90">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ Header */}
      <header className="py-12 px-6 md:px-12 max-w-7xl mx-auto text-center md:text-left">
        <span className="inline-block text-sm px-3 py-1 bg-gray-100 rounded-full mb-4">Our Services</span>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          We listen to your needs, <br /> we design with intent, and we deliver with speed.
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Explore our 16 services — from web & mobile development to cybersecurity and Web3 — each crafted for measurable impact.
        </p>
      </header>

      {/* ✅ Alternating Cards (Left–Right layout) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 pb-20">
        {services.map((s, i) => {
          const Icon = s.icon;
          const isEven = i % 2 === 0;
          const bg = isEven ? "bg-white" : "bg-gray-50";
          const imgUrl = `https://source.unsplash.com/1200x800/?${encodeURIComponent(s.imgQuery)}`;

          return (
            <article
              key={s.title}
              className={`${bg} rounded-3xl overflow-hidden shadow-md`}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const px = (e.clientX - rect.left) / rect.width;
                const py = (e.clientY - rect.top) / rect.height;
                setCursorPos({ x: (px - 0.5) * 18, y: (py - 0.5) * 10 });
              }}
              onMouseLeave={() => setCursorPos({ x: 0, y: 0 })}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Text Side */}
                <motion.div
                  className={`p-10 md:p-16 ${isEven ? "md:order-1" : "md:order-2"}`}
                  {...(isEven ? fadeInLeft : fadeInRight)}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 * i }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-white bg-gradient-to-br ${s.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold">{s.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">{s.desc}</p>
                  <a
                    href={`/services/${slugify(s.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium hover:scale-105 transform transition"
                  >
                    View More
                  </a>
                </motion.div>

                {/* Image Side */}
                <motion.div
                  className={`relative overflow-hidden h-72 md:h-96 ${isEven ? "md:order-2" : "md:order-1"}`}
                  {...(isEven ? fadeInRight : fadeInLeft)}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 * i }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.img
                    src={imgUrl}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: `translate3d(${isEven ? cursorPos.x : -cursorPos.x}px, ${cursorPos.y}px, 0)`,
                    }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

/* Helper */
function slugify(text = "") {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}
