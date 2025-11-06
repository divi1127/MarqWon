// import React from "react";
// import { motion } from "framer-motion";

// export default function WebsiteDevelopment() {
//   return (
//     <section className="min-h-screen bg-gradient-to-b from-[#0A0F1C] to-[#0C1624] text-white flex flex-col items-center justify-center px-8 py-24">
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-center max-w-4xl"
//       >
//         <h1 className="text-5xl font-extrabold mb-6">
//           Website Development
//         </h1>
//         <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//           Transform your digital presence with scalable, high-performance
//           websites designed for speed, security, and success.
//         </p>
//       </motion.div>

//       {/* Why Section */}
//       <motion.div
//         className="mt-20 max-w-5xl text-left space-y-6"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold text-blue-400">Why Website Development Matters</h2>
//         <p className="text-gray-300 leading-relaxed">
//           A website is the face of your brand. We help businesses craft
//           dynamic, visually stunning, and functionally rich websites that
//           convert visitors into customers — engineered for reliability and
//           performance.
//         </p>
//       </motion.div>

//       {/* What We Do */}
//       <motion.div
//         className="mt-16 max-w-5xl space-y-6"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold text-blue-400">What We Deliver</h2>
//         <ul className="grid sm:grid-cols-2 gap-4 text-gray-300">
//           <li>✅ Custom Design & Development</li>
//           <li>✅ CMS Integration (WordPress, Strapi, etc.)</li>
//           <li>✅ SEO Optimization</li>
//           <li>✅ Responsive & Mobile-First Layouts</li>
//           <li>✅ E-Commerce Websites</li>
//           <li>✅ Performance Tuning & Maintenance</li>
//         </ul>
//       </motion.div>

//       {/* How We Work */}
//       <motion.div
//         className="mt-16 max-w-5xl space-y-6"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold text-blue-400">How We Work</h2>
//         <ol className="list-decimal pl-6 text-gray-300 space-y-2">
//           <li>Discovery & Strategy</li>
//           <li>UI/UX Design & Prototyping</li>
//           <li>Frontend + Backend Development</li>
//           <li>Testing & Performance Optimization</li>
//           <li>Launch & Post-Support</li>
//         </ol>
//       </motion.div>

//       {/* Key Features */}
//       <motion.div
//         className="mt-16 max-w-5xl space-y-6"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold text-blue-400">Key Features</h2>
//         <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
//           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
//             ⚡ Lightning Fast Performance
//           </div>
//           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
//             🔒 Secure & Reliable
//           </div>
//           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
//             📱 Mobile Responsive
//           </div>
//           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
//             🧠 SEO & Analytics Ready
//           </div>
//         </div>
//       </motion.div>

//       {/* Enquiry Form */}
//       <motion.div
//         className="mt-24 max-w-3xl w-full text-left space-y-4 bg-white/10 p-8 rounded-2xl border border-white/20"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h3 className="text-2xl font-bold text-blue-400">Enquire Now</h3>
//         <form className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white"
//           />
//           <textarea
//             placeholder="Project Details"
//             rows="4"
//             className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white"
//           />
//           <button
//             type="submit"
//             className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all"
//           >
//             Submit Enquiry
//           </button>
//         </form>
//       </motion.div>
//     </section>
//   );
// }
