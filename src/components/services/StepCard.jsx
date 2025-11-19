import { motion } from "framer-motion";

export default function StepCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white/10 rounded-2xl border border-white/20 text-center"
    >
      <h4 className="text-2xl font-bold mb-2 text-blue-300">{title}</h4>
      <p className="text-gray-400">{desc}</p>
    </motion.div>
  );
}
