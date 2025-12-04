import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

// ------------------------
//   CATEGORIES
// ------------------------

const CATEGORIES = {
  DEVELOPMENT: "Development",
  BUSINESS_DESIGN: "Business & Design",
  TECH_MARKETING: "Tech & Marketing",
  NETWORKS: "Networks",
};

// ------------------------
//   SERVICE DATA
// ------------------------

const services = [
  {
    title: "Website Development",
    category: CATEGORIES.DEVELOPMENT,
    desc: "We build modern, fast, and SEO-optimized websites and web applications tailored to your business needs.",
    icon: Globe,
    imgUrl:
      "https://i.pinimg.com/736x/1f/9b/bc/1f9bbcdf9179f763ae9849eaca82313e.jpg",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Application Development",
    category: CATEGORIES.DEVELOPMENT,
    desc: "Full-stack mobile and desktop application development.",
    icon: Smartphone,
    imgUrl:
      "https://i.pinimg.com/1200x/7b/84/9c/7b849c98e3011ee6e1593518fbd6fd10.jpg",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "CRM, ERP & Workflow Systems",
    category: CATEGORIES.DEVELOPMENT,
    desc: "Bespoke ERP and CRM automation solutions.",
    icon: Workflow,
    imgUrl:
      "https://i.pinimg.com/1200x/cc/2f/28/cc2f28803b5f077c3b31d12fae24f5be.jpg",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Custom Software",
    category: CATEGORIES.DEVELOPMENT,
    desc: "Custom software aligned with your business process.",
    icon: Code,
    imgUrl:
      "https://i.pinimg.com/736x/09/15/54/091554e529bad55281c0f86ad6565e4b.jpg",
    color: "from-indigo-500 to-sky-500",
  },
  {
    title: "Startup MVP",
    category: CATEGORIES.DEVELOPMENT,
    desc: "Rapid prototyping and MVP development for startups.",
    icon: Rocket,
    imgUrl:
      "https://i.pinimg.com/1200x/c5/ec/52/c5ec523a122c184e504756db1374e8e6.jpg",
    color: "from-red-500 to-pink-500",
  },

  // BUSINESS & DESIGN
  {
    title: "E-Commerce Development",
    category: CATEGORIES.BUSINESS_DESIGN,
    desc: "Conversion-focused e-commerce platforms.",
    icon: ShoppingBag,
    imgUrl:
      "https://i.pinimg.com/736x/5e/6b/ed/5e6bed1abbf248bfdf74ca63f481f150.jpg",
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Business Development",
    category: CATEGORIES.BUSINESS_DESIGN,
    desc: "Market entry planning and business scaling.",
    icon: Megaphone,
    imgUrl:
      "https://i.pinimg.com/736x/14/57/6e/14576ec5332235949b9e53efe279967e.jpg",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "UI/UX Design",
    category: CATEGORIES.BUSINESS_DESIGN,
    desc: "Clean and intuitive digital product design.",
    icon: Layout,
    imgUrl:
      "https://i.pinimg.com/736x/1e/86/92/1e8692bbc6bb423b046c5f8594d3c5ce.jpg",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Graphics Design",
    category: CATEGORIES.BUSINESS_DESIGN,
    desc: "Brand visuals, posters, and illustrations.",
    icon: Brush,
    imgUrl:
      "https://i.pinimg.com/736x/48/44/1d/48441d3e70891c22f1266d7eac86bc6a.jpg",
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Branding & Identity",
    category: CATEGORIES.BUSINESS_DESIGN,
    desc: "Complete branding and identity systems.",
    icon: Layers,
    imgUrl:
      "https://i.pinimg.com/736x/0e/38/05/0e380529096efb1bd6029b3c6ab2c29f.jpg",
    color: "from-indigo-500 to-sky-500",
  },

  // TECH & MARKETING
  {
    title: "Game Development",
    category: CATEGORIES.TECH_MARKETING,
    desc: "Immersive 2D and 3D games.",
    icon: Rocket,
    imgUrl:
      "https://i.pinimg.com/736x/b6/2f/9e/b62f9e7368a03ce1fe867ca96d1dcd04.jpg",
    color: "from-teal-500 to-green-500",
  },
  {
    title: "Cyber Security",
    category: CATEGORIES.TECH_MARKETING,
    desc: "Pen-testing and security monitoring.",
    icon: ShieldCheck,
    imgUrl:
      "https://i.pinimg.com/736x/cc/58/43/cc5843544f530c6a9108fd67747d06ff.jpg",
    color: "from-gray-700 to-black",
  },
  {
    title: "Digital Transformation",
    category: CATEGORIES.TECH_MARKETING,
    desc: "AI, cloud, analytics modernization.",
    icon: Zap,
    imgUrl:
      "https://i.pinimg.com/736x/00/b4/9e/00b49edb1399e3bed2eea1f4628a7ed8.jpg",
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Crypto & Web3 Solutions",
    category: CATEGORIES.TECH_MARKETING,
    desc: "dApps, smart contracts, blockchain.",
    icon: Layers,
    imgUrl:
      "https://i.pinimg.com/1200x/d2/b6/90/d2b6905281aad18ce26a1f389f069652.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Digital Marketing",
    category: CATEGORIES.TECH_MARKETING,
    desc: "SEO, PPC, social media campaigns.",
    icon: Megaphone,
    imgUrl:
      "https://i.pinimg.com/736x/86/6d/9a/866d9aee116f675218ca015ccbccb42a.jpg",
    color: "from-yellow-500 to-orange-500",
  },

  // NETWORKS
  {
    title: "Cloud Networking",
    category: CATEGORIES.NETWORKS,
    desc: "Cloud infra on AWS/Azure/GCP.",
    icon: Cloud,
    imgUrl:
      "https://i.pinimg.com/736x/0b/c8/28/0bc828902b89ba3ecbb7786be3272112.jpg",
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "Server Infrastructure",
    category: CATEGORIES.NETWORKS,
    desc: "High-availability server setups.",
    icon: Server,
    imgUrl:
      "https://i.pinimg.com/1200x/48/55/5b/48555b5a4bc527be84438c8cb66d26d8.jpg",
    color: "from-red-600 to-purple-600",
  },
  {
    title: "IoT & Smart Devices",
    category: CATEGORIES.NETWORKS,
    desc: "Smart automation and IoT systems.",
    icon: Smartphone,
    imgUrl:
      "https://i.pinimg.com/1200x/3c/64/5d/3c645dd8e6f5402e97ac24ac27322d5b.jpg",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Network Security",
    category: CATEGORIES.NETWORKS,
    desc: "Firewalls, IDS, access control.",
    icon: Key,
    imgUrl:
      "https://i.pinimg.com/1200x/7f/a2/65/7fa265893abc2a78adb61db623a409e5.jpg",
    color: "from-teal-500 to-cyan-600",
  },
];

