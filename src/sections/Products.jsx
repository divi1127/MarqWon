import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const Products = () => {
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
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient Background Glows (unchanged) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-purple-500/30 via-pink-500/30 to-blue-500/30 blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.8 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/25 via-pink-400/25 to-purple-500/25 blur-3xl"
        ></motion.div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]">
            Our Products
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming ideas into digital excellence through innovation,
            design, and technology.
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1}
              variants={fadeInUp}
              className="bg-gray-900/60 backdrop-blur-md border border-gray-700 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)] rounded-3xl p-10 transition-all duration-500"
            >
              {/* Status + Title */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                      product.status === "Live"
                        ? "bg-white text-black"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {product.status}
                  </div>
                  <h3 className="text-3xl font-semibold mb-2 text-white">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-400">{product.category}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm text-gray-300 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-gray-400">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="font-semibold mb-3 text-sm text-gray-300 uppercase tracking-wide">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 border border-gray-700 rounded-md text-xs text-gray-200 bg-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Button */}
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
              >
                Visit Live Site
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
            className="bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-3xl p-12 text-center hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all"
          >
            <h2 className="text-4xl font-semibold mb-4 text-white">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We build high-performance custom software tailored to your brand
              and goals.
            </p>
            <Link to="/enquiries">
              <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition-all">
                Discuss Your Project
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
