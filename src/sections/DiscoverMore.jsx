import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Star,
  Award,
  Users,
  TrendingUp,
  Target,
  Heart,
  ArrowRight,
} from "lucide-react";

const Discover = () => {
  const achievements = [
    { icon: Award, title: "150+ Projects", description: "Successfully delivered" },
    { icon: Users, title: "80+ Clients", description: "Satisfied customers" },
    { icon: TrendingUp, title: "5+ Years", description: "Industry experience" },
    { icon: Target, title: "99.9%", description: "Client satisfaction" },
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Hospital Administrator",
      company: "HealthCare Plus",
      content:
        "MarqWon developed our telemedicine platform that has transformed how we deliver care. Their expertise in healthcare IT is outstanding.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "CEO",
      company: "EduTech Solutions",
      content:
        "The learning management system built by MarqWon exceeded our expectations. Student engagement has increased by 60% since launch.",
      rating: 5,
    },
    {
      name: "Arun Patel",
      role: "CTO",
      company: "RetailMart",
      content:
        "Our e-commerce platform handles 10,000+ daily transactions seamlessly. MarqWon's technical prowess and support are unmatched.",
      rating: 5,
    },
  ];

  const whyDifferent = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description:
        "Your success is our priority. We go beyond code to understand your business goals and deliver solutions that drive real results.",
    },
    {
      icon: TrendingUp,
      title: "Cutting-Edge Technology",
      description:
        "We stay ahead of the curve, leveraging the latest technologies and best practices to build future-proof solutions.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description:
        "A passionate team of experts committed to excellence in every project, from initial consultation to ongoing support.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          Discover MarqWon
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Where innovation meets excellence — Your trusted partner in digital transformation
        </motion.p>
      </section>

      {/* Achievements */}
      <section className="py-20 container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 text-center rounded-2xl bg-gray-900/60 backdrop-blur-md border border-gray-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-800 text-white">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-black relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Why MarqWon is Different
          </motion.h2>
          <p className="text-xl text-gray-400 mb-16">
            We don't just build software — we build partnerships that drive success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyDifferent.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-gray-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all"
                >
                  <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-gray-800 text-white">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-white"
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-xl text-gray-400 text-center mb-16">
          Real feedback from real partners
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-gray-900/60 backdrop-blur-md border border-gray-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all"
            >
              <div className="flex mb-4 justify-center">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-gray-300 text-gray-300" />
                ))}
              </div>
              <p className="italic text-gray-300 mb-6">"{t.content}"</p>
              <p className="font-semibold text-white">{t.name}</p>
              <p className="text-sm text-gray-400">{t.role}</p>
              <p className="text-sm text-gray-500">{t.company}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-black relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-400 mb-16">
            Building with the best tools in the industry
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React",
              "Node.js",
              "Python",
              "AWS",
              "MongoDB",
              "TensorFlow",
              "Flutter",
              "Docker",
              "PostgreSQL",
              "Kubernetes",
              "React Native",
              "Angular",
            ].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-xl bg-gray-900/60 backdrop-blur-md border border-gray-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 transition-all"
              >
                <p className="font-semibold text-gray-200">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-12 md:p-16 rounded-3xl bg-white text-black shadow-lg"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              Join 80+ satisfied clients who trust MarqWon for their digital
              transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enquiries">
                <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 flex items-center justify-center gap-2">
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/services">
                <button className="px-6 py-3 border border-black text-black font-semibold rounded-lg hover:bg-gray-100">
                  Explore Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Discover;
