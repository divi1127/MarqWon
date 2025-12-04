import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Workflow, Server, Settings, Users, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  })
};

export default function CrmErpWorkflow() {
  return (
    <main className="bg-white text-gray-900 font-['Inter'] overflow-hidden">
      {/* HERO */}
      <section
        className="h-[65vh] w-full bg-cover bg-center bg-fixed flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url('https://i.pinimg.com/1200x/2d/4c/9a/2d4c9a70ee41ef8a9e6d2c3170a0c18b.jpg')`
        }}
      >
        <div className="backdrop-blur-sm bg-black/40 p-10 rounded-3xl max-w-3xl mx-auto">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            CRM, ERP & Workflow Systems
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            Automate operations, manage resources, and streamline customer journeys through powerful enterprise software.
          </motion.p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 space-y-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold text-center"
        >
          Why Choose Our Solutions?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Better Customer Experience",
              desc: "Improve retention and engagement using centralized CRM intelligence."
            },
            {
              icon: Server,
              title: "Centralized Operations",
              desc: "Unify sales, support, finance, HR, and projects with a single data model."
            },
            {
              icon: Settings,
              title: "Automation & Efficiency",
              desc: "Save time and eliminate manual work with automated workflows."
            }
          ].map((el, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow text-center"
            >
              <el.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{el.title}</h3>
              <p className="text-gray-600 text-sm">{el.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-100 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-center"
          >
            Core Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Lead & Customer Management",
              "Project & Task Tracking",
              "Sales & Quotation Automation",
              "Inventory & Asset Management",
              "HR & Payroll Integration",
              "Custom Workflow Designer",
              "Data Reporting & BI Dashboards",
              "Role-Based Security",
              "Mobile & Cloud Support"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <p className="text-gray-700 text-sm">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 space-y-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold text-center"
        >
          Tailored Solutions For Any Industry
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Manufacturing", "Real Estate", "Healthcare", "Education", "Retail", "Finance"].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600 text-sm">Custom ERP/CRM workflows for {item} businesses.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-indigo-100 text-white text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Transform Your Business Today
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-lg max-w-2xl mx-auto mb-10 text-indigo-200"
        >
          We build scalable systems that help you operate faster, smarter, and more profitably.
        </motion.p>

        <motion.button
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="px-8 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Book a Free Consultation
        </motion.button>
      </section>
    </main>
  );
}
