import React, { useEffect, useRef, useState } from "react";
import { Network, Code, Workflow, Cpu, ShoppingBag, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServicesSection() {
  // Scroll fade animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-item");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scroll = (direction) => {
  if (scrollRef.current) {
    const { scrollLeft, clientWidth } = scrollRef.current;
    // Calculate scroll amount (e.g., width of one card + gap)
    const scrollTo = direction === "left" 
      ? scrollLeft - 332 
      : scrollLeft + 332;
    
    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  }
};

  const services = [
  {
    title: "Crypto & Web3 Solutions",
    desc: "Unlock the future with decentralized decentralized technologies and blockchain integration.",
    icon: Network,
  },
  {
    title: "Custom Application Development",
    desc: "Build tailored mobile and web applications that drive business growth.",
    icon: Code,
  },
  {
    title: "CRM & ERP Systems",
    desc: "Streamline operations with powerful customer and resource management tools.",
    icon: Workflow,
  },
  {
    title: "Digital Transformation Services",
    desc: "Modernize legacy systems and embrace cutting-edge digital practices.",
    icon: Cpu,
  },
  {
    title: "E-Commerce Development",
    desc: "Launch and scale your online store with secure, high-performance solutions.",
    icon: ShoppingBag,
  },
  {
    title: "Cybersecurity Solutions",
    desc: "Safeguard your digital ecosystem with end-to-end protection.",
    icon: ShieldCheck,
  },
];


  // Horizontal scroll progress bar
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const industries = [
  {
    name: "Technology",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    name: "Financial Services",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    name: "Healthcare",
    img: "https://i.pinimg.com/736x/02/20/b0/0220b0514d2348a24b2ee085c4413ab2.jpg",
  },
  {
    name: "Manufacturing",
    img: "https://i.pinimg.com/736x/e2/e2/90/e2e29080ea8b6c74b5e4c3ed1ada3c25.jpg",
  },

  // --- 7 NEW INDUSTRIES BELOW ---

  {
    name: "E-Commerce",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
  {
    name: "Real Estate",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
  },
  {
    name: "Education",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    name: "Travel & Hospitality",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "Logistics & Transportation",
    img: "https://i.pinimg.com/736x/19/9f/eb/199feb6bd46338c69c054efdb7887424.jpg",
  },
  {
    name: "Retail",
    img: "https://images.unsplash.com/photo-1506617420156-8e4536971650",
  },
  {
    name: "Energy & Utilities",
    img: "https://i.pinimg.com/1200x/6f/b6/7c/6fb67c0a7fb9181b245b5c2c44c3725c.jpg",
  },
];


  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateProgress = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setProgress((el.scrollLeft / maxScroll) * 100);
    };

    el.addEventListener("scroll", updateProgress);
    return () => el.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <section className="w-[95%] mx-auto my-24 font-['Helvetica Neue']">

      {/* MAIN TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 fade-item opacity-0 translate-y-6">
        Transforming Ideas into Digital Reality
      </h2>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-30">
        {services.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl shadow-lg bg-white border border-gray-100
                       hover:bg-orange-50 hover:shadow-2xl transition-all duration-300
                       fade-item opacity-0 translate-y-6"
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-gray-500">
  <item.icon size={36} strokeWidth={1.5} />
</div>

              <h3 className="text-2xl font-semibold">{item.title}</h3>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ENTERPRISE SECTION */}
      <section className="w-[95%] mx-auto my-28 font-['Helvetica Neue']">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16 fade-item opacity-0 translate-y-6 mt-40">
          Enterprise-Grade Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mt-30">

          <div className="space-y-4 fade-item opacity-0 translate-y-6" style={{ transitionDelay: "150ms" }}>
            <h3 className="text-2xl font-semibold text-black">Security</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Ensure privacy and compliance with multi-layered protection, access controls,
              and industry-certified security standards.
            </p>
          </div>

          <div className="space-y-4 fade-item opacity-0 translate-y-6" style={{ transitionDelay: "300ms" }}>
            <h3 className="text-2xl font-semibold text-black">Deployment</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Secure your data by deploying within a dedicated virtual private cloud (VPC)
              or on-premises, air-gapped behind your firewall.
            </p>
          </div>

          <div className="space-y-4 fade-item opacity-0 translate-y-6" style={{ transitionDelay: "450ms" }}>
            <h3 className="text-2xl font-semibold text-black">Customization</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Train models on your proprietary data and build customized AI solutions
              tailored to your needs and infrastructure.
            </p>
          </div>

        </div>
      </section>

     {/* INDUSTRIES SCROLLER */}
<section className="w-[95%] mx-auto my-32 font-['Helvetica Neue']">
  <h2 className="text-4xl md:text-5xl font-bold text-black mb-14 text-center mt-10 fade-item opacity-0 translate-y-6">
    Industries We Support
  </h2>

  {/* Navigation Arrows */}
      <div className="flex gap-3 mt-6 md:mt-0 ml-auto mb-4 justify-end">
        <button 
          onClick={() => scroll("left")}
          className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition shadow-sm active:scale-95"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button 
          onClick={() => scroll("right")}
          className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition shadow-sm active:scale-95"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>
  <div
    ref={scrollRef}
    className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-2 fade-item opacity-0 translate-y-6"
    style={{ scrollBehavior: "smooth" }}
  >
    {industries.map((item, i) => (
  <div
    key={i}
    className="min-w-[300px] h-[380px] rounded-3xl shadow-lg relative overflow-hidden cursor-pointer mt-20 group"
  >
    {/* IMAGE (object zoom-out) */}
    <img
  src={item.img}
  alt={item.name}
  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
/>


    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>

    {/* Title */}
    <h3
      className="absolute bottom-6 left-6 text-2xl font-semibold text-white drop-shadow-lg transition-all duration-300 group-hover:translate-y-[-6px]"
    >
      {item.name}
    </h3>
  </div>
))}
  </div>

  {/* Scroll progress bar */}
  <div className="w-full h-1 bg-gray-200 rounded-full mt-13 ">
    <div
      className="h-full rounded-full"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(to right, #ff7a59, #5271ff)",
      }}
    ></div>
  </div>
