import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-900 text-gray-900 relative overflow-hidden">
      {/* Animated floating gradient blobs (black/white tones) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2, scale: 1.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-200 to-gray-400 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25, scale: 1.05 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-[-250px] left-[-200px] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-gray-700 to-gray-900 blur-3xl"
      />

      {/* Hero Section */}
      <section className="relative z-10 text-center py-28 px-6">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500"
        >
          “The Future Belongs to Those Who Build It.”
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={fadeInUp}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Redefining innovation through scalable, future-ready tech solutions.
        </motion.p>
      </section>

      {/* Mission / Vision / Values */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "MISSION",
              text: "We help businesses thrive with AI, cloud, and security — redefining innovation through technology.",
            },
            {
              title: "VISION",
              text: "A world where intelligent systems empower businesses to achieve more with less effort.",
            },
            {
              title: "VALUES",
              text: "Integrity. Innovation. Impact. We solve complex problems with clarity and speed.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              custom={i}
              variants={fadeInUp}
              className="rounded-3xl bg-gradient-to-br from-gray-50 to-gray-200 shadow-xl border border-gray-300 p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white mb-6">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust and Responsibility */}
      <section className="relative z-10 bg-gradient-to-r from-gray-100 to-gray-200 py-20 px-6 border-y border-gray-300">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
              Creating Positive Change
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We drive responsible innovation to make a real impact on our
              clients, people, and communities.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
              Digital Trust & Data Privacy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Security isn’t optional — it’s integral. We ensure transparency,
              compliance, and digital trust in every layer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="relative z-10 container mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-4xl font-semibold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500"
        >
          Our Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Cybersecurity Solutions",
            "Digital Transformation",
            "Business Strategy",
            "Cloud Integration",
            "AI & Data Analytics",
            "Customer Experience",
          ].map((service, i) => (
            <motion.div
              key={service}
              initial="hidden"
              whileInView="visible"
              custom={i}
              variants={fadeInUp}
              className="bg-gradient-to-br from-white to-gray-100 border border-gray-300 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                {service}
              </h3>
              <p className="text-gray-700 text-sm">
                Innovative, secure, and scalable solutions designed to drive
                business success.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recognition / Testimonials */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-gray-100 to-gray-200 border-t border-gray-300">
        <div className="container mx-auto px-6 text-center space-y-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500"
          >
            Recognized for the Value We Create
          </motion.h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Awarded “2025 Tech Innovator of the Year” for excellence in AI
            integration and design excellence.
          </p>

          <div className="grid md:grid-cols-2 gap-10 pt-10">
            {[
              {
                quote:
                  "“We partnered with MarqWon to modernize our systems — our efficiency skyrocketed 35%.”",
                author: "Global Retail Partner",
              },
              {
                quote:
                  "“MarqWon sets the standard for innovation and execution.”",
                author: "Fortune 500 Executive",
              },
              {
                quote:
                  "“Their expertise helped us launch faster and scale smarter.”",
                author: "Director, Healthcare Systems",
              },
              {
                quote:
                  "“A strategic partner who brings clarity and precision.”",
                author: "SaaS Partner",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                custom={i}
                variants={fadeInUp}
                className="bg-white border border-gray-300 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all"
              >
                <p className="text-gray-800 italic mb-4">{t.quote}</p>
                <p className="text-sm text-gray-500">— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
