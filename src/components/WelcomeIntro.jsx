import { motion } from "framer-motion";
import { useState } from "react";

export default function WelcomeIntro({ onFinish }) {
  const [collapse, setCollapse] = useState(false);
  const [flash, setFlash] = useState(false);

  const handleExplore = () => {
    setCollapse(true);

    // ⚡ Trigger flash slightly after particles start collapsing
    setTimeout(() => {
      setFlash(true);
    }, 800);

    setTimeout(() => {
      onFinish();
    }, 2200);
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* 🌌 Background Black → Blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0a0a2a] to-[#000000]" />

      {/* 💫 Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => {
          const startX = Math.random() * window.innerWidth;
          const startY = Math.random() * window.innerHeight;
          const colors = ["#00BFFF", "#6A5ACD", "#1E90FF", "#8A2BE2"];
          const color = colors[Math.floor(Math.random() * colors.length)];

          return (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] rounded-full"
              style={{
                backgroundColor: color,
                boxShadow: `0 0 8px ${color}`,
              }}
              initial={{ x: startX, y: startY, opacity: 1 }}
              animate={
                collapse
                  ? {
                      x: window.innerWidth / 2,
                      y: window.innerHeight / 2,
                      opacity: [1, 0],
                      scale: [1, 2], // particles grow before disappearing
                    }
                  : { y: [startY, -20], opacity: [0, 1, 0] }
              }
              transition={{
                duration: collapse ? 1.2 : 6 + Math.random() * 4,
                repeat: collapse ? 0 : Infinity,
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>

      {/* 🔵 Black + Blue Glowing Circle */}
      {!collapse && (
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            background:
              "radial-gradient(circle, #000000 40%, #0a0a3d 65%, #1E90FF 90%)",
            boxShadow:
              "0 0 80px 30px rgba(30,144,255,0.5), 0 0 150px 60px rgba(0,0,255,0.2)",
          }}
        />
      )}

      {/* 💡 Text */}
      {!collapse && (
        <motion.div
          className="absolute text-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-light text-white"
            style={{
              textShadow: `
                0 0 10px rgba(0,191,255,0.8),
                0 0 25px rgba(65,105,225,0.6),
                0 0 45px rgba(0,0,255,0.4)
              `,
            }}
          >
            Welcome to MarqWon
          </motion.h1>

          <button
            onClick={handleExplore}
            className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-r from-[#0a0a3d] to-[#1E90FF] text-white font-medium shadow-lg hover:scale-105 transition-transform"
          >
            🚀 Explore Marqwon
          </button>
        </motion.div>
      )}

      {/* ⚡ Flash synced with particles */}
      {flash && (
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => setFlash(false)}
        />
      )}
    </section>
  );
}
