import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "../sections/Home.jsx";
import bgVideo from "../assets/video.mp4"; // 🎥 Your video file

gsap.registerPlugin(ScrollTrigger);

export default function HeroScrollZigzag() {
  const containerRef = useRef(null);
  const messagesRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = messagesRef.current;
      const total = sections.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${total * 120}%`,
          scrub: true,
          pin: containerRef.current,
          anticipatePin: 1,
        },
      });

      gsap.set(sections[0], { opacity: 1, y: 0 });

      sections.forEach((msg, i) => {
        if (i === 0) return;
        gsap.set(msg, { opacity: 0, y: 80 });

        tl.to(sections[i - 1], {
          opacity: 0,
          y: -60,
          duration: 0.8,
          ease: "power2.inOut",
        })
          .to(
            msg,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "<"
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={containerRef} className="relative">
        <section
          className="relative min-h-screen w-full flex items-center justify-between text-white px-12 overflow-hidden"
        >
          {/* 🎥 Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>

          {/* 🌑 Overlay (dark gradient color layer) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/90"></div>

          {/* ✨ Optional subtle glow pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_90%,rgba(255,255,255,0.05),transparent_80%)]"></div>

          {/* Left Content */}
          <div className="w-[45%] flex flex-col justify-center z-20 text-left ml-[9vw]">
            <motion.h1
              className="font-extrabold leading-tight text-[4.2vw] sm:text-[3.6vw] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Empowering Digital Growth <br />
              <span className="text-gray-300">with Scalable IT Solutions</span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              From custom software to enterprise automation, we help businesses
              accelerate innovation through AI-driven technology, seamless
              integrations, and next-gen digital experiences designed to grow
              visibility and impact.
            </motion.p>

            <div className="flex justify-start">
              <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all shadow-lg">
                Discover Our Approach
              </button>
            </div>
          </div>

          {/* Right Side — Animated messages */}
          <div className="relative w-[50%] flex items-center justify-center z-10">
            <div className="relative w-[420px] h-[200px] flex items-center justify-center">
              {[
                "🚀 Trusted by global brands for innovative IT engineering",
                "🤖 AI model trained — ready for deployment",
                "⚙️ New sprint initiated → feature scaling",
                "🔐 Security audit passed successfully",
                "⚡ Smart caching enabled → latency ↓ 42%",
                "🟢 Production update live → v3.2.0",
              ].map((text, i) => (
                <div
                  key={i}
                  ref={(el) => (messagesRef.current[i] = el)}
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl text-white text-center px-8 py-6 border border-white/10 backdrop-blur-lg bg-white/[0.05] shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                >
                  <div className="w-12 h-12 mb-3 rounded-full bg-gradient-to-br from-gray-600 to-gray-300 flex items-center justify-center font-bold text-black">
                    M
                  </div>
                  <p className="text-lg leading-snug drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Home />
    </>
  );
}
