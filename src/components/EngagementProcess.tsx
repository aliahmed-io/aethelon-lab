/*
 * EngagementProcess — Aethelon Agency
 * Design: Minimalist luxury, detailed engagement workflow
 */
import { useEffect, useRef, useState } from "react";
import { Phone, FileText, Pencil, Code, TestTube, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: Phone,
    number: "01",
    title: "Discovery Call (20 min)",
    description:
      "A 20-minute Zoom. You tell us about your brand, products, and goals. We outline high-level technical possibilities.",
    details: [
      "20-minute Zoom session",
      "Understand your brand & products",
      "Discuss budget & timelines",
      "Answer initial questions",
    ],
  },
  {
    icon: FileText,
    number: "02",
    title: "Proposal & Scope (24 hours)",
    description:
      "Within 24 hours, you receive a detailed, comprehensive proposal outlining precise deliverables and milestone pricing.",
    details: [
      "24 hours turnaround",
      "Detailed project scope",
      "Feature-by-feature breakdown",
      "Transparent milestone pricing",
    ],
  },
  {
    icon: Pencil,
    number: "03",
    title: "Kickoff (48 hours after signing)",
    description:
      "Within 48 hours of signing the brief and deposit, we set up repositories, mapping environments to begin development.",
    details: [
      "48 hours setup window",
      "Credentials & code setup",
      "Shared slack channel launch",
      "Initial architectural roadmap",
    ],
  },
  {
    icon: Code,
    number: "04",
    title: "Design Phase",
    description:
      "We audit competitors, establish the design tokens, and build high-fidelity interactive UI mockups for your approval.",
    details: [
      "Competitive design audit",
      "Design tokens & grid system",
      "Interactive desktop & mobile mockups",
      "Iterative feedback cycles",
    ],
  },
  {
    icon: TestTube,
    number: "05",
    title: "Build & Staging",
    description:
      "We construct the Next.js headless storefront and AR components. Everything is hosted on a staging site for your testing.",
    details: [
      "Next.js app router frontend",
      "AR/3D model optimization",
      "Staging preview environment",
      "Rigorous speed & layout QA",
    ],
  },
  {
    icon: Rocket,
    number: "06",
    title: "Launch & Handover",
    description:
      "We manage DNS migration, perform final SEO and speed optimizations, train your team, and coordinate production launch.",
    details: [
      "Seamless DNS mapping",
      "Final SEO & Vitals audit",
      "Team training session",
      "Handover of all code & models",
    ],
  },
];

function StepCard({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const Icon = step.icon;
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
      className="p-8 bg-[#F8F6F2] hover:bg-[#141312]/5 transition-all duration-300"
      style={{
        border: "1px solid rgba(20, 19, 18,0.1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${index * 80}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 80}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-[#141312] rounded-lg flex-shrink-0">
          <Icon size={20} className="text-[#C5A880]" />
        </div>
        <div>
          <p className="font-label text-xs text-[#C5A880] mb-1">
            {step.number}
          </p>
          <h3 className="font-display text-lg text-[#141312]">{step.title}</h3>
        </div>
      </div>

      <p className="font-body text-[#141312]/60 mb-6">{step.description}</p>

      <ul className="space-y-2">
        {step.details.map(detail => (
          <li
            key={detail}
            className="flex items-start gap-2 font-body text-sm text-[#141312]/50"
          >
            <span className="text-[#C5A880] mt-1">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EngagementProcess() {
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
          className="mb-16 max-w-2xl"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <span className="font-label text-xs tracking-widest text-[#C5A880] uppercase block mb-3">
            Our Process
          </span>
          <h2 className="heading-lg text-[#141312] mb-4">What Will Happen</h2>
          <p className="font-body text-[#141312]/60">
            A transparent, collaborative process. You're involved at every step.
            No black boxes. No surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-12 bg-[#141312] text-[#F8F6F2] max-w-3xl">
          <h3 className="font-display text-2xl text-[#F8F6F2] mb-4">
            Ready to Start?
          </h3>
          <p className="font-body text-[#F8F6F2]/70 mb-6">
            Book a free discovery call. No obligation. We'll show you the demo,
            answer your questions, and tell you exactly what we'd build for your
            store.
          </p>
          <a
            href="/#contact"
            className="inline-block px-6 py-3 bg-[#C5A880] text-[#141312] font-label text-sm hover:bg-[#F8F6F2] transition-colors"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}
