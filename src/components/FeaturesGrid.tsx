/*
 * FeaturesGrid — Aethelon Agency
 * Design: 12 features in a responsive grid with icons and descriptions
 * Minimalist luxury aesthetic
 */
import { useEffect, useRef, useState } from "react";
import {
  Zap,
  Box,
  Search,
  Mail,
  MessageSquare,
  Palette,
  Globe,
  Lock,
  Settings,
  FileText,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const FEATURES = [
  {
    number: "01",
    title: "Next.js Headless Frontend",
    description:
      "Lightning-fast storefront connected to Shopify/WooCommerce backend. Delivers up to 70% faster loading (Source: Vercel Engineering, 2024).",
    icon: Zap,
  },
  {
    number: "02",
    title: "AR Product Preview",
    description:
      "Spatial room placement via mobile camera. 94% higher conversion rates (Shopify, 2025), 40% fewer returns (BrandXR, 2025).",
    icon: Box,
  },
  {
    number: "03",
    title: "3D Product Models",
    description:
      "Interactive rotatable assets. 94% higher conversion (Shopify, 2025), 40% fewer returns (Shopify AR Study, 2023), 30% sales bump (Onix, 2025).",
    icon: Smartphone,
  },
  {
    number: "04",
    title: "Cart Recovery",
    description:
      "Automated sequences for abandonment (75% avg, 83% for furniture) (Baymard, 2024/2025). Recovers 10% lost revenue (SellersCommerce, 2025).",
    icon: TrendingUp,
  },
  {
    number: "05",
    title: "Newsletter System",
    description:
      "Email infrastructure returning $36 per $1 spent, with 3x more revenue from welcome sequences (Source: Klaviyo, 2024).",
    icon: Mail,
  },
  {
    number: "06",
    title: "AI Chatbot",
    description:
      "Handles 80% of consumer interactions in 2025 (IBM, 2024), reduces support costs by 30%, responding under 3 seconds.",
    icon: MessageSquare,
  },
  {
    number: "07",
    title: "Advanced Search & Filters",
    description:
      "Search users are 2-3x more likely to convert (Forrester, 2024), but 68% leave if search fails in seconds (Baymard, 2024).",
    icon: Search,
  },
  {
    number: "08",
    title: "Blog & SEO Infrastructure",
    description:
      "Organic search drives 53% traffic (BrightEdge, 2024). Blogging businesses secure 67% more leads (HubSpot, 2024).",
    icon: FileText,
  },
  {
    number: "09",
    title: "Landing Pages",
    description:
      "Convert at 3.5-5.2% vs 1.8-2.5% standard (COREPPC, 2026), generating 55% more leads with 10+ pages (HubSpot, 2024).",
    icon: Palette,
  },
  {
    number: "10",
    title: "Security Audit & Patch",
    description:
      "Mitigate critical flaws like CVE-2025-64459 Django SQL injection (rated 9.1/10 by Endor Labs, 2025) and secure against $200k average breach costs (IBM, 2024).",
    icon: Lock,
  },
  {
    number: "11",
    title: "Multi-language & Multi-currency",
    description:
      "76% prefer native language (CSA, 2024), driving up to a 12% increase in international conversion rates (Shopify, 2024).",
    icon: Globe,
  },
  {
    number: "12",
    title: "Admin Dashboard Upgrade",
    description:
      "Optimized custom backends. $1 in UX design returns $100 (Forrester), boosting operations and speed.",
    icon: Settings,
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
