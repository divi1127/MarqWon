import { motion } from "framer-motion";

export default function Banner({ title, subtitle, image }) {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center z-10"
      >
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">{subtitle}</p>
      </motion.div>
    </section>
  );
}
