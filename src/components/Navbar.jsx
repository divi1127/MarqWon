import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logoWhite from "../assets/marq.png";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Who we are", href: "/who-we-are" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Career", href: "/careers" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`max-w-[95%] mx-auto px-6 mt-2 rounded-2xl transition-all duration-500 
          ${
            scrolled
              ? "bg-white/20 backdrop-blur-xl border border-white/10 shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        <div className="flex justify-between items-center h-16 font-cohere">

          {/* LEFT — LOGO */}
          <Link to="/" className="flex items-center">
            <img src={logoWhite} alt="MarqWon" className="h-16" />
            <span className="text-black text-2xl font-semibold tracking-tight">
              MarqWon
            </span>
          </Link>

          {/* CENTER — DESKTOP NAV */}
          <ul className="hidden lg:flex gap-10">
            {links.map((l, i) => {
              const active = location.pathname === l.href;
              return (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.09 }}
                >
                  <Link
                    to={l.href}
                    className={`text-lg transition px-2 py-1 rounded-md
                      ${
                        active
                          ? "font-semibold text-black active-gradient-border"
                          : "text-black/70 hover:text-black hover:border-b-2 hover:border-[#A66BFF]"
                      }
                    `}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          {/* RIGHT — Desktop CTA */}
          <Link
            to="/enquiries"
            className="hidden lg:inline-block relative text-white font-medium px-6 py-2 rounded-full bg-black transition duration-300 hover:scale-[1.04]"
          >
            <span className="absolute inset-0 -z-10 rounded-full blur-xl opacity-80 
              bg-[radial-gradient(circle_at_bottom_left,_rgba(255,120,80,0.6),_rgba(255,0,90,0.5),_rgba(120,80,255,0.4))]
            "></span>
            Request a Call
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-black text-3xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "×" : "≡"}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden bg-white/60 backdrop-blur-xl border border-white/20 shadow-xl mx-4 mt-2 rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6 space-y-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg py-2 ${
                    location.pathname === l.href
                      ? "font-semibold text-black"
                      : "text-black/70"
                  }`}
                >
                  {l.label}
                </Link>
              ))}

              {/* MOBILE CTA */}
              <Link
                to="/enquiries"
                onClick={() => setMobileOpen(false)}
                className="mt-2 text-center bg-black text-white py-2 rounded-full"
              >
                Request a Call
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
