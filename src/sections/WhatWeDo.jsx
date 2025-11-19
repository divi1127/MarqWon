// import React, { useRef, useLayoutEffect } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {
//   Code,
//   Server,
//   Smartphone,
//   Cpu,
//   Database,
//   ShieldCheck,
//   Palette,
//   Cloud,
//   Stethoscope,
//   GraduationCap,
//   ShoppingCart,
//   Banknote,
//   Factory,
//   Truck,
// } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const WhatWeDo = () => {
//   const containerRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.utils.toArray(".fade-up").forEach((el) => {
//         gsap.from(el, {
//           y: 50,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 80%",
//             toggleActions: "play none none none",
//           },
//         });
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const capabilities = [
//     {
//       icon: Code,
//       title: "Web & Application Development",
//       description:
//         "Building fast, scalable, and secure web applications and enterprise platforms using React, Node.js, and modern frameworks.",
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile Solutions",
//       description:
//         "Native and cross-platform mobile apps designed for optimal performance, usability, and business growth.",
//     },
//     {
//       icon: Cpu,
//       title: "AI & Machine Learning",
//       description:
//         "Implementing intelligent systems, predictive analytics, and data-driven solutions to automate and optimize business processes.",
//     },
//     {
//       icon: Cloud,
//       title: "Cloud Infrastructure",
//       description:
//         "End-to-end cloud solutions including deployment, migration, and scalable architecture on AWS, Azure, and GCP.",
//     },
//     {
//       icon: Database,
//       title: "Data Engineering & Analytics",
//       description:
//         "Designing robust ETL pipelines, big data processing, and advanced analytics for actionable business insights.",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Cybersecurity & Compliance",
//       description:
//         "Protecting systems with penetration testing, audits, and industry-standard compliance frameworks.",
//     },
//     {
//       icon: Palette,
//       title: "UI/UX Design",
//       description:
//         "Crafting engaging, user-centered interfaces and digital experiences that drive conversions and retention.",
//     },
//     {
//       icon: Server,
//       title: "IoT & Automation",
//       description:
//         "Connected devices, sensor networks, and automation solutions that enhance operational efficiency.",
//     },
//   ];

//   const industries = [
//     {
//       name: "Healthcare",
//       description:
//         "We help healthcare providers build telemedicine platforms, electronic health records, and patient management systems.",
//       icon: Stethoscope,
//     },
//     {
//       name: "Education",
//       description:
//         "Creating e-learning solutions, LMS platforms, and interactive tools for remote and hybrid education.",
//       icon: GraduationCap,
//     },
//     {
//       name: "E-Commerce & Retail",
//       description:
//         "Optimizing online stores, inventory, and customer analytics for better engagement and revenue growth.",
//       icon: ShoppingCart,
//     },
//     {
//       name: "Finance & Banking",
//       description:
//         "Developing secure fintech solutions, payment gateways, and fraud-prevention systems.",
//       icon: Banknote,
//     },
//     {
//       name: "Manufacturing & Industry 4.0",
//       description:
//         "Providing smart factory solutions, supply chain optimization, and predictive maintenance systems.",
//       icon: Factory,
//     },
//     {
//       name: "Logistics & Transportation",
//       description:
//         "Fleet management, route optimization, and logistics platforms that reduce costs and improve efficiency.",
//       icon: Truck,
//     },
//   ];

//   const processSteps = [
//     {
//       step: "Discover",
//       description:
//         "Understanding your business goals, target audience, and challenges to define the right solution.",
//     },
//     {
//       step: "Design",
//       description:
//         "Prototyping and designing user experiences and interfaces with focus on usability and aesthetics.",
//     },
//     {
//       step: "Develop",
//       description:
//         "Writing clean, scalable, and secure code while integrating modern frameworks and technologies.",
//     },
//     {
//       step: "Deliver",
//       description:
//         "Deploying, testing, and supporting your solution for high performance and measurable business impact.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white" ref={containerRef}>
//       {/* Hero */}
//       <section className="pt-32 pb-20 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/80" />
//         <div className="container mx-auto relative z-10 text-center max-w-4xl">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
//           >
//             What We Do
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-gray-300"
//           >
//             We provide enterprise-grade IT solutions that drive innovation,
//             growth, and efficiency across industries.
//           </motion.p>
//         </div>
//       </section>

//       {/* Capabilities */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-16 fade-up">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Capabilities</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Cutting-edge IT services designed to solve complex business
//               challenges and accelerate growth.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {capabilities.map((capability) => {
//               const Icon = capability.icon;
//               return (
//                 <div
//                   key={capability.title}
//                   className="fade-up p-6 h-full bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-500 shadow-lg group"
//                 >
//                   <div className="w-16 h-16 rounded-xl bg-black/70 flex items-center justify-center mb-4 shadow-md transition-colors duration-300 group-hover:bg-gradient-to-br from-gray-700 to-gray-900">
//                     <Icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2 text-gray-200 group-hover:text-white transition-colors duration-300">
//                     {capability.title}
//                   </h3>
//                   <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
//                     {capability.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Industries */}
//       <section className="py-20 px-4 bg-black/80">
//         <div className="container mx-auto">
//           <div className="text-center mb-16 fade-up">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Delivering sector-specific solutions to help businesses achieve
//               operational excellence.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {industries.map((industry) => {
//               const Icon = industry.icon;
//               return (
//                 <div
//                   key={industry.name}
//                   className="fade-up p-8 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-500 shadow-lg group"
//                 >
//                   <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-xl bg-black/70 group-hover:bg-gradient-to-br from-gray-700 to-gray-900 transition-colors duration-300">
//                     <Icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
//                   </div>
//                   <h3 className="text-2xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors">
//                     {industry.name}
//                   </h3>
//                   <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
//                     {industry.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Approach */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto">
//           <div className="text-center mb-16 fade-up">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               A structured process ensuring maximum ROI, quality delivery, and
//               scalable technology solutions.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {processSteps.map((step, idx) => (
//               <div
//                 key={step.step}
//                 className="fade-up p-6 text-center bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl relative overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-500 shadow-lg group"
//               >
//                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
//                 <div className="w-16 h-16 rounded-full bg-gray-700 text-gray-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:bg-gray-900 group-hover:text-white transition-colors">
//                   {idx + 1}
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-200 group-hover:text-white transition-colors">
//                   {step.step}
//                 </h3>
//                 <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-200 transition-colors">
//                   {step.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WhatWeDo;
