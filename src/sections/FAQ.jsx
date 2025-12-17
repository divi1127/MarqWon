import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question: "What is the employment model at Marqwon?",
    answer: "Employment is based on mutual trust and performance. While we specify work models in our offer letters—including On-site, Hybrid, and Remote—employment is generally at-will, subject to Indian labor laws.",
  },
  {
    question: "Does Marqwon support remote or hybrid work?",
    answer: "Yes. Our default model is Hybrid, consisting of 3 days in the office and 2 days remote. We also support fully Remote or On-site roles depending on specific business and client requirements.",
  },
  {
    question: "How long is the probation period?",
    answer: "All new employees typically undergo a probation period of 3 to 6 months. During this time, we evaluate performance, behavior, and cultural alignment before confirming permanent employment in writing.",
  },
  {
    question: "What is the notice period for separation?",
    answer: "During the probation period, the notice period ranges from 7 to 15 days. After confirmation, the standard notice period is 30 days unless specified otherwise in your formal agreement.",
  },
];

export default function FAQ() {
  // Set initial state to 0 so the first question is open on page load
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left Side: Header */}
          <div className="md:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-black leading-tight mb-6"
            >
              Frequently asked <br />
              <span className="text-gray-600">questions</span>
            </motion.h2>
            <p className="text-gray-500 text-base max-w-xs">
              Everything you need to know about the policies and culture at Marqwon Dynamics Private Limited.
            </p>
          </div>

          {/* Right Side: Accordion */}
          <div className="md:w-2/3">
            <div className="border-t border-gray-200">
              {FAQ_DATA.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full py-6 flex justify-between items-center text-left group transition-all"
                  >
                    <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-gray-600' : 'text-gray-900 group-hover:text-blue-900'}`}>
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-1.5 rounded-full ${activeIndex === index ? 'bg-blue-50 text-blue-600' : 'text-gray-400'}`}
                    >
                      <ChevronDown size={22} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pr-10 text-gray-600 leading-relaxed text-base">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}