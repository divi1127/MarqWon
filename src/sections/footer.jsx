import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Linkedin,  } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


export default function Footer() {
  return (
    <>
      <footer className="relative bg-black text-gray-300 py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
        {/* 🌫 Background Text (MARQWON) */}
        <motion.h1
          className="absolute bottom-[5rem] left-0 w-full text-center text-[8rem] sm:text-[11rem] lg:text-[13rem] font-extrabold tracking-tight select-none pointer-events-none bg-gradient-to-t from-gray-800 via-gray-700/70 to-gray-900/30 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          transition={{ duration: 1 }}
          style={{
            fontFamily: "Poppins, sans-serif",
            letterSpacing: "-0.03em",
            lineHeight: "0.9",
          }}
        >
          MARQWON
        </motion.h1>

        {/* 🔹 Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* 🧠 Brand Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text"
            >
              Marq<span className="text-gray-400">Won</span>
            </motion.h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
              Crafting digital experiences that move businesses forward with
              innovation and purpose.
            </p>
          </div>

          {/* 🔗 Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
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
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* 💼 Company Info */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>MarqWon Dynamic Pvt. Ltd.</li>
              <li>Madurai, India</li>
            </ul>
          </div>

          {/* 🌐 Connect With Us */}
          <div className="flex flex-col items-center sm:items-end">
            <h3 className="font-semibold text-lg text-white mb-4">
              Connect With Us
            </h3>

            <ul className="space-y-2 text-sm sm:text-base text-center sm:text-right">
              <li>
                <a href="mailto:info@marqwon.com" className="hover:text-white">
                  info@marqwon.com
                </a>
              </li>
              <li>
                <a href="tel:+916384942259" className="hover:text-white">
                  +91 63849 42259
                </a>
              </li>
            </ul>

            {/* 🌍 Social Links */}
            <div className="flex gap-4 mt-4">
  {[
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/marq-won/",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/marqwon.mw?igsh=a2RucnBkdDI4Njdt",
    },
    { Icon: FaWhatsapp, href: "https://wa.me/916384942259" }

  ].map(({ Icon, href }, i) => (
    <motion.a
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15 }}
      className="p-2 rounded-full border border-gray-700 hover:border-white transition-all duration-300 flex items-center justify-center"
    >
      {Icon === "whatsapp" ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-4 h-4 hover:scale-110 transition-transform duration-200"
        />
      ) : (
        <Icon size={18} className="text-gray-400 hover:text-white" />
      )}
    </motion.a>
  ))}
</div>


            <p className="mt-5 text-xs sm:text-sm text-gray-500 italic">
              “Innovation never sleeps.”
            </p>
          </div>
        </div>

        {/* 🧾 Copyright */}
        <div className="absolute bottom-3 left-0 w-full text-center text-gray-600 text-xs sm:text-sm z-20">
          © {new Date().getFullYear()} MarqWon Dynamic Pvt. Ltd. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}
