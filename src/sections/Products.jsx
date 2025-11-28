import { motion, useScroll, useTransform } from "framer-motion"; 
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import deeplearnerLogo from "../assets/deep.jpg";
import TrustedBy from "../components/TrustedBy";
// ❌ REMOVED: import parallaxBanner from "../assets/image_cd4380.jpg"; 
// We will use a direct URL instead

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

// 🌐 DIRECT IMAGE URL FOR PARALLAX BANNER 🌐
const AI_BANNER_URL = "https://i.pinimg.com/1200x/c4/e4/fa/c4e4fab939ab349fa4cd836b4b98e637.jpg";

const Products = () => {
  const { scrollYProgress } = useScroll();
  
  // Calculate the y position offset based on scroll progress (0 to 1)
  // This transforms scroll progress into an output range of movement (e.g., -100px to 100px)
  const yImage = useTransform(scrollYProgress, [0, 1], [-100, 100]); 

  const products = [
    {
      title: "DeepLearner",
      status: "Live",
      category: "Education",
      description:
        "An innovative learning platform offering expert-led courses, interactive workshops, and mentorship programs — designed to empower students and professionals worldwide.",
      features: ["Courses", "Workshops", "Mentors"],
      tech: ["React", "Node.js", "MySQL"],
      link: "https://deeplearner.academy/",
      logo: deeplearnerLogo,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 text-center relative z-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeInUp}>
          
          <motion.p custom={0} variants={fadeInUp} className="text-sm font-semibold tracking-widest text-gray-600 uppercase mb-4">
            PRODUCTS
          </motion.p>

          <motion.h1 
            custom={1} 
            variants={fadeInUp} 
            className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-tight"
          >
            Accelerate AI Adoption: From Concept to Scalable Deployment
          </motion.h1>

          <motion.p 
            custom={2} 
            variants={fadeInUp} 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Leverage our cutting-edge **frontier models** and comprehensive **development tools** to securely architect, build, and deploy reliable **enterprise AI solutions** that maximize efficiency and results.
          </motion.p>
          
          <motion.button
            custom={3}
            variants={fadeInUp}
            className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Request a demo
          </motion.button>

        </motion.div>
      </section>

      {/* 🖼️ PARALLAX IMAGE SECTION (NEW) 🖼️ */}
      <section className="h-[60vh] overflow-hidden relative z-10">
        {/* The motion.div uses the calculated 'yImage' style to move slower than the scroll */}
        <motion.div 
          style={{ y: yImage }}
          className="w-full h-[120%] absolute top-[-10%] left-0" // Increased height to cover movement
        >
          <img
            src={AI_BANNER_URL} // ⬅️ Source now uses the external URL string
            alt="Products showcase banner"
            className="w-full h-full object-cover"
          />
          {/* Optional: Add a dark overlay for better text contrast later */}
          <div className="absolute inset-0 bg-black opacity-30"></div> 
        </motion.div>
        
        {/* Optional: Add text over the image */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="absolute inset-0 flex items-center justify-center z-30">
    <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
        Building the Next Generation of AI Technology
    </h2>
</div>
        </div>

      </section>

<div>

  <TrustedBy />
</div>
      {/* ------------------------------------ */}

      {/* PRODUCT GRID */}
      <section className="py-20 relative z-10 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1}
              variants={fadeInUp}
              className="bg-white border border-gray-200 hover:shadow-[0_0_20px_rgba(0,0,0,0.08)] rounded-3xl p-10 transition-all duration-500"
            >
              {/* STATUS + TITLE */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                      product.status === "Live"
                        ? "bg-black text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {product.status}
                  </div>

                  {/* LOGO AND TITLE */}
                  <div className="flex items-center mb-2">
                    <h3 className="text-3xl font-semibold text-gray-900 mr-3"> 
                      {product.title}
                    </h3>

                    {product.logo && (
                      <img
                        src={product.logo}
                        alt={`${product.title} logo`}
                        className="h-8 w-auto object-contain rounded-lg"
                      />
                    )}
                  </div>

                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

              {/* FEATURES */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm text-gray-600 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-gray-500">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* TECH STACK */}
              <div className="mb-8">
                <h4 className="font-semibold mb-3 text-sm text-gray-600 uppercase tracking-wide">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 border border-gray-300 rounded-md text-xs text-gray-800 bg-gray-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* VISIT LIVE BUTTON */}
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all"
              >
                Visit Live Site
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}

        </div>
      </section>

      {/* The CTA section was removed in the previous prompt, but I'll add a simple spacer to balance the layout if needed. */}
      {/* <section className="py-20 relative z-10"></section> */}

    </div>
  );
};

export default Products;