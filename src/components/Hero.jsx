import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "../sections/Home.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScrollZigzag() {
  const containerRef = useRef(null);
  const messageRefs = useRef([]);

  // ✅ useLayoutEffect ensures DOM is ready before GSAP runs
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline + ScrollTrigger setup
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=500%",
          scrub: true,
          pin: containerRef.current,
          pinSpacing: true,
        },
      });

      messageRefs.current.forEach((msg, i) => {
        if (!msg) return;
        const isEven = i % 2 === 0;

        tl.fromTo(
          msg,
          {
            opacity: 0,
            y: 60,
            x: isEven ? -40 : 40,
            filter: "blur(10px)",
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
          },
          i * 1.2
        ).to(
          msg,
          {
            opacity: 0.3,
            scale: 0.95,
            duration: 0.8,
            ease: "power1.inOut",
          },
          i * 1.2 + 0.8
        );
      });
    }, containerRef);

    // ✅ Cleanup safely (kills everything GSAP created)
    return () => {
      ctx.revert(); // removes all animations created in this context
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
    <div ref={containerRef}>
      <section className="relative min-h-screen w-full flex items-center justify-between bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white px-12 overflow-hidden">
        {/* ✨ Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none"></div>

        {/* 🧩 Left Section */}
        <div className="w-[45%] flex flex-col justify-center z-20 text-left ml-[9vw]">
          <motion.h1
            className="font-extrabold leading-tight text-[3.8vw] sm:text-[3.3vw] mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Powering Tomorrow’s
            <br />
            <span className="text-gray-400">Innovations with</span>
            <br />
            Smarter Technology
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            We build next-gen digital experiences using modern, scalable, and
            secure technologies — empowering brands to innovate faster, operate
            smarter, and connect deeply with their audiences.
          </motion.p>

          <div className="flex justify-start">
            <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all">
              Explore Our Services
            </button>
          </div>
        </div>

        {/* 💬 Right Section */}
        <div className="relative w-[50%] h-[600px] flex items-center justify-center z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[440px] h-[520px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,255,255,0.15)] p-6 flex flex-col justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_80%)] blur-3xl"></div>

              <div className="relative flex flex-col space-y-6 z-10">
                {[
                  "Leo edited & committed code",
                  "2 secrets detected → secrets removed",
                  "Leo pushed code",
                  "Build completed successfully",
                  "Deployment triggered → Production",
                ].map((text, i) => (
                  <div
                    key={i}
                    ref={(el) => (messageRefs.current[i] = el)}
                    className={`flex items-center gap-3 p-4 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-500 ${
                      i % 2 === 0 ? "ml-4" : "mr-4"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-400 flex items-center justify-center text-sm font-semibold text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      L
                    </div>
                    <p className="text-gray-300 text-sm whitespace-nowrap">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Home/>
    </>
  );
}
