import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  HardHat,
  Lightbulb,
  Rocket, // CHANGED: Import Rocket icon for Business Benefits
  ArrowLeft,
} from "lucide-react";


// ---- IMPORT DATA FROM data.jsx ----
import { services, slugify } from "../sections/data";

// ---- STATIC HERO IMAGE ----
const STATIC_HERO_IMAGE_URL =
  "https://i.pinimg.com/1200x/c3/bb/b9/c3bbb9839228065b543067b52bab29c1.jpg";

export default function ServiceDetailPage() {
  const { slug } = useParams();

  // redirect if no slug
  if (!slug) return <Navigate to="/services" replace />;

  // find matching service by slug
  const service = services.find((s) => slugify(s.title) === slug);

  // 404 fallback
  if (!service) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-semibold mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-6 max-w-lg">
          We couldn't find the service you're looking for.
        </p>
        <Link
          to="/services"
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition"
        >
          Back to Services
        </Link>
      </main>
    );
  }

  const detailSections = [
    { title: "Why Choose Us", key: "whyChoose", color: "text-black", Icon: CheckCircle },
    { title: "Core Technologies", key: "technologies", color: "text-black", Icon: HardHat },
    { title: "Key Features", key: "features", color: "text-black", Icon: Lightbulb },
    { title: "Business Benefits", key: "benefits", color: "text-black", Icon: Rocket }, // CHANGED: Icon is now Rocket
  ];

  // CHANGED: Added slide animation 'x' based on position
  const rowVariants = (isOdd) => ({
    hidden: { 
      opacity: 0, 
      y: 30, 
      x: isOdd ? 100 : -100 // Slide from right if odd, slide from left if even
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0, // Animate to final position (x=0)
      transition: { duration: 0.6, ease: "easeOut" },
    },
  });

  const renderContentList = (dataList, isRightAligned) => (
    <ul
      className={`space-y-3 p-4 bg-gray-50 rounded-lg shadow-sm ${
        isRightAligned ? "lg:text-left" : "lg:text-left"
      }`}
    >
      {dataList?.length > 0 ? (
        dataList.map((item, i) => (
          <li
            key={i}
            className={`text-base font-inter font-light text-gray-700 ${
              isRightAligned ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            {item}
          </li>
        ))
      ) : (
        <li className="text-gray-400 italic font-inter font-light">
          Detailed information for this section is being prepared.
        </li>
      )}
    </ul>
  );

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-20">
      {/* HERO */}
      <div className="relative h-[550px] overflow-hidden shadow-lg mb-20">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${STATIC_HERO_IMAGE_URL})`,
            backgroundAttachment: "fixed",
          }}
        />

        <div className="absolute inset-0 bg-black/70 flex items-end">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pb-10 text-white text-left mb-30 ml-10">
            <Link
              to="/services"
              className="inline-flex items-center text-sm font-medium opacity-80 hover:opacity-100 transition mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to All Services
            </Link>

            <motion.h1
              className="text-4xl md:text-5xl font-light mb-3 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {service.title}
            </motion.h1>

            <motion.p
              className="text-xl opacity-90 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {service.desc}
            </motion.p>

            <span className="inline-block mt-4 px-3 py-1 text-white text-xs font-semibold rounded-full ">
              {service.category}
            </span>
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="max-w-7xl mx-auto py-10 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10 border-b pb-4">
          Service Focus Breakdown
        </h2>
        
        {/*  */}

        {detailSections.map((section, index) => {
          const dataList = service.details?.[section.key] || [];
          const isOdd = index % 2 !== 0; // True for 1st, 3rd, etc. (zero-indexed: 1, 3, 5...)
          const Icon = section.Icon;

          return (
            <motion.div
              key={section.key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={rowVariants(isOdd)} // CHANGED: Pass isOdd to variants function
              transition={{ delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16 border-b border-gray-100 pb-8`}
            >
              {/* TITLE */}
              <div
                className={`lg:pr-8 flex flex-col justify-center h-full ${
                  isOdd
                    ? "lg:order-2 lg:text-right lg:border-l lg:pl-8"
                    : "lg:order-1 lg:text-left lg:border-r"
                } border-gray-200`}
              >
                <div
                  className={`flex items-center mb-2 ${
                    isOdd ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${section.color} flex-shrink-0 ${ // Increased icon size slightly
                      isOdd ? "ml-4" : "mr-4" // Increased margin slightly
                    }`}
                  />
                  <h3
                    className={`text-4xl font-poppins font-thin ${section.color}`} // CHANGED: Increased text size to 4xl
                  >
                    {section.title}
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className={`col-span-1 ${isOdd ? "lg:order-1" : "lg:order-2"}`}>
                {renderContentList(dataList, isOdd)}
              </div>
            </motion.div>
          );
        })}

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Ready to Discuss Your Project?
          </h3>
          
          <Link 
            to="/enquiries" // This links to your Enquiries route
            className="bg-black text-white py-3 px-10 rounded-full font-semibold hover:bg-gray-900 transition shadow-lg inline-block" // Note: Added inline-block to make the link behave like a button's container
          >
            Start a Conversation Today
          </Link>
        </div>
      </div>
    </main>
  );
}