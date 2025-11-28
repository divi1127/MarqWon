import React, { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
  // Scroll fade animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-item");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const services = [
    {
      title: "Crypto & Web3 Solutions",
      desc: "Unlock the future with decentralized technologies and blockchain integration.",
    },
    {
      title: "Custom Application Development",
      desc: "Build tailored mobile and web applications that drive business growth.",
    },
    {
      title: "CRM & ERP Systems",
      desc: "Streamline operations with powerful customer and resource management tools.",
    },
    {
      title: "Digital Transformation Services",
      desc: "Modernize legacy systems and embrace cutting-edge digital practices.",
    },
    {
      title: "E-Commerce Development",
      desc: "Launch and scale your online store with secure, high-performance solutions.",
    },
    {
      title: "Cybersecurity Solutions",
      desc: "Safeguard your digital ecosystem with end-to-end protection.",
    },
  ];

  // Horizontal scroll progress bar
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const industries = [
  {
    name: "Technology",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    name: "Financial Services",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    name: "Healthcare",
    img: "https://images.unsplash.com/photo-1581091215367-59ab6b4b21b3",
  },
  {
    name: "Manufacturing",
    img: "https://images.unsplash.com/photo-1549921296-3cce903855cd",
  },

  // --- 7 NEW INDUSTRIES BELOW ---

  {
    name: "E-Commerce",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
  {
    name: "Real Estate",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
  },
  {
    name: "Education",
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    name: "Travel & Hospitality",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "Logistics & Transportation",
    img: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd",
  },
  {
    name: "Retail",
    img: "https://images.unsplash.com/photo-1506617420156-8e4536971650",
  },
  {
    name: "Energy & Utilities",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
];


  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateProgress = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setProgress((el.scrollLeft / maxScroll) * 100);
    };

    el.addEventListener("scroll", updateProgress);
    return () => el.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <section className="w-[95%] mx-auto my-24 font-['Helvetica Neue']">

      {/* MAIN TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 fade-item opacity-0 translate-y-6">
        Transforming Ideas into Digital Reality
      </h2>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-30">
        {services.map((item, index) => (
          <div
            key={index}
            className="p-8 rounded-3xl shadow-lg bg-white border border-gray-100
                       hover:bg-orange-50 hover:shadow-2xl transition-all duration-300
                       fade-item opacity-0 translate-y-6"
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-orange-600 text-3xl font-bold">⚡</div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ENTERPRISE SECTION */}
      <section className="w-[95%] mx-auto my-28 font-['Helvetica Neue']">

        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16 fade-item opacity-0 translate-y-6 mt-40">
          Enterprise-Grade Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mt-30">

          <div className="space-y-4 fade-item opacity-0 translate-y-6" style={{ transitionDelay: "150ms" }}>
            <h3 className="text-2xl font-semibold text-black">Security</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Ensure privacy and compliance with multi-layered protection, access controls,
              and industry-certified security standards.
            </p>
          </div>

          <div className="space-y-4 fade-item opacity-0 translate-y-6" style={{ transitionDelay: "300ms" }}>
            <h3 className="text-2xl font-semibold text-black">Deployment</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Secure your data by deploying within a dedicated virtual private cloud (VPC)
              or on-premises, air-gapped behind your firewall.
            </p>
          </div>

          <div className="space-y-4 fade-item opacity-0 translate-y-6" style={{ transitionDelay: "450ms" }}>
            <h3 className="text-2xl font-semibold text-black">Customization</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Train models on your proprietary data and build customized AI solutions
              tailored to your needs and infrastructure.
            </p>
          </div>

        </div>
      </section>

     {/* INDUSTRIES SCROLLER */}
<section className="w-[95%] mx-auto my-32 font-['Helvetica Neue']">
  <h2 className="text-4xl md:text-5xl font-bold text-black mb-14 text-center mt-10 fade-item opacity-0 translate-y-6">
    Industries We Support
  </h2>

  <div
    ref={scrollRef}
    className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-2 fade-item opacity-0 translate-y-6"
    style={{ scrollBehavior: "smooth" }}
  >
    {industries.map((item, i) => (
  <div
    key={i}
    className="min-w-[300px] h-[380px] rounded-3xl shadow-lg relative overflow-hidden cursor-pointer mt-20 group"
  >
    {/* IMAGE (object zoom-out) */}
    <img
  src={item.img}
  alt={item.name}
  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
/>


    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>

    {/* Title */}
    <h3
      className="absolute bottom-6 left-6 text-2xl font-semibold text-white drop-shadow-lg transition-all duration-300 group-hover:translate-y-[-6px]"
    >
      {item.name}
    </h3>
  </div>
))}
  </div>

  {/* Scroll progress bar */}
  <div className="w-full h-1 bg-gray-200 rounded-full mt-13 ">
    <div
      className="h-full rounded-full"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(to right, #ff7a59, #5271ff)",
      }}
    ></div>
  </div>
</section>

    </section>
  );
}
