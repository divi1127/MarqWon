import { motion } from "framer-motion";

export default function FeatureCard({ title, desc, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition"
    >
      <h3 className="font-semibold text-xl mb-2 text-blue-300">{title}</h3>
      <p className="text-gray-300">{desc}</p>
    </motion.div>
  );
}