</section>



<section className="w-full bg-white py-24 px-6 mt-5 fade-item">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-start text-left " // Fixed: Left alignment
    >
      {/* THIN FONT HEADER */}
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-5xl md:text-7xl font-light tracking-tight text-black mb-8 leading-[1.1]"
      >
        Let’s Connect and Build Your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-gray-400 font-extralight ">
        Digital Future
        </span>
      </motion.h2>
      
      {/* THIN FONT DESCRIPTION */}
      <motion.p 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-gray-500 font-light max-w-3xl leading-relaxed mb-12"
      >
        Looking to transform your business through technology? Share your details 
        and our team will get in touch to explore how we can partner for success 
        through <span className="text-black font-normal">custom software development</span>, 
        <span className="text-black font-normal"> AI integration</span>, 
        and <span className="text-black font-normal"> strategic digital transformation</span>.
      </motion.p>

      {/* LEFT ALIGNED BUTTON */}
      <div className="flex flex-col sm:flex-row gap-6 mb-20">
        <Link to="/enquiries">
          <button className="px-12 py-4 bg-black text-white rounded-full text-sm font-light tracking-widest uppercase hover:bg-gray-800 transition-all shadow-lg hover:shadow-black/20">
            Start Your Project
          </button>
        </Link>
      </div>
      
      {/* STATS GRID - LEFT ALIGNED */}
      <div className="w-full pt-12 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="space-y-1">
          <p className="text-4xl font-extralight text-black">99%</p>
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">Client Satisfaction</p>
        </div>
        <div className="space-y-1">
          <p className="text-4xl font-extralight text-black">24/7</p>
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">Expert Support</p>
        </div>
        <div className="space-y-1">
          <p className="text-4xl font-extralight text-black">150+</p>
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">Projects Scaled</p>
        </div>
        <div className="space-y-1">
          <p className="text-4xl font-extralight text-black">Top Tier</p>
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">Security Standards</p>
        </div>
      </div>
    </motion.div>
  </div>
</section>
    </section>
  );
}
