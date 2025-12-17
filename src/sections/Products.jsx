import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import deeplearnerLogo from "../assets/deep.png";
import TrustedBy from "../components/TrustedBy";
import marq from "../assets/logomain.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

// PARALLAX BANNER
const AI_BANNER_URL =
  "https://i.pinimg.com/1200x/c4/e4/fa/c4e4fab939ab349fa4cd836b4b98e637.jpg";

// ... (imports)

const Products = () => {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const products = [
    {
      title: "DeepLearner Academy",
      status: "Live",
      category: "Education",
      description:
        "A next-generation learning platform offering expert-led courses, workshops, and mentorship programs.",
      features: ["Courses", "Live workshops", "Mentor support"],
      benefits: [
        "Affordable quality education",
        "Self-paced learning",
        "Skill development for jobs",
      ],
      link: "https://deeplearner.academy/",
      logo: deeplearnerLogo, // Local import used here
    },

    // NEW PRODUCT: STATUS CHANGED TO "Upcoming"
    {
      title: "SwiftBill Pro",
      status: "Upcoming", // <--- CHANGED TO UPCOMING
      category: "Business / Finance",
      description:
        "An AI-powered invoicing and billing software for small to medium businesses, automating payment tracking and ledger management.",
      features: ["Auto-Invoicing", "GST/Tax Compliance", "Payment Gateway Integration"],
      benefits: [
        "Save time on admin work",
        "Minimize billing errors",
        "Accelerate cash flow",
      ],
      link: null, // Link set to null because it's upcoming
      logo: '', // Placeholder logo URL
    },
    // END OF NEW PRODUCT

    {
      title: "MarqWon Foundation",
      status: "Upcoming",
      category: "Non-Profit / Education",
      description:
        "A social initiative focused on democratizing education, tech awareness, and career support.",
      features: ["Scholarships", "Bootcamps", "Career guidance"],
      benefits: [
        "Accessible education for all",
        "Youth empowerment",
        "Community growth",
      ],
      link: null,
      logo: marq, // Placeholder logo for foundation
    },
  ];

// ...
  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* HERO */}
      <section className="pt-32 pb-20 px-4 text-center relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInUp}
        >
          <motion.p
            custom={0}
            variants={fadeInUp}
            className="text-sm font-semibold tracking-widest text-gray-600 uppercase mb-4"
          >
            PRODUCTS
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeInUp}
            className="text-5xl md:text-7xl  mb-6 text-gray-900 leading-tight"
          >
            Accelerate AI Adoption: From Concept to Scalable Deployment
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Leverage our cutting-edge frontier models and secure enterprise AI
            solutions to maximize efficiency and results.
          </motion.p>

          {/* <motion.button
            custom={3}
            variants={fadeInUp}
            className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Request a demo
          </motion.button> */}
        </motion.div>
      </section>

      {/* --- */}

      {/* PARALLAX */}
      <section className="h-[60vh] overflow-hidden relative z-10">
        <motion.div
          style={{ y: yImage }}
          className="w-full h-[120%] absolute top-[-10%] left-0"
        >
          <img
            src={AI_BANNER_URL}
            alt="Products showcase banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-30"></div>
        </motion.div>

        {/* Text over image */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
            Building the Next Generation of AI Technology
          </h2>
        </div>
      </section>

      {/* --- */}

      {/* BRAND TRUST SECTION */}
      {/* <div>
        <TrustedBy />
      </div> */}

      {/* --- */}

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

                {/* FLEX ROW FOR TITLE AND LOGO */}
<div className="flex flex-row items-center justify-between mb-2">
  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight pr-4">
    {product.title}
  </h3>
  
  {product.logo && (
    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-md">
      <img
        src={product.logo}
        alt="logo"
        className="w-6 h-6 md:w-8 md:h-8 object-contain"
      />
    </div>
  )}
</div>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* FEATURES */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm text-gray-600 uppercase tracking-wide">
                  Features
                </h4>

                <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-gray-500">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* BENEFITS */}
              <div className="mb-8">
                <h4 className="font-semibold mb-3 text-sm text-gray-600 uppercase tracking-wide">
                  Benefits
                </h4>

                <ul className="grid grid-cols-2 gap-2 text-gray-700 text-sm">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="text-gray-500">✔</span> {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* BUTTON */}
              {product.link ? (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all"
                >
                  Visit Live Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="w-full text-center bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg">
                  Coming Soon
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;