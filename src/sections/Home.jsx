import { motion } from "framer-motion";
import { Zap } from "lucide-react"; // for ⚡power icon, you can swap with others

const services = [
  {
    title: "Crypto & Web3 Solutions",
    desc: "Unlock the future with decentralized technologies and blockchain integration.",
  },
  {
    title: "Custom Application Development",
    desc: "Build tailored mobile and web applications that drive business growth.",
  },
  {
    title: "CRM & ERP Systems",
    desc: "Streamline operations with powerful customer and resource management tools.",
  },
  {
    title: "Digital Transformation Services",
    desc: "Modernize legacy systems and embrace cutting-edge digital practices.",
  },
  {
    title: "E-Commerce Development",
    desc: "Launch and scale your online store with secure, high-performance solutions.",
  },
  {
    title: "Cybersecurity Solutions",
    desc: "Safeguard your digital ecosystem with end-to-end protection.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-white py-16 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Transforming Ideas into <span className="text-indigo-600">Digital Reality</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl shadow-lg bg-white border hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
