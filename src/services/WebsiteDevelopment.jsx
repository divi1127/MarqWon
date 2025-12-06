// File: src/services/WebsiteDevelopment.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WebsiteDevelopment() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* HERO */}
      <section
        className="relative h-[80vh] w-full bg-cover bg-center bg-fixed flex items-center justify-center mt-30"
        style={{
          backgroundImage: `url("https://i.pinimg.com/1200x/12/5e/bc/125ebc3dc6b2826dabec5ee4b8b93048.jpg")`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60  " />

        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative text-5xl md:text-7xl font-bold text-white drop-shadow-2xl text-center"
        >
          Website Development
        </motion.h1>
      </section>

      {/* INTRO SECTION */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto space-y-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold"
        >
          Leading Website Development Company in Madurai, Tamil Nadu, India.
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-lg text-gray-600 max-w-3xl"
        >
          We build fast, scalable, user-focused websites that convert visitors into customers.
          Our goal is simple — elevate your brand with powerful digital experiences that drive measurable growth.
        </motion.p>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto space-y-20">
        {[
          {
            title: "Custom Website Development",
            desc: "We create bespoke websites tailored to your business goals, ensuring exceptional performance, security, and brand representation.",
            features: [
              "Responsive Design",
              "SEO Optimization",
              "Fast Loading Speed",
              "Secure & Scalable",
            ],
          },
          {
            title: "Web Portals",
            desc: "We develop dynamic portals that enhance user engagement and streamline business processes.",
            features: [
              "User Management",
              "Interactive Dashboards",
              "Data Security",
              "Custom Integrations",
            ],
          },
          {
            title: "Web Applications",
            desc: "Powerful web applications that optimize workflows, boost productivity, and scale with your business.",
            features: [
              "Cloud Integration",
              "Advanced Analytics",
              "High Performance",
              "Cross-Platform Compatibility",
            ],
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {item.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Placeholder image card */}
            <div className="bg-gray-100 rounded-3xl h-80" />
          </motion.div>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto space-y-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold text-center md:text-left"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Expertise and Experience",
              desc:
                "Our team brings years of industry experience and delivers solutions built on modern technologies and best practices.",
            },
            {
              title: "Future-Ready Solutions",
              desc:
                "We build scalable, high-performing systems designed to grow with your business.",
            },
            {
              title: "Proven Methodologies",
              desc:
                "From planning to deployment, our structured approach ensures reliability and success.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-3xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto space-y-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold text-center"
        >
          Technologies We Use
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-lg text-gray-600 max-w-3xl mx-auto text-center"
        >
          We leverage modern, scalable technologies to build secure and high-performance solutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            {
              title: "React & Next.js",
              desc: "Modern UI & SSR.",
            },
            {
              title: "Node.js",
              desc: "Fast backend APIs.",
            },
            {
              title: "MongoDB",
              desc: "Flexible database.",
            },
            {
              title: "TailwindCSS",
              desc: "Responsive UI.",
            },
            {
              title: "AWS & Cloud",
              desc: "Hosting & scaling.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
