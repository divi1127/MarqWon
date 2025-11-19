import React, { useEffect } from "react";

export default function TrustedBy() {
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
      if (!el.getAttribute("data-delay")) {
        el.style.transitionDelay = `${i * 150}ms`;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const trustedNames = [
    "LG CNS",
    "Fujitsu",
    "Bell",
    "Asana",
    "SAP",
    "Salesforce",
    "Notion",
    "TD Bank",
    "Johnson Lambert",
    "Ensemble"
  ];

  return (
    <section className="w-full py-14 bg-white overflow-hidden">
      <h3
        className="text-center text-gray-700 text-lg font-medium mb-8 scroll-fade"
        data-delay="80ms"
      >
        Trusted by industry leaders worldwide
      </h3>

      <div className="relative w-full overflow-hidden mt-20">
        <div className="flex gap-20 animate-marquee items-center">
          {trustedNames.concat(trustedNames).map((name, i) => (
            <span
              key={i}
              className="scroll-fade font-inter font-light text-gray-900 text-2xl tracking-wide whitespace-nowrap"
              data-delay={`${80 * i}ms`}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
