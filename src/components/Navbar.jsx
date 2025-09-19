import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/marq.png";

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
        className={`mx-auto max-w-7xl transition-all duration-500
          ${scrolled
            ? "mt-4 bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg"
            : "mt-0 bg-transparent border-none shadow-none"}
          rounded-2xl`}
      >
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 relative group">
            <img src={logo} alt="MarqWon" className="h-7 w-auto" />
            <span className="font-semibold tracking-tight hidden sm:block active-shine">
              MarqWon
            </span>
          </Link>

          {/* Desktop menu */}
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
                  className={`relative text-sm md:text-[15px] font-medium group transition-all
                    ${
                      location.pathname === l.href
                        ? "active-shine"
                        : "text-black"
                    }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 border transition 
              ${
                open
                  ? "border-blue-400 bg-white/30 backdrop-blur-md"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span className="text-xl">{open ? "×" : "≡"}</span>
          </button>
        </div>

        {/* Mobile panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden px-4 pb-4"
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
                      className={`w-full text-left block rounded-xl px-3 py-2 transition 
                        ${
                          location.pathname === l.href
                            ? "active-shine"
                            : "text-black hover:bg-white/10"
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