// GROUP BY CATEGORY
const servicesByCategory = Object.values(CATEGORIES).map((c) => ({
  categoryTitle: c,
  services: services.filter((s) => s.category === c),
}));

// SLUGIFY
function slugify(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

// ------------------------
//   PARALLAX HEADER
// ------------------------

const ParallaxHeader = ({ imgUrl, title, subtitle }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div ref={ref} className="relative h-[700px] overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <img src={imgUrl} className="w-full h-full object-cover" />
      </motion.div>

      <div className="relative z-10 flex items-center justify-center h-full text-black">
        <div className="text-center p-6 max-w-4xl">
          <span className="inline-block text-sm px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4 font-medium">
            Our Services
          </span>

          <motion.h1
            className="text-5xl md:text-6xl font-bold drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-xl opacity-90 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

// ------------------------
//   MAIN PAGE
// ------------------------

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % services.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  useEffect(() => {
    const autoScroll = setInterval(nextSlide, 3500);
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[white] text-gray-900">

      {/* PARALLAX HEADER */}
      <ParallaxHeader
        imgUrl="https://i.pinimg.com/1200x/8f/75/60/8f75601ff2d00c7e51582f1032b250d5.jpg"
        title="We Design, Build, and Scale Your Digital Future"
        subtitle="Explore our services across development, design, technology and marketing."
      />

      {/* 3D CAROUSEL */}
      <section className="py-20 bg-gradient-to-b from-white to-[#faf8f6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold">
              Our Flagship Offerings
            </h3>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-white border shadow-md hover:bg-gray-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-white border shadow-md hover:bg-gray-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CURVED 3D CAROUSEL */}
          <div className="relative flex items-center justify-center h-[500px] perspective-[1400px] overflow-visible">
            {services.map((s, i) => {
              const offset = (i - currentIndex + services.length) % services.length;
              const position =
                offset > services.length / 2 ? offset - services.length : offset;

              const baseX = position * 260;
              const curveAdjust = Math.sin((position / 5) * Math.PI) * 50;
              const translateX = baseX + curveAdjust;

              const rotateY = position * -18;
              const scale = 1 - Math.abs(position) * 0.07;
              const zIndex = 200 - Math.abs(position);
              const isActive = position === 0;

              return (
                <motion.div
                  key={s.title}
                  className={`absolute top-1/2 left-1/2 w-[300px] h-[400px] rounded-3xl shadow-2xl bg-white overflow-hidden transform-gpu cursor-pointer transition-all duration-300 ${
                    isActive ? "scale-110" : ""
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${
                      -Math.abs(position) * 180
                    }px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity: Math.abs(position) > 4 ? 0 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  onClick={() => setCurrentIndex(i)}
                >
                  <img src={s.imgUrl} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  {isActive && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl font-light tracking-wide">
                      {s.title}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <div className="pt-10 pb-20">
        {servicesByCategory.map((category, index) => (
          <section
            key={category.categoryTitle}
            className={`py-20 ${
              index % 2 === 0 ? "bg-white" : "bg-[#f4f1ee]"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-center mb-14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {category.categoryTitle}
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                   <motion.div
  key={s.title}
  initial={{ opacity: 0, y: 80, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.12 }}
  className="relative overflow-hidden rounded-3xl
             bg-white/80 backdrop-blur-lg border border-white/40 
             shadow-xl hover:shadow-2xl hover:-translate-y-3 
             transition-all cursor-pointer group text-gray-900
             p-8 h-[360px] flex flex-col"
>
  {/* Background Abstract Shape */}
  <div
    className={`absolute -bottom-20 -right-14 w-56 h-56 
                rounded-full opacity-10 blur-lg bg-gradient-to-br ${s.color}`}
  />

  {/* Icon */}
  <div
    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center 
               bg-white/70 backdrop-blur-md border border-white/40 shadow-sm
               transition-all group-hover:scale-110"
  >
    <Icon className="w-9 h-9 text-gray-900" />
  </div>

  {/* Title */}
  <h3 className="text-2xl font-semibold mb-3 
                 transition-all group-hover:text-blue-600">
    {s.title}
  </h3>

  {/* Description */}
  <p className="text-base text-gray-600 leading-relaxed mb-6 flex-grow">
    {s.desc}
  </p>

  {/* Footer */}
  <div className="flex items-center justify-between text-sm">
    <a
      href={`/services/${slugify(s.title)}`}
      className="font-semibold text-blue-600 transition-colors group-hover:text-blue-800"
    >
      Explore →
    </a>
    <span className="text-gray-500 text-xs">
      {s.category}
    </span>
  </div>
</motion.div>

                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
