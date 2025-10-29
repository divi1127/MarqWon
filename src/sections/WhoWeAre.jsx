import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Background Gradient Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-400 via-pink-300 to-purple-400 blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.8 }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-pink-300 via-indigo-300 to-purple-300 blur-3xl"
        ></motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-28 px-6">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          "The Future Belongs to Those Who Build It."
        </motion.h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Redefining innovation through scalable, future-ready tech solutions.
        </p>
      </section>

      {/* Mission / Vision / Values as Cards */}
      <section className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "MISSION",
              text: "We help businesses thrive with custom software, AI automation, cloud, and cybersecurity services — redefining innovation through future-ready solutions.",
              color: "from-indigo-500 to-purple-500",
            },
            {
              title: "VISION",
              text: "Empowering businesses to achieve more with less. We envision a future where intelligent technology drives efficiency, growth, and transformation.",
              color: "from-pink-500 to-indigo-500",
            },
            {
              title: "VALUES",
              text: "Innovation. Agility. Impact. We think boldly, adapt quickly, and solve real-world problems with precision and integrity.",
              color: "from-purple-500 to-pink-500",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              custom={i}
              variants={fadeInUp}
              className="rounded-3xl bg-white shadow-lg border border-gray-200 p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all"
            >
              <div
                className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6`}
              >
                <CheckCircle className="w-7 h-7" />
              </div>
              <h2
                className={`text-2xl font-semibold mb-3 bg-gradient-to-r ${item.color} text-transparent bg-clip-text`}
              >
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust and Responsibility */}
      <section className="relative z-10 bg-gray-50 border-y border-gray-200 py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
              Creating Positive Change
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We strive to make a meaningful impact globally by leading
              responsibly and supporting our employees, clients, and
              communities.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              Digital Trust & Data Privacy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We implement stringent cybersecurity protocols and adhere to
              global data protection regulations to safeguard digital rights and
              ensure transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="relative z-10 container mx-auto px-6 py-24">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Our Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Cybersecurity Solutions",
            "Digital Transformation",
            "Business Strategy",
            "Infrastructure Modernization",
            "AI & Data Analytics",
            "Customer Experience",
            "Cloud Integration",
            "Enterprise Solutions",
          ].map((service, i) => (
            <motion.div
              key={service}
              initial="hidden"
              whileInView="visible"
              custom={i}
              variants={fadeInUp}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
                {service}
              </h3>
              <p className="text-gray-600 text-sm">
                Innovative, secure, and scalable solutions crafted to drive
                business success.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recognition & Testimonials */}
      <section className="relative z-10 py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center space-y-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-4xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          >
            Recognized for the Value We Create
          </motion.h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Awarded “2025 Tech Innovator of the Year” for excellence in enterprise
            AI integration and digital product design.
          </p>

          <div className="grid md:grid-cols-2 gap-10 pt-10">
            {[
              {
                quote:
                  "“We partnered with MarqWon to modernize our retail infrastructure. Sales increased 35% year-over-year.”",
                author: "Global Retail Giant",
              },
              {
                quote:
                  "“MarqWon sets the bar high for innovation and client success.”",
                author: "Senior Executive, Fortune 500",
              },
              {
                quote:
                  "“MarqWon helped bring our connected device to market in half the time.”",
                author: "Director, Healthcare Systems Group",
              },
              {
                quote:
                  "“A true partner who brings strategy and execution together flawlessly.”",
                author: "Strategic Partner, SaaS Provider",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                custom={i}
                variants={fadeInUp}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all"
              >
                <p className="text-gray-700 italic mb-4">{t.quote}</p>
                <p className="text-sm text-gray-500">— {t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}
