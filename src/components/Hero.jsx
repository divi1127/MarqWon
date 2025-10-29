import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Home from "../sections/Home";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Motion transforms for 3D rotation & light
  const rotateX = useTransform(y, [0, window.innerHeight], [15, -15]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-15, 15]);
  const lightX = useTransform(x, [0, window.innerWidth], ["0%", "100%"]);
  const lightY = useTransform(y, [0, window.innerHeight], ["0%", "100%"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden min-h-[90vh] md:min-h-screen flex flex-col justify-center px-5 sm:px-8 md:px-12 text-gray-100 bg-black pt-24 sm:pt-28"
      >
        {/* 🩶 Shimmering Gray Overlay Animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/10 to-transparent"
          animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 100%", mixBlendMode: "overlay" }}
        />

        {/* 🌫 Moving light reflection */}
        <motion.div
          style={{
            left: lightX,
            top: lightY,
            transform: "translate(-50%, -50%)",
          }}
          className="absolute w-[200%] h-[200%] rounded-full bg-gray-400/10 blur-3xl pointer-events-none mix-blend-overlay"
        />

        {/* ⚙️ Content Grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 🧠 LEFT: Text content */}
          <div className="space-y-6 text-center lg:text-left text-gray-100 lg:pl-8 px-3 sm:px-6">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 text-transparent bg-clip-text drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              Powering Tomorrow’s <br className="hidden sm:block" />
              <span className="text-gray-300">Innovations</span> with <br className="hidden sm:block" />
              <span className="text-gray-500">Smarter Technology</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-md sm:max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9 }}
            >
              We build <strong>next-gen digital experiences</strong> using{" "}
              <strong>modern, scalable, and secure technologies</strong> — empowering
              brands to innovate faster, operate smarter, and connect deeply with their
              audiences.
            </motion.p>

            <motion.div
              className="pt-4 flex justify-center lg:justify-start gap-4 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9 }}
            >
              <a
                href="/services"
                className="rounded-full px-6 py-3 bg-gray-800 hover:bg-gray-700 transition-transform hover:scale-105 text-sm sm:text-base font-semibold text-white shadow-lg"
              >
                Explore Our Services
              </a>
            </motion.div>
          </div>

          {/* 🎇 RIGHT: Animated geometric visual */}
          <motion.div
            className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] flex items-center justify-center mt-6 lg:mt-0"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="relative w-[200px] sm:w-[260px] md:w-[350px] h-[200px] sm:h-[260px] md:h-[350px]"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[0, 45, 90, 135].map((angle, index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 top-1/2 w-[2px] sm:w-[3px] h-full bg-gradient-to-t from-gray-600 via-gray-400 to-transparent"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    transformOrigin: "center center",
                  }}
                />
              ))}

              {/* Rotating arrow */}
              <motion.div
                className="absolute left-1/2 top-1/2 w-8 sm:w-10 h-8 sm:h-10 border-t-2 border-r-2 border-gray-400"
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  transform: "translate(180%, -180%) rotate(45deg)",
                }}
              />
            </motion.div>

            {/* Glowing gray aura */}
            <motion.div
              className="absolute w-[350px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[500px] md:h-[600px] rounded-full bg-gray-400/10 blur-[100px] sm:blur-[150px] mix-blend-overlay"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* 👇 Next Section */}
      <Home />
    </>
  );
}
