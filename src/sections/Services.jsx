// ServicesPage.jsx
import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  ShieldCheck,
  Smartphone,
  Workflow,
  Rocket,
  ShoppingBag,
  Brush,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  Zap,
  Layout,
  Layers,
  Cloud,
  Server,
  Key,
  Code,
} from "lucide-react";

/* ------------------------
   DATA & HELPERS
------------------------ */

const CATEGORIES = {
  DEVELOPMENT: "Development",
  BUSINESS_DESIGN: "Business & Design",
  TECH_MARKETING: "Tech & Marketing",
  NETWORKS: "Networks",
};

const services = [
  // DEVELOPMENT (5)
  {
    title: "Website Development",
    category: CATEGORIES.DEVELOPMENT,
    desc: "We build modern, fast, and SEO-optimized websites and web applications tailored to your business needs.",
    icon: Globe,
    imgUrl: "https://i.pinimg.com/736x/1f/9b/bc/1f9bbcdf9179f763ae9849eaca82313e.jpg",
  },
  {
    title: "Application Development",
    category: CATEGORIES.DEVELOPMENT,
    desc: "Full-stack mobile and desktop application development.",
    icon: Smartphone,
    imgUrl: "https://i.pinimg.com/1200x/7b/84/9c/7b849c98e3011ee6e1593518fbd6fd10.jpg",
  },
  {
    title: "CRM, ERP & Workflow Systems",
    category: CATEGORIES.DEVELOPMENT,
    desc: "Bespoke ERP and CRM automation solutions.",
    icon: Workflow,
    imgUrl: "https://i.pinimg.com/1200x/cc/2f/28/cc2f28803b5f077c3b31d12fae24f5be.jpg",
  },
  {
    title: "Custom Software",
    category: CATEGORIES.DEVELOPMENT,
    desc: "Custom software aligned with your business process.",
    icon: Code,
    imgUrl: "https://i.pinimg.com/736x/09/15/54/091554e529bad55281c0f86ad6565e4b.jpg",
  },
  {
    title: "Startup MVP",
    category: CATEGORIES.DEVELOPMENT,
    desc: "Rapid prototyping and MVP development for startups.",
    icon: Rocket,
    imgUrl: "https://i.pinimg.com/1200x/c5/ec/52/c5ec523a122c184e504756db1374e8e6.jpg",
  },

  // BUSINESS & DESIGN (5)
  {
    title: "E-Commerce Development",
    category: CATEGORIES.BUSINESS_DESIGN,
    desc: "Conversion-focused e-commerce platforms.",
    icon: ShoppingBag,
    imgUrl: "https://i.pinimg.com/736x/5e/6b/ed/5e6bed1abbf248bfdf74ca63f481f150.jpg",
  },
  {
    title: "Business Development",
    category: CATEGORIES.BUSINESS_DESIGN,
    desc: "Market entry planning and business scaling.",
    icon: Megaphone,
    imgUrl: "https://i.pinimg.com/736x/14/57/6e/14576ec5332235949b9e53efe279967e.jpg",
  },
  {
    title: "UI/UX Design",
    category: CATEGORIES.BUSINESS_DESIGN,
    desc: "Clean and intuitive digital product design.",
    icon: Layout,
    imgUrl: "https://i.pinimg.com/736x/1e/86/92/1e8692bbc6bb423b046c5f8594d3c5ce.jpg",
  },
  {
    title: "Graphics Design",
    category: CATEGORIES.BUSINESS_DESIGN,
    desc: "Brand visuals, posters, and illustrations.",
    icon: Brush,
    imgUrl: "https://i.pinimg.com/736x/48/44/1d/48441d3e70891c22f1266d7eac86bc6a.jpg",
  },
  {
    title: "Branding & Identity",
    category: CATEGORIES.BUSINESS_DESIGN,
    desc: "Complete branding and identity systems.",
    icon: Layers,
    imgUrl: "https://i.pinimg.com/736x/0e/38/05/0e380529096efb1bd6029b3c6ab2c29f.jpg",
  },

  // TECH & MARKETING (5)
  {
    title: "Game Development",
    category: CATEGORIES.TECH_MARKETING,
    desc: "Immersive 2D and 3D games.",
    icon: Rocket,
    imgUrl: "https://i.pinimg.com/736x/b6/2f/9e/b62f9e7368a03ce1fe867ca96d1dcd04.jpg",
  },
  {
    title: "Cyber Security",
    category: CATEGORIES.TECH_MARKETING,
    desc: "Pen-testing and security monitoring.",
    icon: ShieldCheck,
    imgUrl: "https://i.pinimg.com/736x/cc/58/43/cc5843544f530c6a9108fd67747d06ff.jpg",
  },
  {
    title: "Digital Transformation",
    category: CATEGORIES.TECH_MARKETING,
    desc: "AI, cloud, analytics modernization.",
    icon: Zap,
    imgUrl: "https://i.pinimg.com/736x/00/b4/9e/00b49edb1399e3bed2eea1f4628a7ed8.jpg",
  },
  {
    title: "Crypto & Web3 Solutions",
    category: CATEGORIES.TECH_MARKETING,
    desc: "dApps, smart contracts, blockchain.",
    icon: Layers,
    imgUrl: "https://i.pinimg.com/1200x/d2/b6/90/d2b6905281aad18ce26a1f389f069652.jpg",
  },
  {
    title: "Digital Marketing",
    category: CATEGORIES.TECH_MARKETING,
    desc: "SEO, PPC, social media campaigns.",
    icon: Megaphone,
    imgUrl: "https://i.pinimg.com/736x/86/6d/9a/866d9aee116f675218ca015ccbccb42a.jpg",
  },

  // NETWORKS (4)
  {
    title: "Cloud Networking",
    category: CATEGORIES.NETWORKS,
    desc: "Cloud infra on AWS/Azure/GCP.",
    icon: Cloud,
    imgUrl: "https://i.pinimg.com/736x/0b/c8/28/0bc828902b89ba3ecbb7786be3272112.jpg",
  },
  {
    title: "Server Infrastructure",
    category: CATEGORIES.NETWORKS,
    desc: "High-availability server setups.",
    icon: Server,
    imgUrl: "https://i.pinimg.com/1200x/48/55/5b/48555b5a4bc527be84438c8cb66d26d8.jpg",
  },
  {
    title: "IoT & Smart Devices",
    category: CATEGORIES.NETWORKS,
    desc: "Smart automation and IoT systems.",
    icon: Smartphone,
    imgUrl: "https://i.pinimg.com/1200x/3c/64/5d/3c645dd8e6f5402e97ac24ac27322d5b.jpg",
  },
  {
    title: "Network Security",
    category: CATEGORIES.NETWORKS,
    desc: "Firewalls, IDS, access control.",
    icon: Key,
    imgUrl: "https://i.pinimg.com/1200x/7f/a2/65/7fa265893abc2a78adb61db623a409e5.jpg",
  },
];

