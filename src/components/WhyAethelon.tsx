/*
 * WhyAethelon — Aethelon Agency
 * Design: Minimalist luxury, 6 key differentiators & side-by-side comparison table
 */
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Check, X } from "lucide-react";

const REASONS = [
  {
    title: "Niche specialist",
    description:
      "We only build for furniture and home décor. We understand your products, your buyers, and what converts in your category.",
  },
  {
    title: "AR/3D is our core",
    description:
      "Not a plugin, not a third-party embed. Custom-built, fast-loading, mobile-first AR experiences.",
  },
  {
    title: "No upfront risk",
    description:
      "20% to start. Milestone payments. You own every deliverable from day one.",
  },
  {
    title: "You keep everything",
    description: "All code, all 3D files, all assets. No lock-in.",
  },
  {
    title: "Built on real performance",
    description: "Every build targets 90+ Lighthouse scores out of the box.",
  },
  {
    title: "Direct communication",
    description:
      "You work directly with the developer building your store. No account managers, no handoffs.",
  },
];

const COMPARISONS = [
  {
    feature: "Niche Specialty",
    generic: "Builds for any industry without deep category expertise",
    aethelon: "Specializes exclusively in furniture & home décor commerce",
    isAethelonBetter: true,
  },
  {
    feature: "Development Method",
    generic: "Sells you a pre-built commercial theme",
    aethelon: "Custom-built headless storefront from scratch",
    isAethelonBetter: true,
  },
  {
    feature: "AR & 3D Integration",
    generic: "Expensive third-party add-on or plugin",
    aethelon: "Core agency offering, optimized and natively integrated",
    isAethelonBetter: true,
  },
  {
    feature: "Payment Structure",
    generic: "50% upfront payment before any work begins",
    aethelon: "20% deposit with milestone payments approved by you",
    isAethelonBetter: true,
  },
  {
    feature: "Primary Contact",
    generic: "Account managers / Junior developer handoffs",
    aethelon: "Direct communication with the engineer building your store",
    isAethelonBetter: true,
  },
  {
    feature: "IP Ownership",
    generic: "Rent the code / Proprietary system lock-in",
    aethelon: "You own 100% of all code, models, and assets",
    isAethelonBetter: true,
  },
  {
    feature: "Proof of Concept",
    generic: "Generic portfolio of unrelated websites",
    aethelon: "Niche-specific demo stores and prototypes",
    isAethelonBetter: true,
  },
];

function ReasonItem({
  reason,
  index,
}: {
  reason: (typeof REASONS)[0];
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
      className="flex items-start gap-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${index * 60}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 60}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <CheckCircle2 size={20} className="text-[#C5A880] flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-display text-lg font-semibold text-[#141312] mb-2">
          {reason.title}
        </h4>
        <p className="font-body text-[#141312]/60 text-sm leading-relaxed">
          {reason.description}
        </p>
      </div>
    </div>
  );
}

export default function WhyAethelon() {
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
      id="why-aethelon"
      className="bg-[#F8F6F2] section-spacing border-t border-[#141312]/5"
    >
      <div className="container">
        {/* Differentiators */}
        <div
          ref={titleRef}
          className="mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <span className="font-label text-xs tracking-widest text-[#C5A880] uppercase block mb-3">
            Core Alignment
          </span>
          <h2 className="heading-lg text-[#141312] mb-4">
            Why Stores Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {REASONS.map((reason, i) => (
            <ReasonItem key={reason.title} reason={reason} index={i} />
          ))}
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="w-full border border-[#141312]/10 bg-white/30 backdrop-blur-sm p-8 md:p-12">
          <h3 className="font-display text-2xl md:text-3xl text-[#141312] mb-10 font-semibold text-center">
            How We Compare
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#141312]/10">
                  <th className="py-4 font-label text-xs tracking-wider text-[#C5A880] uppercase w-[25%]">
                    Feature
                  </th>
                  <th className="py-4 font-label text-xs tracking-wider text-[#141312]/40 uppercase w-[37.5%] pl-4">
                    Generic Agency
                  </th>
                  <th className="py-4 font-label text-xs tracking-wider text-[#C5A880] uppercase w-[37.5%] pl-4 bg-[#C5A880]/5">
                    Aethelon
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#141312]/5 font-body text-sm">
                {COMPARISONS.map(item => (
                  <tr
                    key={item.feature}
                    className="hover:bg-white/10 transition-colors"
                  >
                    <td className="py-4 font-semibold text-[#141312]">
                      {item.feature}
                    </td>
                    <td className="py-4 text-[#141312]/60 pl-4">
                      <div className="flex items-start gap-2">
                        <X
                          size={14}
                          className="text-red-500 mt-1 flex-shrink-0"
                        />
                        <span>{item.generic}</span>
                      </div>
                    </td>
                    <td className="py-4 text-[#141312] pl-4 font-medium bg-[#C5A880]/5">
                      <div className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="text-[#C5A880] mt-1 flex-shrink-0"
                        />
                        <span>{item.aethelon}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
