/*
 * CaseStudiesPage — Aethelon Agency
 * Design: Minimalist luxury, detailed performance reports for real brands (Burrow, Heal's, Boll & Branch)
 */
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, TrendingUp } from "lucide-react";

const PERFORMANCE_REPORTS = [
  {
    id: "headless",
    name: "Burrow",
    tagline: "Headless Storefront Migration: Speed & Conversion Optimization",
    challenge:
      "Burrow's modular furniture storefront suffered from slow page loads on mobile networks and rigid template files that limited customization. The monolithic storefront led to server response delays and hydration lag, causing poor search engine indexing.",
    solution:
      "A custom headless Next.js architecture using static site generation (SSG) and edge hosting on Vercel. By decoupling the presentation layer from the Shopify backend, page loads were delivered instantly via APIs, providing complete design control.",
    results: [
      {
        metric: "Page Load Time",
        before: "Legacy Monolith",
        after: "+50% Speed",
        change: "Source: Burrow Study",
      },
      {
        metric: "Conversion Rate",
        before: "Baseline",
        after: "+30% Boost",
        change: "Source: Burrow Study",
      },
      {
        metric: "Average Order Value",
        before: "Standard",
        after: "+15% Lift",
        change: "Source: Burrow Study",
      },
      {
        metric: "Mobile Checkout Speed",
        before: "Unoptimized",
        after: "Instant Load",
        change: "Source: Burrow Study",
      },
    ],
    timeline: "4-6 weeks implementation",
    features: [
      "Decoupled Frontend",
      "Next.js SSG Pages",
      "Shopify Storefront API",
      "React Server Components",
      "Edge Caching",
    ],
  },
  {
    id: "ar-3d",
    name: "Heal's",
    tagline: "Interactive 3D Configurator: Spatial Visualization & Sizing Reviews",
    challenge:
      "Heal's premium furniture line requires detailed fabric inspection and sizing checks. Traditional flat photography failed to convey spatial dimensions and fabric textures online, resulting in shopping hesitation and higher return rates.",
    solution:
      "Integration of WebGL-based interactive 3D configurators and WebXR AR previews directly on the product detail pages. Customers can spin, zoom, swap fabrics, and project products directly into their living rooms to verify dimensions.",
    results: [
      {
        metric: "3D Conversion Lift",
        before: "2D Images Only",
        after: "2.4x Increase",
        change: "Source: Heal's Report",
      },
      {
        metric: "Transaction Value",
        before: "Baseline",
        after: "+12% Growth",
        change: "Source: Heal's Report",
      },
      {
        metric: "Product Return Rate",
        before: "Standard Returns",
        after: "-35% Drop",
        change: "Source: Heal's Report",
      },
      {
        metric: "Customer Engagement",
        before: "Short Bounce",
        after: "+2.5 min Session",
        change: "Source: Heal's Report",
      },
    ],
    timeline: "6-8 weeks implementation",
    features: [
      "WebGL Model Viewer",
      "Mobile-First WebXR",
      "dynamic color variant gallery sync with 3D model viewer",
      "Model-Viewer Engine",
      "Texture Detailing",
    ],
  },
  {
    id: "automation",
    name: "Boll & Branch",
    tagline: "Lifecycle Automation: Behavioral Cart Recovery & Retention",
    challenge:
      "Luxury home bedding shoppers have long research and consideration cycles, leading to high cart abandonment rates on standard checkout flows. Generic email blasting failed to support buyers during their decision window.",
    solution:
      "Configured server-side checkout tracking coupled with automated, multi-tiered Klaviyo email sequences. Triggered welcome sequences, dynamic cart recovery, and browse-abandonment flows were tailored to the bedding buyer's consideration timeline.",
    results: [
      {
        metric: "Total Store Revenue",
        before: "Unautomated",
        after: "+10% Increase",
        change: "Source: Klaviyo Study",
      },
      {
        metric: "Cart Email Open Rate",
        before: "Standard Email",
        after: "45% Open",
        change: "Source: Klaviyo Study",
      },
      {
        metric: "Abandoned Cart Recovery",
        before: "Zero Recovery",
        after: "15% Recovered",
        change: "Source: Klaviyo Study",
      },
      {
        metric: "Welcome Flow Revenue",
        before: "Standard Promo",
        after: "3x Yield",
        change: "Source: Klaviyo Study",
      },
    ],
    timeline: "3-4 weeks implementation",
    features: [
      "Dynamic Cart Triggers",
      "Behavioral Email Flows",
      "Klaviyo Automation",
      "Consideration Welcome Path",
      "Checkout Event Logs",
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
        <h3 className="font-display text-3xl text-[#141312] mb-2 font-bold">
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
                {result.change}
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
          className="flex items-center gap-2 font-label text-sm text-[#C5A880] hover:text-[#141312] transition-colors mb-12 cursor-pointer"
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
            Industry Results
          </h1>
          <p className="font-body text-lg text-[#141312]/60 leading-relaxed mb-4">
            Results sourced from published industry reports on headless commerce migrations.
          </p>
          <p className="font-body text-lg text-[#141312]/60 leading-relaxed">
            Data-backed analyses of headless storefronts, WebXR 3D configuration, and lifecycle automation from market-leading brands. These studies details how top furniture and bedding retailers utilize modern storefront architectures to drive conversion metrics.
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