const servicesByCategory = Object.values(CATEGORIES).map((c) => ({
  categoryTitle: c,
  services: services.filter((s) => s.category === c),
}));

function slugify(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

/* ------------------------
   PARALLAX HERO + SECTION LAYOUT
------------------------ */

const ParallaxHeader = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="relative h-[420px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={imgUrl} className="w-full h-full object-cover brightness-90" alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="text-center p-6 max-w-4xl">
          <span className="inline-block text-sm px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-4 font-medium">
            Our Services
          </span>

          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">{title}</h1>

          <p className="text-lg opacity-90 mt-3">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

/* ------------------------
   SERVICE CARD
------------------------ */
function ServiceCard({ s, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        relative w-[260px] h-[380px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer 
        transform-gpu transition-transform duration-300 ease-out
        hover:scale-105 hover:shadow-3xl
        will-change-transform
        backface-hidden
      "
    >
      <img
        src={s.imgUrl}
        alt={s.title}
        className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110 will-change-transform"
        draggable="false"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors duration-300" />
      <div className="absolute bottom-5 left-5 right-5 text-white text-center">
        <h3 className="text-lg font-semibold">{s.title}</h3>
      </div>
    </div>
  );
}

/* ------------------------
   CATEGORY SECTION
------------------------ */
/* ------------------------
   CATEGORY SECTION
------------------------ */
function CategorySection({ categoryTitle, services }) {
  const scrollerRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollBy = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 280;
    el.scrollBy({ left: dir * cardWidth * 1.05, behavior: "smooth" });
  };

  const selectedService = services[selectedIndex];

  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left description column */}
        <div className="md:col-span-4 text-black">
          <div className="max-w-md">
            <h3 className="text-5xl font-extrabold leading-tight mb-4">{selectedService.title}</h3>
            <p className="text-lg text-black/80 mb-6">{selectedService.desc}</p>
            <p className="text-black/70">
              Explore our {categoryTitle.toLowerCase()} services to boost your business, enhance digital
              presence, and leverage cutting-edge technology for better results. Each service is tailored
              to your specific needs to maximize efficiency and ROI.
            </p>
          </div>
        </div>

        {/* Right carousel */}
        <div className="md:col-span-8 relative">
          {/* Left arrow */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
            <button
              onClick={() => scrollBy(-1)}
              className="p-2 rounded-full bg-black/70 text-white shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* Right arrow */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
            <button
              onClick={() => scrollBy(1)}
              className="p-2 rounded-full bg-black/70 text-white shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel wrapper with fade edges */}
         <div className="relative overflow-hidden">
  {/* Left fade overlay */}
  <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-10"
       style={{ 
         background: 'linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0))' 
       }} 
  />

  {/* Right fade overlay */}
  <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10"
       style={{ 
         background: 'linear-gradient(to left, rgba(0,0,0,0.3), rgba(0,0,0,0))' 
       }} 
  />
            
            <div
    ref={scrollerRef}
    className="flex gap-6 overflow-x-auto py-6 px-6 scrollbar-hide"
    style={{ scrollBehavior: "smooth" }}
  >
              {services.map((s, idx) => (
      <div key={s.title} className="flex-shrink-0" style={{ flex: "0 0 auto" }}>
        <ServiceCard s={s} onClick={() => setSelectedIndex(idx)} />
      </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ------------------------
   MAIN PAGE
------------------------ */

export default function ServicesPage() {
  const sections = useMemo(() => servicesByCategory, []);
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <ParallaxHeader
        imgUrl="https://i.pinimg.com/1200x/8f/75/60/8f75601ff2d00c7e51582f1032b250d5.jpg"
        title="We Design, Build, and Scale Your Digital Future"
        subtitle="Explore our services across development, design, technology and marketing."
      />

      <div className="pt-10 pb-24">
        {sections.map((sec) => (
          <CategorySection
            key={sec.categoryTitle}
            categoryTitle={sec.categoryTitle}
            services={sec.services}
          />
        ))}
      </div>
    </main>
  );
}
