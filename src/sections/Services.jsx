import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Layout,
  Cloud,
  Code,
  Cpu,
  ShoppingCart, 
  MonitorSmartphone,
} from "lucide-react";

// ------------------------
//   CATEGORIES (REVISED)
// ------------------------

const CATEGORIES = {
  DEVELOPMENT: "Development",
  BUSINESS_DESIGN: "Business & Design",
  TECH_MARKETING: "Tech & Marketing",
  INFRASTRUCTURE: "IT Infrastructure & Networking",
};

// ------------------------
//   SERVICE DATA (FINAL UPDATE)
// ------------------------

const services = [
  // DEVELOPMENT (Spotify removed)
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
  // SPOTIFY INTEGRATION REMOVED HERE
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

  // BUSINESS & DESIGN (Shopify Added)
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
    title: "Shopify Development", // NEW SERVICE: Shopify
    category: CATEGORIES.BUSINESS_DESIGN,
    desc: "Custom theme design, app integration, and optimization for the Shopify platform.",
    icon: ShoppingCart, // Using ShoppingCart for Shopify
    imgUrl:
      "https://i.pinimg.com/1200x/6e/8b/4c/6e8b4c7d0d0c3c8f8b0d4c1f5e8f4c1f.jpg", // Placeholder image
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "BigCommerce Development",
    category: CATEGORIES.BUSINESS_DESIGN,
    desc: "Building and optimizing high-performance BigCommerce stores for retail growth.",
    icon: MonitorSmartphone,
    imgUrl:
      "https://i.pinimg.com/1200x/2c/8e/3c/2c8e3c8f8d5e8f4e2f8c6d7d5e4b4b4b.jpg",
    color: "from-blue-700 to-indigo-600",
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
    title: "Digital Marketing",
    category: CATEGORIES.TECH_MARKETING,
    desc: "SEO, PPC, social media campaigns.",
    icon: Megaphone,
    imgUrl:
      "https://i.pinimg.com/736x/86/6d/9a/866d9aee116f675218ca015ccbccb42a.jpg",
    color: "from-yellow-500 to-orange-500",
  },

  // IT INFRASTRUCTURE & NETWORKING
  {
    title: "Cloud Networking",
    category: CATEGORIES.INFRASTRUCTURE,
    desc: "Cloud infrastructure setup, deployment, and management on AWS, Azure, or GCP.",
    icon: Cloud,
    imgUrl:
      "https://i.pinimg.com/736x/0b/c8/28/0bc828902b89ba3ecbb7786be3272112.jpg",
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "Compute and Peripherals",
    category: CATEGORIES.INFRASTRUCTURE,
    desc: "Supply, installation, and support for desktops, laptops, servers, and office peripherals.",
    icon: Cpu,
    imgUrl:
      "https://i.pinimg.com/1200x/3c/64/5d/3c645dd8e6f5402e97ac24ac27322d5b.jpg",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Networking and Security",
    category: CATEGORIES.INFRASTRUCTURE,
    desc: "Design, implementation, and maintenance of secure wired and wireless network infrastructure.",
    icon: ShieldCheck,
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
//   PARALLAX HEADER
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
//   MAIN PAGE
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
        subtitle="Explore our services across development, design, technology and IT solutions."
      />

      {/* CATEGORY GRID */}
<div className="pt-10 pb-20">
  {servicesByCategory.map((category, index) => (
    <section
      key={category.categoryTitle}
      className={`py-20 bg-white`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADING */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {category.categoryTitle}
        </motion.h2>

        {/* CUSTOM GRID 3 + 2 CENTER */}
        <div className="w-full">

          {/* FIRST ROW: 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {category.services.slice(0, 3).map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-md 
                      transition-all cursor-pointer group text-gray-900
                      - flex flex-col h-[520px] hover:shadow-xl"
                      // increased height
                >

                  {/* IMAGE */}
                  <div className="h-[240px] overflow-hidden">
                    <img
                      src={s.imgUrl}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 flex flex-col flex-grow">

                    <div className="w-14 h-14 rounded-full mb-4 mt-2 flex items-center justify-center 
    bg-gray-100 shadow-inner border border-gray-200">
  <Icon className="w-7 h-7 text-gray-700" />
</div>


                  <h3 className="text-2xl font-bold mb-2 line-clamp-1 min-h-[32px]">
  {s.title}
</h3>


                    <p className="text-base text-gray-600 leading-relaxed mb-6 flex-grow line-clamp-2">
  {s.desc}
</p>


                    <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100">
                      <Link
                        to={`/services/${slugify(s.title)}`}
                        className="font-semibold text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        Discover Service
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-500">
                        {s.category}
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* SECOND ROW: 2 CENTERED */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-center max-w-4xl mx-auto">
            {category.services.slice(3, 5).map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-md 
                      transition-all cursor-pointer group text-gray-900
                      flex flex-col h-[520px] hover:shadow-xl" // same height
                >

                  {/* IMAGE */}
                  <div className="h-[240px] overflow-hidden">
                    <img
                      src={s.imgUrl}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 flex flex-col flex-grow">

                    <div className="w-14 h-14 rounded-full mb-4 flex items-center justify-center 
                        bg-gray-100 shadow-inner border border-gray-200">
                      <Icon className="w-7 h-7 text-gray-700" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{s.title}</h3>

                    <p className="text-base text-gray-600 leading-relaxed mb-6 flex-grow">
                      {s.desc}
                    </p>

                    <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100">
                      <Link
                        to={`/services/${slugify(s.title)}`}
                        className="font-semibold text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        Discover Service
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-500">
                        {s.category}
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  ))}
</div>

    </main>
  );
}