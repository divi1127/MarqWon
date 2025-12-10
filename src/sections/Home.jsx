import React, { useEffect } from "react";

// --- 1. CONTENT DATA SEPARATION ---
// Edit your text and images here without touching the complex layout code below.
const contentData = {
  mainTitle: "Why Choose Us?",
  imageSrc: "https://i.pinimg.com/736x/4b/f6/1f/4bf61f7bec0d6e6d35644df9f76e210e.jpg",
  imageAlt: "Futuristic Cityscape",
  features: [
    {
      title: "Disruptive Innovation:",
      description: "We don’t just follow trends—we create them.",
    },
    {
      title: "Efficiency-Driven:",
      description: "More output. Less friction. Maximum results.",
    },
    {
      title: "Custom-Built for You:",
      description: "Every system tailored precisely to your business needs.",
    },
    {
      title: "Next-Gen Tech, Today:",
      description: "AI, automation, cloud, cybersecurity — delivered with unmatched precision.",
    },
  ],
};

export default function WhyChooseUs() {
  // --- 2. ANIMATION LOGIC (Intersection Observer) ---
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute("data-delay");
            if (delay) entry.target.style.transitionDelay = delay;
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el, i) => {
      // If no manual delay is set, auto-calculate based on index
      if (!el.getAttribute("data-delay")) {
        el.style.transitionDelay = `${i * 150}ms`;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative w-[95%] mx-auto my-20
      bg-gradient-to-br from-indigo-200 via-orange-100 to-orange-200
      rounded-3xl shadow-xl overflow-hidden font-['Inter'] p-0"
    >
      <div className="flex flex-col lg:flex-row w-full min-h-[600px]">
        
        {/* --- LEFT SIDE: TEXT SECTION --- */}
        <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10 order-2 lg:order-1">
          
          {/* Background Decorative Blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 opacity-30 rounded-full 
blur-3xl mix-blend-multiply -translate-x-1/2 -translate-y-1/2 animate-float" />

<div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-300 opacity-30 rounded-full 
blur-3xl mix-blend-multiply translate-x-1/4 translate-y-1/4 animate-float2" />

          {/* Main Title */}
   <h3
    className="scroll-fade text-3xl md:text-5xl lg:text-5xl font-light text-black mb-8 leading-tight"
    style={{ fontFamily: 'Poppins, sans-serif' }} // Explicitly using Poppins simulation
    data-delay="80ms"
>
            {contentData.mainTitle}
          </h3>

          {/* Feature List - Mapped Dynamically */}
          <div className="space-y-6 text-black text-lg md:text-xl leading-relaxed font-medium">
            {contentData.features.map((feature, index) => (
              <p 
                key={index} 
                className="scroll-fade" 
                // Calc delay: Base 200ms + 150ms for each item for a staggered effect
                data-delay={`${200 + index * 150}ms`}
              >
                <strong className="font-semibold text-2xl block mb-1">
                  {feature.title}
                </strong>
                {feature.description}
              </p>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: IMAGE SECTION --- */}
        <div className="w-full lg:w-1/2 relative h-80 lg:h-auto order-1 lg:order-2 overflow-hidden">
          <img
            src={contentData.imageSrc}
            alt={contentData.imageAlt}
            className="absolute inset-0 w-full h-full object-cover scroll-fade 
                       lg:[clip-path:polygon(15%_0,_100%_0,_100%_100%,_0%_100%)]"
            data-delay="400ms"
          />
        </div>
      </div>
    </section>
  );
}