/*
 * CaseStudiesPage — Aethelon Agency
 * Design: Minimalist luxury, detailed performance reports with metrics
 */
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, TrendingUp } from "lucide-react";

const PERFORMANCE_REPORTS = [
  {
    id: "headless",
    name: "Next.js Headless Frontends",
    tagline: "Performance Benchmark: Speed & Conversion Optimization",
    challenge:
      "Monolithic storefront templates coupled directly to backend databases suffer from slow initial server responses and hydration lag, causing poor search ranking and user bounce.",
    solution:
      "Decoupled Next.js architectures using static site regeneration and edge hosting deliver pre-rendered HTML in milliseconds, drastically boosting conversion metrics.",
    results: [
      {
        metric: "Page Load Time",
        before: "Monolith",
        after: "70% Faster",
        change: "Vercel, 2024",
      },
      {
        metric: "1s Delay Penalty",
        before: "Baseline",
        after: "-7% Conv.",
        change: "Google, 2024",
      },
      {
        metric: "Bounce Probability",
        before: "Slow Load",
        after: "-15% Drop",
        citation: "Under 2s (Google)",
      },
      {
        metric: "Credibility Shift",
        before: "Unstructured",
        after: "+75% Trust",
        citation: "Stanford Study",
      },
    ],
    timeline: "4-6 weeks implementation",
    features: [
      "Static Generation (SSG)",
      "Edge Middleware",
      "Image Optimization",
      "React Server Components",
      "API Middleware",
    ],
  },
  {
    id: "ar-3d",
    name: "AR & 3D Product Previews",
    arrow: "ar-3d",
    tagline: "Performance Benchmark: Spatial Visualization & Return Reduction",
    challenge:
      "Traditional 2D product photos fail to convey dimensions, materials, and spatial context for high-value items, leading to high support overhead and returns.",
    solution:
      "Custom WebGL-based 3D configurators and augmented reality previews built directly into Next.js. Customers inspect details and scale interactively on their mobile devices.",
    results: [
      {
        metric: "Sales Conversion",
        before: "2D Imagery",
        after: "+94% Boost",
        change: "Shopify, 2025",
      },
      {
        metric: "Return Rate Drop",
        before: "Standard",
        after: "-40% Drop",
        change: "BrandXR, 2025",
      },
      {
        metric: "AR Purchase Intent",
        before: "Traditional",
        after: "3x Likely",
        change: "Deloitte, 2024",
      },
      {
        metric: "Visual Engagement",
        before: "Static Photo",
        after: "30% Sales",
        change: "Onix, 2025",
      },
    ],
    timeline: "6-8 weeks implementation",
    features: [
      "WebGL / WebXR",
      "Custom 3D Optimization",
      "Model-Viewer Config",
      "Touch Interaction",
      "Material Selectors",
    ],
  },
  {
    id: "automation",
    name: "Lifecycle Automation & Cart Recovery",
    tagline: "Performance Benchmark: Revenue Recovery & Customer Retention",
    challenge:
      "Cart abandonment remains a persistent issue, with home decor and furniture categories suffering from lengthy consideration phases and high exit rates.",
    solution:
      "Server-side checkout tracking coupled with automated, multi-tiered email flows designed to recover lost revenue and support buyers during high-intent windows.",
    results: [
      {
        metric: "Furniture Abandonment",
        before: "Industry Avg",
        after: "83% Rate",
        change: "Baymard, 2025",
      },
      {
        metric: "Revenue Recaptured",
        before: "Unautomated",
        after: "+10% Saved",
        change: "SellersCommerce, 2025",
      },
      {
        metric: "Email Yield",
        before: "$1 Spent",
        after: "$36 Return",
        change: "Klaviyo, 2024",
      },
      {
        metric: "Abandoned Open Rate",
        before: "Standard",
        after: "45% Open",
        change: "SellersCommerce",
      },
    ],
    timeline: "3-4 weeks implementation",
    features: [
      "Cart Recovery Sequences",
      "Welcome Sequences",
      "Transactional Email Setup",
      "Klaviyo API Sync",
      "Checkout Analytics",
    ],
  },
];

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
      className="mb-16 pb-16 border-b border-[#C5A880]/20 last:border-b-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${index * 150}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 150}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <div className="mb-8">
        <h3 className="font-display text-3xl text-[#141312] mb-2">
          {report.name}
        </h3>
        <p className="font-label text-sm text-[#C5A880] mb-4">
          {report.tagline}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-display text-sm font-semibold text-[#141312] mb-3">
              Architectural Challenge
            </h4>
            <p className="font-body text-[#141312]/60 leading-relaxed">
              {report.challenge}
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold text-[#141312] mb-3">
              System Solution
            </h4>
            <p className="font-body text-[#141312]/60 leading-relaxed">
              {report.solution}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-display text-sm font-semibold text-[#141312] mb-6">
          Performance Metrics
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {report.results.map(result => (
            <div
              key={result.metric}
              className="p-4 bg-[#F8F6F2] border border-[#C5A880]/20"
            >
              <p className="font-label text-xs text-[#C5A880] mb-2">
                {result.metric}
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="font-display text-lg text-[#141312] font-semibold tabular-nums">
                  {result.after}
                </p>
                <p className="font-body text-xs text-[#141312]/40">
                  vs {result.before}
                </p>
              </div>
              <p className="font-label text-[10px] text-[#C5A880] flex items-center gap-1">
                <TrendingUp size={12} />
                {result.change || (result as any).citation}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="font-label text-xs text-[#C5A880] mb-2">
            DEPLOYMENT WINDOW
          </p>
          <p className="font-display text-lg text-[#141312]">
            {report.timeline}
          </p>
        </div>
        <div>
          <p className="font-label text-xs text-[#C5A880] mb-3">
            SYSTEM CAPABILITIES
          </p>
          <div className="flex flex-wrap gap-2">
            {report.features.map(feature => (
              <span
                key={feature}
                className="px-3 py-1 bg-[#141312] text-[#F8F6F2] font-label text-[10px] uppercase tracking-wider"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {
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
    <div className="bg-[#F8F6F2] min-h-screen">
      <div className="container py-20">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 font-label text-sm text-[#C5A880] hover:text-[#141312] transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div
          ref={titleRef}
          className="mb-20 max-w-3xl"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <h1 className="heading-lg text-[#141312] mb-6">
            Industry Performance Reports
          </h1>
          <p className="font-body text-lg text-[#141312]/60 leading-relaxed">
            Data-backed analyses of e-commerce feature performance across the
            furniture and home goods industry. Reports utilize verified
            benchmarks to highlight the return on technology investments.
          </p>
        </div>

        <div className="max-w-4xl">
          {PERFORMANCE_REPORTS.map((report, i) => (
            <ReportCard key={report.id} report={report} index={i} />
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#141312] text-[#F8F6F2] max-w-3xl border border-[#C5A880]/20">
          <h2 className="font-display text-2xl text-[#F8F6F2] mb-4">
            Interested in Upgrading Your Store?
          </h2>
          <p className="font-body text-[#F8F6F2]/70 mb-6">
            Every engagement starts with a free 20-minute discovery call where
            we audit your current speed, security, and setup to outline
            potential growth avenues.
          </p>
          <a
            href="/#contact"
            className="inline-block px-6 py-3 bg-[#C5A880] text-[#141312] font-label text-sm hover:bg-[#F8F6F2] transition-colors font-bold uppercase tracking-wider"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  );
}
