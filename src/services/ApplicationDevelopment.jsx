// File: src/services/ApplicationDevelopment.jsx
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ApplicationDevelopment() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* HERO */}
      <section
        className="relative h-[80vh] w-full bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: `url("https://i.pinimg.com/1200x/5e/44/4a/5e444a74ff3a910b6f12d3d4d54d03da.jpg")`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative text-5xl md:text-7xl font-bold text-white drop-shadow-2xl text-center"
        >
          Application Development
        </motion.h1>
      </section>

      {/* INTRO SECTION */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto space-y-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          Top Application Development Company in India.
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl"
        >
          We build powerful, scalable, and user-centric applications that solve real business problems.
          Whether it's mobile apps, enterprise applications, or cross-platform solutions, our
          development process ensures performance, usability, and long-term scalability.
        </motion.p>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto space-y-20">
        {[
          {
            title: "Mobile App Development",
            desc: "We design and build feature-rich mobile apps for Android and iOS with exceptional UX.",
            features: [
              "Native & Hybrid Apps",
              "Smooth User Experience",
              "Offline Functionality",
              "Scalable Architecture",
            ],
          },
          {
            title: "Enterprise Applications",
            desc: "Streamline operations and improve efficiency with custom business applications.",
            features: [
              "Workflow Automation",
              "Role-Based Security",
              "Real-Time Analytics",
              "Integration with ERPs",
            ],
          },
          {
            title: "Cross-Platform Development",
            desc: "Build once, deploy everywhere with consistent performance and UI.",
            features: [
              "React Native & Flutter",
              "Shared Codebase",
              "High Performance",
              "Cost-Effective Solutions",
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
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center md:text-left"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Agile Development",
              desc:
                "We follow iterative development cycles that accelerate delivery and reduce risk.",
            },
            {
              title: "User-Centric Design",
              desc:
                "Every app is designed to provide a seamless experience and drive engagement.",
            },
            {
              title: "High Performance",
              desc:
                "Apps built with efficient architecture ensuring speed and scalability.",
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
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center"
        >
          Technologies We Use
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-3xl mx-auto text-center"
        >
          We use modern tools, frameworks, and cloud technologies to build high-performance applications.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            { title: "React Native", desc: "Cross-platform apps." },
            { title: "Flutter", desc: "Fast UI development." },
            { title: "Node.js", desc: "Backend APIs & services." },
            { title: "Firebase", desc: "Auth & realtime DB." },
            { title: "AWS & Cloud", desc: "Hosting & scaling." },
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
