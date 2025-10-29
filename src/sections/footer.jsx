import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white overflow-hidden py-14 sm:py-16 px-5 sm:px-8 lg:px-16 mt-20">
      {/* 🌟 Animated glow lines background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-24 sm:h-32 bg-gradient-to-b from-purple-500 via-pink-400 to-blue-400 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: ["0%", "100%", "0%"],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* 🔹 Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 text-center sm:text-left">
        {/* 🟣 Logo + tagline */}
        <div className="flex flex-col items-center sm:items-start">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
          >
            MarqWon
          </motion.h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xs mx-auto sm:mx-0 leading-relaxed">
            Powering tomorrow’s innovations with smarter technology and boundless creativity.
          </p>
        </div>

        {/* 🔗 Quick links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-semibold text-lg mb-3 text-purple-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              { name: "Who we are", to: "/who-we-are" },
              { name: "What we do", to: "/what-we-do" },
              { name: "Services", to: "/services" },
              { name: "Products", to: "/products" },
              { name: "Careers", to: "/careers" },
            ].map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.to}
                  className="hover:text-white text-sm sm:text-base transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* 🌐 Social + animation */}
        <div className="flex flex-col items-center sm:items-end gap-4">
          <h3 className="font-semibold text-lg text-purple-400">Stay Connected</h3>

          <div className="flex flex-wrap justify-center sm:justify-end gap-4">
            {/* Facebook */}
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-white/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={18} className="sm:w-5 sm:h-5" />
            </motion.a>

            {/* Twitter */}
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-white/20 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter size={18} className="sm:w-5 sm:h-5" />
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/marqwon.mw?igsh=a2RucnBkdDI4Njdt"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-white/20 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 transition-all duration-300"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={18} className="sm:w-5 sm:h-5" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/company/marq-won/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-white/20 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </motion.a>
          </div>

          {/* 🌠 Animated tagline */}
          <motion.p
            className="mt-3 text-xs sm:text-sm text-gray-400 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            “Innovation never sleeps.”
          </motion.p>
        </div>
      </div>

      {/* 🔸 Divider line */}
      <div className="relative z-10 border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} MarqWon Dynamic Pvt. Ltd. All rights reserved.
      </div>

      {/* ✨ Bottom glowing border */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 100%" }}
      />
    </footer>
  );
}
