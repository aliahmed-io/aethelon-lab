/*
 * MilestonePlan — Aethelon Agency
 * Design: Minimalist luxury, project timeline with 4-phase milestone payments
 */
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Calendar, DollarSign, Quote } from "lucide-react";

const MILESTONES = [
  {
    phase: "Kickoff",
    percentage: "20%",
    duration: "Week 1",
    pricing: "Starter: $400 | Core: $800 | Full: $1,000",
    description:
      "Brief signed, credentials shared, project starts, and initial environment setups are established.",
    deliverables: [
      "Signed Project Brief",
      "Repository Setup",
      "Environment Configurations",
      "Database Schema Sketch",
    ],
  },
  {
    phase: "Design Approval",
    percentage: "30%",
    duration: "Week 2-3",
    pricing: "Starter: $600 | Core: $1,200 | Full: $1,500",
    description:
      "You review and approve high-fidelity UI design mockups and design systems before any frontend development begins.",
    deliverables: [
      "Typography & Color Palette",
      "High-Fidelity Desktop Mockups",
      "Mobile Layout Prototypes",
      "Figma/Design Handoff Assets",
    ],
  },
  {
    phase: "Staging Deploy",
    percentage: "30%",
    duration: "Week 4-6",
    pricing: "Starter: $600 | Core: $1,200 | Full: $1,500",
    description:
      "Frontend architecture is fully developed and deployed to a staging environment with all features and integrations active.",
    deliverables: [
      "Next.js Headless Integration",
      "3D Configurator Prototype",
      "Cart Recovery Sequences",
      "Staging Environment Live",
    ],
  },
  {
    phase: "Launch",
    percentage: "20%",
    duration: "Week 7-8",
    pricing: "Starter: $400 | Core: $800 | Full: $1,000",
    description:
      "Production build deployed, domain mapped, security hardening completed, and final project handover finished.",
    deliverables: [
      "Production Deployment",
      "Hardened Security Configuration",
      "Optimized Web Vitals Reports",
      "Code & Asset Handover",
    ],
  },
];

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: (typeof MILESTONES)[0];
  index: number;
}) {
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
      className="relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${index * 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      {/* Timeline connector */}
      {index < MILESTONES.length - 1 && (
        <div
          className="absolute left-6 top-16 w-[1px] h-24 bg-gradient-to-b from-[#C5A880] to-[#C5A880]/20"
          style={{ transform: "translateX(-50%)" }}
        />
      )}

      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="flex flex-col items-center pt-1">
          <div className="w-12 h-12 rounded-full border border-[#C5A880]/30 bg-[#F8F6F2] flex items-center justify-center flex-shrink-0">
            <CheckCircle2 size={20} className="text-[#C5A880]" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
            <div>
              <h3 className="font-display text-xl text-[#141312] font-semibold">
                {milestone.phase}
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                <div className="flex items-center gap-1 font-label text-xs text-[#C5A880]">
                  <Calendar size={12} />
                  {milestone.duration}
                </div>
                <div className="flex items-center gap-1 font-label text-xs text-[#C5A880]">
                  <DollarSign size={12} />
                  {milestone.percentage} of project
                </div>
              </div>
            </div>
            <div className="font-body text-xs text-[#141312] font-bold bg-[#141312]/5 px-3 py-1.5 border border-[#141312]/10 rounded-sm tabular-nums">
              {milestone.pricing}
            </div>
          </div>

          <p className="font-body text-sm text-[#141312]/60 leading-relaxed mb-4">
            {milestone.description}
          </p>

          <div>
            <p className="font-label text-[10px] tracking-wider text-[#141312]/40 mb-2 uppercase">
              Deliverables:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {milestone.deliverables.map(item => (
                <span
                  key={item}
                  className="px-2.5 py-1 bg-[#F8F6F2] text-[#141312]/70 font-body text-xs border border-[#141312]/10 rounded-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MilestonePlan() {
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
    <section
      id="process"
      className="bg-[#F8F6F2] section-spacing border-t border-[#141312]/5"
    >
      <div className="container">
        {/* Title */}
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
            Execution Roadmap
          </span>
          <h2 className="heading-lg text-[#141312] mb-4">
            Milestone Payment Schedule
          </h2>
          <p className="font-body text-[#141312]/60 text-base leading-relaxed">
            A typical custom storefront takes 6–8 weeks from kickoff to launch.
            Our 4-phase system ensures you only pay after approving completed
            deliverables.
          </p>
        </div>

        {/* Editorial Pull Quote Block */}
        <div className="mb-16 max-w-3xl border-l-2 border-[#C5A880] bg-[#141312]/5 p-8 relative overflow-hidden">
          <Quote className="absolute right-6 top-6 text-[#C5A880]/10 w-24 h-24 pointer-events-none" />
          <p className="font-display text-lg italic text-[#141312] leading-relaxed mb-4 relative z-10">
            "You start with $400. You only pay the next installment after you've
            approved what was built. If at any point you're not satisfied, we
            stop — you've only paid for what was delivered."
          </p>
          <div className="font-label text-xs tracking-wider text-[#C5A880] uppercase font-semibold">
            — The Aethelon Commitment
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mb-16">
          {MILESTONES.map((milestone, i) => (
            <MilestoneCard
              key={milestone.phase}
              milestone={milestone}
              index={i}
            />
          ))}
        </div>

        {/* Summary box */}
        <div className="mt-16 p-8 bg-[#141312] border border-[#C5A880]/20 text-[#F8F6F2] max-w-3xl">
          <h3 className="font-display text-lg text-[#F8F6F2] font-semibold mb-4">
            4-Phase Payment Summary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {MILESTONES.map(m => (
              <div key={m.phase} className="border-l border-[#C5A880]/30 pl-4">
                <p className="font-label text-xs text-[#C5A880] mb-1 uppercase tracking-wider">
                  {m.phase}
                </p>
                <p className="font-display text-xl text-[#F8F6F2] font-bold">
                  {m.percentage}
                </p>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#F8F6F2]/50 mt-6 leading-relaxed">
            No licensing block-in. You retain absolute ownership of codebases,
            3D assets, and automation setups from the minute each milestone is
            paid.
          </p>
        </div>
      </div>
    </section>
  );
}
