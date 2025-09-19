import { motion } from "framer-motion";

const services = [
  {
    title: "Web Applications Development",
    desc: "We specialize in planning, UX design, coding, testing and SEO. Delivering unique value from server to screen.",
  },
  {
    title: "Crypto & Web3 Solutions",
    desc: "Unlock the future of decentralized technology with secure, scalable blockchain solutions.",
  },
  {
    title: "Application Development",
    desc: "Full-stack web and mobile applications, built to scale. From ideation to launch.",
  },
  {
    title: "CRM, ERP & Workflow Systems",
    desc: "Streamline operations and automate growth with intelligent workflow integrations.",
  },
  {
    title: "Startup MVP Planning",
    desc: "Partner with us to define, validate, and prototype your MVP with clarity and speed.",
  },
  {
    title: "Digital Transformation",
    desc: "Modernize your business and enhance agility, insights, and customer experience.",
  },
  {
    title: "E-commerce Development",
    desc: "Build bold, scalable commerce platforms, optimized for conversion and growth.",
  },
  {
    title: "Branding & Design",
    desc: "Strategic design, visuals, and interfaces that communicate trust and uniqueness.",
  },
  {
    title: "Digital Marketing",
    desc: "Fuel post-launch growth with performance marketing strategies that convert.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Left side (fixed / sticky) */}
        <div className="lg:pr-12 lg:sticky lg:top-28 self-start">
          <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug">
  We listen to your needs, <br />
  We design with intent, <br />
  We deliver with speed, <br />
  We grow with your success.
</h2>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Our services are designed to scale with your business, helping you
            launch faster, grow smarter, and innovate with confidence.
          </p>
        </div>

        {/* Right side stacked scroll cards */}
        <div className="relative">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="sticky top-28 mb-40 p-8 rounded-2xl bg-white shadow-xl border border-gray-100 flex flex-col justify-between min-h-[280px] max-w-md"
            >
              <div>
                <div className="h-12 w-12 mb-4 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 mt-3">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
