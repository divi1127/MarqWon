import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/marq.png"; // normal logo
import logoWhite from "../assets/marqwon.png"; // white logo

const links = [
  { href: "/who-we-are", label: "Who we are" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/careers", label: "Careers" },
  { href: "/discover-me", label: "Discover more" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Pages that use white logo and text
  const whiteLogoPages = ["/","/products", "/what-we-do", "/discover-me"];
  const useWhiteLogo = whiteLogoPages.includes(location.pathname);

  useEffect(() => {
    const onResize = () => (window.innerWidth >= 1024 ? setOpen(false) : null);
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: scrolled ? 10 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`relative mx-auto max-w-7xl transition-all duration-500 rounded-2xl overflow-hidden
          ${scrolled
            ? `${
                useWhiteLogo
                  ? "bg-black/80 backdrop-blur-xl border border-black/30 shadow-lg"
                  : "bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg"
              }`
            : useWhiteLogo
            ? "bg-black"
            : "bg-transparent"
          }`}
      >
        {/* ✨ White shimmer overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            backgroundPosition: ["200% 0%", "-200% 0%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
            mixBlendMode: "overlay",
          }}
        />

        <div className="relative flex items-center justify-between h-16 px-4 z-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            <img
              src={useWhiteLogo ? logoWhite : logo}
              alt="MarqWon"
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
            <span
              className={`font-semibold tracking-tight hidden sm:block text-2xl ${
                useWhiteLogo ? "text-white" : "text-black"
              }`}
            >
              MarqWon
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6">
            {links.map((l, i) => (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              >
                <Link
                  to={l.href}
                  className={`relative text-sm md:text-[15px] font-medium group transition-all duration-200 
                    ${
                      l.label === "Discover more"
                        ? "px-4 py-2 rounded-xl font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md hover:shadow-lg hover:scale-105"
                        : useWhiteLogo
                        ? "text-white hover:bg-white/20 rounded-xl px-3 py-2"
                        : "text-black hover:bg-gray-100 rounded-xl px-3 py-2"
                    }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 border transition 
              ${
                open
                  ? "border-blue-400 bg-white/30 backdrop-blur-md"
                  : useWhiteLogo
                  ? "border-white text-white hover:bg-white/20"
                  : "border-gray-300 text-black hover:bg-gray-100"
              }`}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl">{open ? "×" : "≡"}</span>
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative lg:hidden px-4 pb-4 z-10"
            >
              <ul className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <Link
                      to={l.href}
                      className={`w-full block rounded-xl px-3 py-2 transition
                        ${
                          useWhiteLogo
                            ? "text-white hover:bg-white/20"
                            : "text-black hover:bg-gray-100"
                        }`}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
