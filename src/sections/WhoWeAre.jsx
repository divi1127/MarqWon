// WhoWeAre.jsx — Glassmorphism MVV Section
import React, { useRef, useState, useEffect } from "react";
import { Title, Meta } from "react-head";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Rocket, Sparkles, ShieldCheck } from "lucide-react";
import hand from "../assets/hand.jpeg";
import hands from "../assets/hands.mp4";


/* ---------- ANIMATION VARIANTS ---------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

/* ---------- PARALLAX SECTION ---------- */
function ScrollParallax({ bg, height = "100vh", overlayOpacity = 0.6, children, textColor = "text-white" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden flex items-center justify-center isolate ${textColor}`}
      style={{ height }}
    >
      <motion.div
        aria-hidden
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          y: bgY,
        }}
        className="absolute w-full h-[125%] -top-[12.5%] left-0 z-0 pointer-events-none grayscale-[30%]"
      />

      <div className="absolute inset-0 bg-black z-1" style={{ opacity: overlayOpacity }} />

      <motion.div style={{ y: contentY }} className="relative z-10 w-full max-w-7xl px-6">
        {children}
      </motion.div>
    </section>
  );
}

/* ---------- GLASS MORPHISM MVV CARD ---------- */
/* ---------- GLASS MORPHISM MVV CARD ---------- */
function MVVCard({ title, text, icon: Icon }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.06,
        backdropFilter: "blur(20px)",
        transition: { duration: 0.3 }
      }}
      className="
        relative p-8 
        bg-white/10 backdrop-blur-xl
        rounded-3xl border border-white/20
        shadow-[0_8px_32px_rgba(0,0,0,0.1)]
        group flex flex-col h-full
        transition-all duration-300
      "
    >
      <div className="relative z-10 flex flex-col h-full">
        
        {/* TITLE + ICON (HORIZONTAL) */}
        <div className="flex items-center gap-6 mb-4">

          <h4 className="text-2xl font-bold tracking-tight text-black drop-shadow-lg">
            {title}
          </h4>

           <div className="
            w-10 h-10 rounded-xl
            flex items-center justify-end
          ">
            <Icon className="w-10 h-6 text-black" />
          </div>

        </div>

        <p className="text-base text-black/90 leading-relaxed font-light flex-grow">
          {text}
        </p>
      </div>

      {/* HOVER GLASS OVERLAY */}
      <div
        className="
          absolute inset-0 rounded-3xl opacity-0
          group-hover:opacity-100 transition-opacity duration-300
          bg-gradient-to-br from-white/10 to-white/5
        "
      />
    </motion.div>
  );
}


/* ---------- MAIN PAGE ---------- */
export default function WhoWeAre() {
  const heroMainImage = "https://i.pinimg.com/736x/4e/cc/1f/4ecc1f16e661104ae4432b4e60695b48.jpg";
  const ctaImage = "https://i.pinimg.com/736x/75/98/ca/7598ca122374bb1fd8df8477ee17e877.jpg";

  /* ---------- FIXED: HOOKS MUST BE INSIDE COMPONENT ---------- */
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);
  
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
  /* ------------------- RETURN UI ------------------- */
  return (
    <div className="w-full text-black font-poppins overflow-x-hidden bg-white">
      <Title>MarqWon Dynamics – Redefining Innovation</Title>
      <Meta name="description" content="MarqWon Dynamics helps businesses thrive with custom software." />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-28 pb-20 px-6 max-w-7xl mx-auto flex items-center min-h-[70vh] bg-white mb-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          
          {/* LEFT COLUMN */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:w-6/12 lg:w-5/12 text-left pr-8"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tighter leading-tight text-gray-900 font-inter"
            >
              The Future Belongs to Those Who Build It.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg font-light text-gray-600 leading-relaxed mb-8">
              MarqWon Dynamics is an innovative software firm focused on building
              custom software, AI automation, cloud systems, mobile apps, and next-gen digital solutions.
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN IMAGE */}
          <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="relative w-full md:w-6/12 lg:w-7/12 mt-12 md:mt-0 flex justify-center"
>
  <div className="
    relative w-full max-w-xl md:max-w-full
    aspect-[4/3] md:aspect-[16/9]
    p-3 md:p-6
  ">
    <img
      src={heroMainImage}
      alt="Team collaboration"
      className="
        w-full h-120 object-cover rounded-2xl shadow-2xl
        transition-all duration-500 
      "
      style={{
        clipPath:
          window.innerWidth < 768
            ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
      }}
    />
  </div>
</motion.div>

        </div>
      </section>

      {/* ================= MVV GLASS CARDS ================= */}
      <section
        className="
          relative w-[95%] mx-auto my-20
          bg-gradient-to-br from-indigo-100 via-orange-100 to-orange-100
          rounded-3xl shadow-xl overflow-hidden font-['Inter'] p-0
          py-24 md:py-32
        "
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-extrabold text-gray-900 mb-12"
        >
          Our Core Principles
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"
        >
       <MVVCard
  title="MISSION"
  icon={Rocket}
  text="Redefining innovation through scalable, future-ready technology solutions. We partner with businesses to design, build, and deliver custom software, AI-driven automation, cloud infrastructure, and secure digital platforms that create real-world impact."
/>

<MVVCard
  title="VISION"
  icon={Sparkles}
  text="To empower organizations of all sizes to achieve more through intelligent, reliable, and adaptable technology. We envision a future where digital transformation drives efficiency, accelerates growth, and unlocks new possibilities."
/>

<MVVCard
  title="VALUES"
  icon={ShieldCheck}
  text="Innovation, integrity, and agility are at the core of everything we do. We think boldly, act responsibly, move fast, and continuously evolve to solve complex challenges with precision, transparency, and purpose."
/>

        </motion.div>
      </section>

    

  {/* -------- STORY CONTENT -------- */}
{/* ================= OUR STORY SECTION (IMAGE LEFT + CONTENT RIGHT) ================= */}
<section className="w-[95%] mx-auto my-32 bg-white rounded-3xl shadow-xl p-6 md:p-14">

  {/* TITLE */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center text-4xl md:text-5xl font-extrabold text-black mb-14"
  >
    Our Story
  </motion.h2>

  {/* MAIN CONTENT ROW */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <img
        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
        alt="Our Story - MarqWon Dynamics"
        className="w-full h-[380px] object-cover rounded-3xl shadow-lg"
      />
    </motion.div>

    {/* RIGHT SIDE CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-gray-700 text-lg leading-relaxed"
    >
      <p className="mb-6">
        At MarqWon, we believe innovation knows no boundaries. Our journey began in 
        <span className="font-semibold text-black"> Madurai</span> — a city celebrated for its heritage, culture, and intellectual spirit.
      </p>

      <p className="mb-6">
        From this strong foundation, we’ve grown into a nationwide technology partner, working with 
        startups, enterprises, innovators, and communities across India.
      </p>

      <p className="mb-6">
        Today, our presence extends from the streets of Madurai to the innovation hubs of 
        <span className="font-semibold text-black"> Bengaluru, Hyderabad, Mumbai, and Delhi</span>.  
        We deliver transformative solutions in AI, cloud architecture, automation, product 
        engineering, mobility, and digital strategy.
      </p>

      <p className="mb-6">
        Whether you’re an emerging startup or a scaling enterprise, 
        <span className="font-semibold text-black"> MarqWon Dynamics </span>
        is your trusted partner for digital innovation, product development, and end-to-end tech transformation.
      </p>

      <p>
        Built in India. Built for the world. Powered by young minds, bold ideas, and next-generation technology.
      </p>
    </motion.div>
  </div>

  {/* ================= OUR DNA ================= */}
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    viewport={{ once: true }}
    className="text-center text-3xl md:text-4xl font-bold text-black mt-24 mb-14"
  >
    Our DNA
  </motion.h3>

  {/* DNA GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

    <div className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-2xl shadow-md">
      <h4 className="text-xl font-semibold mb-3 text-gray-900">Speed & Agility</h4>
      <p className="text-gray-700">We move fast, adapt faster, and execute with precision.</p>
    </div>

    <div className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-2xl shadow-md">
      <h4 className="text-xl font-semibold mb-3 text-gray-900">Innovation-First</h4>
      <p className="text-gray-700">Every challenge is an opportunity to build something extraordinary.</p>
    </div>

    <div className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-2xl shadow-md">
      <h4 className="text-xl font-semibold mb-3 text-gray-900">Next-Gen Vision</h4>
      <p className="text-gray-700">We design solutions that stand strong today and future-proof tomorrow.</p>
    </div>

    <div className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-2xl shadow-md">
      <h4 className="text-xl font-semibold mb-3 text-gray-900">Hustle & Passion</h4>
      <p className="text-gray-700">We build with heart. We create with purpose.</p>
    </div>

  </div>
</section>



      {/* ================= INDUSTRIES SCROLLER ================= */}
<section className="relative w-[95%] mx-auto my-32 font-['Helvetica Neue']">
  <h2 className="text-4xl md:text-5xl font-bold text-black mb-14 text-center mt-10">
    Industries We Support
  </h2>
  {/* Navigation Arrows */}
        <div className="absolute top-[130px] right-0 flex gap-3 z-10">
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
    className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-2"
    style={{ scrollBehavior: "smooth" }}
  >
    {industries.map((item, i) => (
      <div
        key={i}
        className="min-w-[300px] h-[380px] rounded-3xl shadow-lg relative overflow-hidden cursor-pointer mt-20 group"
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>

        <h3 className="absolute bottom-6 left-6 text-2xl font-semibold text-white drop-shadow-lg transition-all duration-300 group-hover:translate-y-[-6px]">
          {item.name}
        </h3>
      </div>
    ))}
  </div>

  {/* Scroll progress bar */}
  <div className="w-full h-1 bg-gray-200 rounded-full mt-13">
    <div
      className="h-full rounded-full"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(to right, #ff7a59, #5271ff)",
      }}
    ></div>
  </div>
</section>
{/* ================= RESPONSIBILITY SECTION (ACCORDION) ================= */}
<section className="w-[95%] mx-auto my-32 font-['Inter']">

  <h2 className="text-4xl md:text-5xl font-bold text-black mb-14">
    Creating Positive Change
  </h2>

  <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mb-16">
    We strive to make a meaningful impact globally by leading responsibly
    and supporting the well-being of our employees, clients, and the
    communities we serve.
  </p>

  {/* --- ACCORDION WRAPPER --- */}
  <div className="w-full bg-[#0a0d33] rounded-3xl shadow-xl p-10 text-white">

    {/* Accordion Item 1 */}
    <details className="border-b border-white/20 py-6 group">
      <summary className="flex items-center justify-between cursor-pointer text-xl font-semibold">
        Digital Trust and Data Privacy
        <span className="transform group-open:rotate-180 transition">
          ▼
        </span>
      </summary>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <p className="text-base leading-relaxed text-white/90">
          We prioritize protecting the digital rights and data privacy of our stakeholders.
          Our commitment includes implementing stringent cybersecurity protocols,
          ensuring transparency in data usage, and adhering to global data protection
          regulations. Trust is the foundation of our digital interactions.
        </p>

       
      </div>
    </details>

    {/* Accordion Item 2 */}
    <details className="border-b border-white/20 py-6 group">
      <summary className="flex items-center justify-between cursor-pointer text-xl font-semibold">
        Community Engagement
        <span className="transform group-open:rotate-180 transition">
          ▼
        </span>
      </summary>

      <p className="mt-6 text-white/90 leading-relaxed">
        We actively contribute to community development, education support,
        youth empowerment, and technology accessibility initiatives.
      </p>
    </details>

    {/* Accordion Item 3 */}
    <details className="border-b border-white/20 py-6 group">
      <summary className="flex items-center justify-between cursor-pointer text-xl font-semibold">
        Ethical Supply Chain
        <span className="transform group-open:rotate-180 transition">
          ▼
        </span>
      </summary>

      <p className="mt-6 text-white/90 leading-relaxed">
        We ensure fair labor, transparent sourcing, and sustainable production
        across all partner networks and vendors.
      </p>
    </details>

  </div>
</section>



 
      {/* ================= CTA PARALLAX ================= */}
      <ScrollParallax bg={hand} height="100vh" overlayOpacity={0.4}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

<h3 className="text-4xl md:text-6xl font-bold mb-8 text-white">
  Build What’s Next
</h3>
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@marqwon.com&su=Partnership%20Request&body=Hi%20MarqWon%2C%0A%0AI%20am%20interested%20in%20partnering%20with%20you.%0A%0APlease%20let%20me%20know%20the%20next%20steps.%0A%0AThanks%2C%0A"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="px-10 py-4 bg-black text-white text-lg font-bold rounded-full hover:scale-105 hover:bg-gray-900 transition-all duration-300 shadow-2xl">
    Partner With Us
  </button>
</a>


        </motion.div>
      </ScrollParallax>

      

    </div>
  );
}



