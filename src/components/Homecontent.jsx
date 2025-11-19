import React, { useEffect } from "react";

export default function ServicesSection() {

  // Scroll fade animation for both sections
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
    { title: "Crypto & Web3 Solutions", desc: "Unlock the future with decentralized technologies and blockchain integration." },
    { title: "Custom Application Development", desc: "Build tailored mobile and web applications that drive business growth." },
    { title: "CRM & ERP Systems", desc: "Streamline operations with powerful customer and resource management tools." },
    { title: "Digital Transformation Services", desc: "Modernize legacy systems and embrace cutting-edge digital practices." },
    { title: "E-Commerce Development", desc: "Launch and scale your online store with secure, high-performance solutions." },
    { title: "Cybersecurity Solutions", desc: "Safeguard your digital ecosystem with end-to-end protection." }
  ];

  return (
    <section className="w-[95%] mx-auto my-24 font-['Helvetica Neue']">

      {/* MAIN TITLE CENTERED */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 fade-item opacity-0 translate-y-6">
        Transforming Ideas into Digital Reality
      </h2>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
      <section className="w-[95%] mx-auto my-28 font-['Helvetica Neue'] ">

        {/* Center Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-16 fade-item opacity-0 translate-y-6 mt-20">
          Enterprise-Grade Capabilities
        </h2>

        {/* Three Column Text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mt-30">
          
          {/* SECURITY */}
          <div className="space-y-4 fade-item opacity-0 translate-y-6" style={{ transitionDelay: "150ms" }}>
            <h3 className="text-2xl font-semibold text-black">Security</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Ensure privacy and compliance with multi-layered protection, access controls,
              and industry-certified security standards.
            </p>
            {/* <a href="#" className="text-orange-600 font-medium text-lg hover:underline">
              Learn more →
            </a> */}
          </div>

          {/* DEPLOYMENT */}
          <div className="space-y-4 fade-item opacity-0 translate-y-6" style={{ transitionDelay: "300ms" }}>
            <h3 className="text-2xl font-semibold text-black">Deployment</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Secure your data by deploying within a dedicated virtual private cloud (VPC)
              or on-premises, air-gapped behind your firewall.
            </p>
            {/* <a href="#" className="text-orange-600 font-medium text-lg hover:underline">
              Learn more →
            </a> */}
          </div>

          {/* CUSTOMIZATION */}
          <div className="space-y-4 fade-item opacity-0 translate-y-6" style={{ transitionDelay: "450ms" }}>
            <h3 className="text-2xl font-semibold text-black">Customization</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Train models on your proprietary data and build customized AI solutions
              tailored to your needs and infrastructure.
            </p>
            {/* <a href="#" className="text-orange-600 font-medium text-lg hover:underline">
              Learn more →
            </a> */}
          </div>

        </div>

      </section>

      {/* INDUSTRIES SECTION */}
{/* <section className="w-[95%] mx-auto my-32 font-['Helvetica Neue']"> */}

  {/* Title */}
  {/* <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-14 fade-item opacity-0 translate-y-6">
    Industries We Support
  </h2> */}

  {/* Horizontal Scroll Wrapper */}
  {/* <div
    className="flex gap-8 overflow-x-auto scrollbar-hide py-4 px-2 fade-item opacity-0 translate-y-6"
    style={{ scrollBehavior: "smooth" }}
  >

    {[
      "Finance",
      "Healthcare",
      "E-Commerce",
      "Real Estate",
      "Education",
      "Travel & Hospitality",
      "Manufacturing"
    ].map((name, i) => (
      <div
        key={i}
        className="min-w-[260px] h-[300px] bg-gray-100 rounded-2xl flex flex-col items-center justify-center
                   text-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        style={{ transitionDelay: `${i * 120}ms` }} */}
      {/* > */}
        {/* Placeholder image box */}
        {/* <div className="w-40 h-40 bg-gray-300 rounded-xl mb-4"></div> */}

        {/* Title */}
        {/* <p className="text-xl font-semibold text-gray-800">{name}</p>
      </div>
    ))}

  </div>
</section> */}


    </section>
  );
}
