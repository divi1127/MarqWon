import React from "react";
import { motion } from "framer-motion";
import Banner from "../components/services/Banner";
import SectionContainer from "../components/services/SectionContainer";
import FeatureCard from "../components/services/FeatureCard";
import StepCard from "../components/services/StepCard";
import banner from "../assets/webdevport.jpg";

const features = [
  { title: "Responsive Design", desc: "Optimized for all devices and screen sizes for the best user experience." },
  { title: "SEO Ready", desc: "Structured content and fast performance to rank higher on search engines." },
  { title: "Secure & Scalable", desc: "Built with modern frameworks ensuring security and scalability." },
  { title: "CMS Integration", desc: "Easily manage your content through intuitive admin dashboards." },
];

const steps = [
  { title: "Plan", desc: "We analyze your goals and target audience." },
  { title: "Design", desc: "We craft wireframes and UI/UX prototypes." },
  { title: "Develop", desc: "We build responsive, scalable solutions." },
  { title: "Deploy", desc: "We launch, test, and maintain for performance." },
];

export default function WebsiteDevelopment() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Banner
        title="Website Development"
        subtitle="We design, build and deliver fast, modern and scalable websites that drive business growth."
        image={banner}
      />

      <SectionContainer title="What We Do">
        <p className="text-gray-300 leading-relaxed">
          Our website development service focuses on creating functional, high-performing, and visually engaging
          web solutions tailored to your business goals. From landing pages to enterprise web portals, we deliver
          products that leave an impact.
        </p>
      </SectionContainer>

      <SectionContainer title="Why Choose Us">
        <p className="text-gray-300 mb-8">
          At MarqWon, we combine creativity, technology, and strategy to deliver powerful digital experiences.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Innovative Design", desc: "Beautiful, functional, and user-centric interfaces." },
            { title: "Technical Expertise", desc: "Experienced developers using the latest web technologies." },
            { title: "Performance First", desc: "Lightning-fast and optimized for conversions." },
          ].map((item, i) => (
            <FeatureCard key={i} {...item} delay={i * 0.1} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Our Core Features">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 0.1} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="How MarqWon Development Works" center>
        <p className="text-gray-300 mb-10">
          From concept to deployment, our workflow ensures smooth communication, efficient execution, and quality
          delivery every time.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <StepCard key={i} {...s} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
