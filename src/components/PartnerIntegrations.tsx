/*
 * PartnerIntegrations — Aethelon Agency
 * Design: Minimalist luxury, partner logos and descriptions
 */
import { useEffect, useRef, useState } from "react";

const PARTNERS = [
  {
    name: "Shopify",
    category: "Commerce Platform",
    description:
      "Headless Shopify integration for complete storefront control with Shopify's powerful backend.",
    logo: "🛍️",
  },
  {
    name: "Medusa",
    category: "Open-Source Commerce",
    description:
      "Flexible, composable commerce platform. Perfect for custom requirements and multi-vendor setups.",
    logo: "📦",
  },
  {
    name: "Stripe",
    category: "Payments",
    description:
      "Global payment processing. Credit cards, digital wallets, and local payment methods worldwide.",
    logo: "💳",
  },
  {
    name: "Vercel",
    category: "Hosting & Deployment",
    description:
      "Edge-optimized hosting for Next.js storefronts. Global CDN, instant deployments, and analytics.",
    logo: "⚡",
  },
  {
    name: "Brevo",
    category: "Email & Marketing",
    description:
      "Email marketing, SMS, and marketing automation. Abandoned cart recovery, newsletters, and segmentation.",
    logo: "📧",
  },
  {
    name: "OpenAI",
    category: "AI & Machine Learning",
    description:
      "GPT-powered chatbots, semantic search, product recommendations, and content generation.",
    logo: "🤖",
  },
];

function PartnerCard({
  partner,
  index,
}: {
  partner: (typeof PARTNERS)[0];
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
      className="p-8 bg-[#F8F6F2] border border-[#C5A880]/20 hover:border-[#C5A880]/50 hover:shadow-lg transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${index * 80}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 80}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl">{partner.logo}</span>
        <div>
          <h3 className="font-display text-lg text-[#141312]">
            {partner.name}
          </h3>
          <p className="font-label text-xs text-[#C5A880]">
            {partner.category}
          </p>
        </div>
      </div>
      <p className="font-body text-[#141312]/60">{partner.description}</p>
    </div>
  );
}

export default function PartnerIntegrations() {
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
    <section className="bg-[#F8F6F2] section-spacing">
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
          <h2 className="heading-lg text-[#141312] mb-4">
            Technology Partners
          </h2>
          <p className="font-body text-[#141312]/60">
            We integrate with the best tools in the industry. Your store is
            built on proven, production-grade technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS.map((partner, i) => (
            <PartnerCard key={partner.name} partner={partner} index={i} />
          ))}
        </div>

        {/* Info box */}
        <div className="mt-16 p-8 bg-[#141312] text-[#F8F6F2] max-w-3xl">
          <h3 className="font-display text-lg text-[#F8F6F2] mb-3">
            Not Limited to These Partners
          </h3>
          <p className="font-body text-[#F8F6F2]/70">
            We integrate with any API or service you need. Custom payment
            processors, inventory systems, ERP platforms, CRM tools — if it has
            an API, we can integrate it.
          </p>
        </div>
      </div>
    </section>
  );
}
