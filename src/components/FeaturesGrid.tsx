/*
 * FeaturesGrid — Aethelon Agency
 * Design: 12 features in a responsive grid with icons and descriptions
 * Minimalist luxury aesthetic
 */
import { useEffect, useRef, useState } from "react";
import {
  Box,
  Monitor,
  Sparkles,
  Search,
  Mic,
  Cpu,
  TrendingUp,
  LineChart,
  Share2,
  Mail,
  FileText,
  Lock,
} from "lucide-react";

const FEATURES = [
  {
    number: "01",
    title: "Wall + Floor AR Preview",
    description:
      "Customers place your products on walls and floors in their actual room before buying. 94% higher conversion rate on products with AR (Shopify, 2025).",
    icon: Box,
  },
  {
    number: "02",
    title: "Desktop AR Compositing",
    description:
      "No modern phone required. Customers upload a room photo, place your 3D products inside it, resize, rotate, and save. Works on every device.",
    icon: Monitor,
  },
  {
    number: "03",
    title: "AI Room Analysis",
    description:
      "Customer uploads a room photo and AI analyzes lighting, style, and space to recommend which products fit and how to place them. Powered by Gemini Vision (Full & Enterprise).",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Semantic AI Search",
    description:
      "Understands 'minimalist oak desk for small studio' not just 'desk.' Hybrid vector and lexical matching. Zero no-results states.",
    icon: Search,
  },
  {
    number: "05",
    title: "Voice Search",
    description:
      "Hands-free catalog search via Web Speech API, feeding directly into the semantic search engine.",
    icon: Mic,
  },
  {
    number: "06",
    title: "Generative 3D Pipeline",
    description:
      "Admins upload a 2D product image and get a production-ready 3D model generated automatically (Enterprise only). Expand your catalog without a 3D artist.",
    icon: Cpu,
  },
  {
    number: "07",
    title: "2-Stage Cart Recovery",
    description:
      "Automated emails at 1 hour and 24 hours after abandonment. 45% open rate, recovers up to 10% of lost revenue with zero ad spend (SellersCommerce, 2025).",
    icon: TrendingUp,
  },
  {
    number: "08",
    title: "AI COO Dashboard",
    description:
      "Daily strategy briefings, sales velocity forecasting, inventory reorder alerts, and review sentiment analysis — all generated automatically for the store admin (Enterprise only).",
    icon: LineChart,
  },
  {
    number: "09",
    title: "AR Snapshot Sharing",
    description:
      "Customers capture a high-res screenshot of your product in their room and share it. Free user-generated marketing built into every session.",
    icon: Share2,
  },
  {
    number: "10",
    title: "Newsletter System",
    description:
      "Full signup flow, welcome sequence, and list management. Email averages $36 return per $1 spent (Klaviyo, 2024).",
    icon: Mail,
  },
  {
    number: "11",
    title: "Blog and SEO Infrastructure",
    description:
      "CMS-connected blog with structured data, automatic sitemap, and meta control. 68% of online experiences start with search (BrightEdge, 2024).",
    icon: FileText,
  },
  {
    number: "12",
    title: "Security Audit and Patch",
    description:
      "Full vulnerability audit including Django CVE-2025-64459 — a critical SQL injection rated 9.1/10 disclosed in 2025. Included in every tier.",
    icon: Lock,
  },
];

function FeatureItem({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const Icon = feature.icon;

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
      className="group p-6 bg-[#F8F6F2] hover:bg-[#141312] transition-all duration-300"
      style={{
        border: "1px solid rgba(20, 19, 18,0.1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${index * 50}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 50}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div
            className="w-10 h-10 flex items-center justify-center group-hover:bg-[#C5A880] transition-colors duration-300"
            style={{
              border: "1px solid rgba(20, 19, 18,0.2)",
              borderColor: "rgba(197, 168, 128,0.3)",
            }}
          >
            <Icon
              size={16}
              className="text-[#141312] group-hover:text-[#F8F6F2] transition-colors duration-300"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-baseline gap-2 mb-2">
            <h3 className="font-display text-lg text-[#141312] group-hover:text-[#F8F6F2] transition-colors duration-300">
              {feature.title}
            </h3>
            <span className="font-label text-xs text-[#C5A880]/30 group-hover:text-[#C5A880]/50">
              {feature.number}
            </span>
          </div>

          <p className="font-body text-sm text-[#141312]/60 group-hover:text-[#F8F6F2]/70 transition-colors duration-300 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
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
    <section id="features" className="bg-[#F8F6F2] section-spacing">
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
          <h2 className="heading-lg text-[#141312] mb-4">
            Everything a 2026 Store Needs
          </h2>
          <p className="font-body text-[#141312]/50 text-lg max-w-2xl">
            Not a template. Not a theme. A custom-built storefront engineered
            around your products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {FEATURES.map((feature, i) => (
            <FeatureItem key={feature.number} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
