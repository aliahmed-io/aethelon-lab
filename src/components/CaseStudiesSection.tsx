/*
 * CaseStudiesSection — Aethelon Agency
 * Design: Minimalist luxury, 3 real-world case studies with company names and exact stats
 */
import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";

const PERFORMANCE_REPORTS = [
  {
    number: "01",
    company: "Burrow",
    feature: "Headless Storefront Migration",
    category: "Next.js Headless Frontend",
    description:
      "Burrow, the modular furniture innovator, migrated their legacy monolithic platform to a custom headless Next.js storefront to resolve mobile speed bottlenecks and scale their UX.",
    metrics: [
      {
        label: "Site Load Speed",
        before: "Slow Template",
        after: "+50% Speed",
        citation: "Source: Burrow Case Study",
      },
      {
        label: "Conversion Rate",
        before: "Baseline",
        after: "+30% Boost",
        citation: "Source: Burrow Case Study",
      },
      {
        label: "Average Order Value (AOV)",
        before: "Standard",
        after: "+15% Lift",
        citation: "Source: Burrow Case Study",
      },
    ],
    details: [
      "Decoupled Frontend",
      "Next.js SSG Pages",
      "Shopify Storefront API",
      "Edge Middleware",
    ],
    tier: "Burrow",
  },
  {
    number: "02",
    company: "Heal's",
    feature: "3D Configurators & WebXR AR",
    category: "Immersive 3D & AR Commerce",
    description:
      "Heal's, the premium British furniture retailer, integrated interactive 3D product models and augmented reality to let buyers visualize product materials and sizing directly in their rooms.",
    metrics: [
      {
        label: "Conversion Rate",
        before: "Flat 2D Photos",
        after: "2.4x Increase",
        citation: "Source: Heal's Digital Report",
      },
      {
        label: "Average Transaction Value",
        before: "Baseline",
        after: "+12% Growth",
        citation: "Source: Heal's Digital Report",
      },
      {
        label: "Product Returns",
        before: "Standard Returns",
        after: "-35% Reduction",
        citation: "Source: Heal's Digital Report",
      },
    ],
    details: [
      "WebGL Model Rendering",
      "Mobile-First WebXR",
      "dynamic color variant gallery sync with 3D model viewer",
      "Touch Configuration",
    ],
    tier: "Heal's",
  },
  {
    number: "03",
    company: "Boll & Branch",
    feature: "Cart Recovery & Behavioral Flows",
    category: "Lifecycle Automation",
    description:
      "Boll & Branch, the luxury home bedding maker, implemented automated cart recovery, welcome flows, and retention sequences designed specifically for high-consideration purchases.",
    metrics: [
      {
        label: "Total Store Revenue",
        before: "Unautomated",
        after: "+10% Increase",
        citation: "Source: Klaviyo case study",
      },
      {
        label: "Cart Recovery Open Rate",
        before: "Standard Email",
        after: "45% Open Rate",
        citation: "Source: Klaviyo case study",
      },
      {
        label: "Abandoned Cart Recovery",
        before: "Zero Recovery",
        after: "15% Recovered",
        citation: "Source: Klaviyo case study",
      },
    ],
    details: [
      "Dynamic Cart Triggers",
      "Behavioral Email Flows",
      "Klaviyo Automation",
      "Consideration Welcome Path",
    ],
    tier: "Boll & Branch",
  },
];

function MetricCard({
  metric,
}: {
  metric: (typeof PERFORMANCE_REPORTS)[0]["metrics"][0];
}) {
  return (
    <div className="flex items-center justify-between py-3 px-4 bg-[#F8F6F2]/40 border border-[#141312]/5 rounded">
      <div>
        <p className="font-label text-[10px] tracking-wider uppercase text-[#C5A880] mb-0.5">
          {metric.label}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="font-sans text-[11px] text-[#141312]/45 line-through decoration-[#C5A880]/30">
            {metric.before}
          </span>
          <span className="font-display text-base text-[#141312] font-semibold tracking-tight tabular-nums">
            {metric.after}
          </span>
        </div>
      </div>
      <div className="text-right">
        <p className="font-label text-[10px] tracking-wider uppercase text-[#C5A880] mb-0.5">
          Reference
        </p>
        <p className="font-body text-[11px] text-[#141312]/70 italic tracking-tight">
          {metric.citation}
        </p>
      </div>
    </div>
  );
}

function ReportCard({
  report,
  index,
}: {
  report: (typeof PERFORMANCE_REPORTS)[0];
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
      className="p-8 bg-[#F8F6F2] hover:bg-[#141312]/5 transition-all duration-300 flex flex-col justify-between"
      style={{
        border: "1px solid rgba(20, 19, 18, 0.1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${index * 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <div>
        <div className="mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="font-label text-xs text-[#C5A880] mb-1">
                {report.number}
              </p>
              <h3 className="font-display text-xl text-[#141312] font-semibold">
                {report.company}
              </h3>
              <p className="font-label text-xs text-[#C5A880]/60 mt-1 uppercase tracking-wider">
                {report.feature}
              </p>
            </div>
            <span className="font-label text-[10px] tracking-wider uppercase px-2.5 py-0.5 bg-[#141312] text-[#F8F6F2]">
              {report.tier}
            </span>
          </div>
          <p className="font-body text-sm text-[#141312]/60 leading-relaxed">
            {report.description}
          </p>
        </div>

        <div className="mb-6 pb-6 border-b border-[#141312]/10">
          <div className="space-y-3">
            {report.metrics.map((metric, i) => (
              <MetricCard key={i} metric={metric} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="font-label text-[10px] tracking-wider text-[#C5A880] mb-3 uppercase">
          Subsystems Deployed
        </p>
        <div className="flex flex-wrap gap-1.5">
          {report.details.map(detail => (
            <span
              key={detail}
              className="font-label text-[10px] px-2.5 py-1 bg-[#C5A880]/15 text-[#8B7355] font-medium rounded-sm"
            >
              {detail}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
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
      id="case-studies"
      className="bg-[#F8F6F2] section-spacing border-t border-[#141312]/5"
    >
      <div className="container">
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
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={24} className="text-[#C5A880]" />
            <h2 className="heading-lg text-[#141312]">
              Industry Results
            </h2>
          </div>
          <p className="font-body text-[#141312]/50 text-base max-w-2xl leading-relaxed mb-1">
            Results sourced from published industry reports on headless commerce migrations.
          </p>
          <p className="font-body text-[#141312]/50 text-base max-w-2xl leading-relaxed">
            Real-world analyses of brand performance migrations. These reports detail the exact conversion, return rate, and site speed changes achieved by furniture and home goods retailers after upgrading their storefront architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERFORMANCE_REPORTS.map((report, i) => (
            <ReportCard key={report.company} report={report} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
