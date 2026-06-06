/*
 * CaseStudiesSection — Aethelon Agency
 * Design: Minimalist luxury, 3 performance reports with industry metrics
 */
import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";

const PERFORMANCE_REPORTS = [
  {
    number: "01",
    feature: "Next.js Headless Frontends",
    category: "Frontend Speed & UX",
    description:
      "Decoupling the presentation layer from backend systems to deliver instant page loads and seamless navigations.",
    metrics: [
      {
        label: "Page Load Speed",
        before: "Standard",
        after: "70% Faster",
        citation: "Source: Vercel, 2024",
      },
      {
        label: "Conversion Impact",
        before: "1s Delay",
        after: "-7% Conv.",
        citation: "Source: Google, 2024",
      },
      {
        label: "Bounce Rate (Under 2s)",
        before: "High Bounce",
        after: "-15% Drop",
        citation: "Source: Google, 2024",
      },
    ],
    details: [
      "Static Site Generation",
      "Edge Middleware",
      "Image Optimization",
      "React Server Components",
    ],
    tier: "Infrastructure",
  },
  {
    number: "02",
    feature: "3D & AR Product Previews",
    category: "Immersive Commerce",
    description:
      "Interactive 3D models and augmented reality visualizations directly inside the browser, no apps required.",
    metrics: [
      {
        label: "Conversion Rate",
        before: "Flat 2D",
        after: "+94% Boost",
        citation: "Source: Shopify, 2025",
      },
      {
        label: "Return Rate Drop",
        before: "High Returns",
        after: "-40% Drop",
        citation: "Source: BrandXR, 2025",
      },
      {
        label: "Purchase Likelihood",
        before: "Static",
        after: "3x Likely",
        citation: "Source: Deloitte, 2024",
      },
    ],
    details: [
      "WebGL / WebXR",
      "Custom 3D Pipelines",
      "Shopify AR Study",
      "Model-Viewer Config",
    ],
    tier: "Visualization",
  },
  {
    number: "03",
    feature: "Lifecycle Automation",
    category: "Retention & Cart Recovery",
    description:
      "Automated recovery paths and lifecycle triggers built around furniture buying journeys.",
    metrics: [
      {
        label: "Furniture Cart Abandonment",
        before: "75% Avg",
        after: "83% Rate",
        citation: "Source: Baymard, 2024",
      },
      {
        label: "Direct Revenue Recovered",
        before: "Zero Rec",
        after: "+10% Saved",
        citation: "Source: SellersCommerce, 2025",
      },
      {
        label: "Email Newsletter ROI",
        before: "$1 Spent",
        after: "$36 Return",
        citation: "Source: Klaviyo, 2024",
      },
    ],
    details: [
      "Cart Recovery Sequences",
      "Welcome Flows",
      "Klaviyo Integrations",
      "Lifecycle Automation",
    ],
    tier: "Automation",
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
          <span className="font-sans text-[11px] text-[#141312]/40 line-through decoration-[#C5A880]/30">
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
                {report.feature}
              </h3>
              <p className="font-label text-xs text-[#C5A880]/60 mt-1 uppercase tracking-wider">
                {report.category}
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
          Core Subsystems
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
              Industry Performance Reports
            </h2>
          </div>
          <p className="font-body text-[#141312]/50 text-base max-w-2xl leading-relaxed">
            Independent research and platform benchmarks demonstrating the
            impact of Next.js headless technology, immersive 3D/AR
            visualization, and database-driven retention mechanisms in
            e-commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERFORMANCE_REPORTS.map((report, i) => (
            <ReportCard key={report.feature} report={report} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
