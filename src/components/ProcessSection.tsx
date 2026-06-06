/*
 * ProcessSection — Aethelon Agency
 * Design: Minimalist luxury, 6-step engagement model
 */
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "20-minute Zoom to understand your store, your products, your current setup, and your goals.",
  },
  {
    number: "02",
    title: "Proposal & Scope",
    description:
      "We send a detailed proposal within 24 hours covering deliverables, timeline, and milestone breakdown.",
  },
  {
    number: "03",
    title: "Kickoff",
    description:
      "Brief signed, 20% deposit paid, credentials shared. Work begins within 48 hours.",
  },
  {
    number: "04",
    title: "Design",
    description:
      "Full mockups delivered for your review and approval. No development starts until you approve.",
  },
  {
    number: "05",
    title: "Build & Staging",
    description:
      "Full build deployed to a staging environment. You test everything — AR, checkout, search, speed — before going live.",
  },
  {
    number: "06",
    title: "Launch & Handover",
    description:
      "Live deployment, full handover documentation, and 2 weeks free maintenance. Retainer option presented.",
  },
];

function StepCard({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ${index * 80}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s ${index * 80}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <div
        className="p-8 md:p-10 h-full flex flex-col"
        style={{
          background: "#F8F6F2",
          border: "1px solid rgba(20, 19, 18,0.1)",
        }}
      >
        <span className="font-label text-[#C5A880] mb-4">{step.number}</span>
        <h3 className="font-display text-xl text-[#141312] mb-4">
          {step.title}
        </h3>
        <p className="font-body text-sm text-[#141312]/60 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTitleVisible(true);
      },
      { threshold: 0.1 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="bg-[#F8F6F2] section-spacing">
      <div className="container">
        <div
          ref={titleRef}
          className="text-center mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <h2 className="heading-lg text-[#141312] mb-6">Our Process</h2>
          <p className="font-body text-[#141312]/60 max-w-2xl mx-auto">
            A structured, transparent engagement model that keeps you informed
            every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
