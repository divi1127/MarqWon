import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Workflow,
  Code2,
  Rocket,
  ShoppingCart,
  Briefcase,
  Palette,
  Gamepad2,
  ShieldCheck,
  RefreshCw,
  Zap,
  PenTool,
  Megaphone,
} from "lucide-react";

import logo from "../assets/marq.png";
import logoWhite from "../assets/logomain.png";

const links = [
  { href: "/who-we-are", label: "Who we are" },
  { href: "/what-we-do", label: "What we do" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/careers", label: "Careers" },
  { href: "/discover-me", label: "Discover more" },
];

const serviceCategories = [
  {
    category: "Development",
    items: [
      { title: "Website Development", path: "/services/website-development", icon: Globe },
      { title: "Application Development", path: "/services/application-development", icon: Smartphone },
      { title: "CRM, ERP & Workflow Systems", path: "/services/crm-erp-workflow", icon: Workflow },
      { title: "Custom Software", path: "/services/custom-software", icon: Code2 },
      { title: "Startup MVP", path: "/services/startup-mvp", icon: Rocket },
    ],
  },
  {
    category: "Business & Design",
    items: [
      { title: "E-Commerce Development", path: "/services/ecommerce", icon: ShoppingCart },
      { title: "Business Development", path: "/services/business-development", icon: Briefcase },
      { title: "UI/UX Design", path: "/services/ui-ux", icon: Palette },
      { title: "Graphics Design", path: "/services/graphics-design", icon: PenTool },
      { title: "Branding & Identity", path: "/services/branding", icon: PenTool },
    ],
  },
  {
    category: "Tech & Marketing",
    items: [
      { title: "Game Development", path: "/services/game-development", icon: Gamepad2 },
      { title: "Cyber Security", path: "/services/cyber-security", icon: ShieldCheck },
      { title: "Digital Transformation", path: "/services/digital-transformation", icon: RefreshCw },
      { title: "Crypto & Web3 Solutions", path: "/services/web3", icon: Zap },
      { title: "Digital Marketing", path: "/services/digital-marketing", icon: Megaphone },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const blackTextPages = ["/who-we-are", "/services", "/careers"];
  const whiteLogoPages = ["/", "/products", "/what-we-do", "/discover-me"];

  const isBlackTextPage = blackTextPages.includes(location.pathname);
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
  className={`relative mx-auto max-w-7xl transition-all duration-500 rounded-2xl overflow-visible ${
    scrolled
      ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
      : "bg-transparent border-none shadow-none"
  }`}
>

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
                isBlackTextPage ? "text-black" : "text-white"
              }`}
            >
              MarqWon
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-6 relative">
            {links.map((l, i) => {
              const isActive = location.pathname === l.href;
              const isServices = l.label === "Services";
              return (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="relative"
                  onMouseEnter={() => isServices && setShowServicesMenu(true)}
                  onMouseLeave={() => isServices && setShowServicesMenu(false)}
                >
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className={`relative text-sm md:text-[15px] font-medium transition-all duration-200 px-3 py-2 rounded-xl group ${
                      l.label === "Discover more"
                        ? "font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md hover:shadow-lg hover:scale-105"
                        : isBlackTextPage
                        ? "text-black hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {isActive ? (
                      <span
                        className={`font-semibold ${
                          isBlackTextPage ? "text-black" : "text-white"
                        }`}
                      >
                        {l.label}
                      </span>
                    ) : (
                      l.label
                    )}
                  </Link>

              {isServices && (
  <AnimatePresence>
    {showServicesMenu && (
      <motion.div
        initial={{ opacity: 0, y: 10, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: -10, x: -10 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`absolute top-full mt-3 w-[720px] 
          ${isBlackTextPage ? "bg-gray-900/95 text-white" : "bg-white/80 text-gray-900"} 
          ${isBlackTextPage ? "backdrop-blur-lg border border-gray-700/50" : "backdrop-blur-xl border border-white/30"}
          rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-8 
          -left-32 md:left-0 overflow-hidden`}
      >
        {serviceCategories.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.3 }}
          >
            <h4
              className={`text-xs font-semibold uppercase mb-4 tracking-wide ${
                isBlackTextPage ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {group.category}
            </h4>
            <ul className="space-y-3">
              {group.items.map((item, j) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * j, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 text-sm font-medium transition-all duration-300 
                        ${
                          isBlackTextPage
                            ? "text-gray-200 hover:text-blue-400"
                            : "text-gray-800 hover:text-blue-600"
                        } hover:translate-x-1`}
                    >
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-lg shadow-sm ${
                          isBlackTextPage
                            ? "bg-gray-800/80"
                            : "bg-white/60"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 ${
                            isBlackTextPage
                              ? "text-gray-300"
                              : "text-gray-600"
                          }`}
                        />
                      </div>
                      <span>{item.title}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
)}


                </motion.li>
              );
            })}
          </ul>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 border transition ${
              open
                ? "border-blue-400 bg-white/20 backdrop-blur-md"
                : isBlackTextPage
                ? "border-black text-black hover:bg-gray-100"
                : "border-white text-white hover:bg-white/10"
            }`}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </motion.nav>
    </header>
  );
}
