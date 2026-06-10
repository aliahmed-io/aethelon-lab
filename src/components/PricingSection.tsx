/*
 * PricingSection — Aethelon Agency
 * Design: Minimalist luxury, 3 pricing tiers + add-ons, milestone payment system
 */
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const TIERS = [
  {
    name: "Starter",
    price: "$2,500",
    deposit: "$500",
    bestFor:
      "Single or small product stores that need a fast, modern, conversion-ready frontend without AR/3D",
    includes: [
      "Next.js headless frontend (Shopify or WooCommerce)",
      "Custom responsive design",
      "Product pages, collections, cart, checkout",
      "Basic search and filters",
      "Newsletter signup and welcome flow",
      "Cart recovery email sequence (2-stage, 1h and 24h)",
      "Blog and SEO infrastructure",
      "Security audit and vulnerability patch",
      "Multi-language and multi-currency ready",
      "2 weeks free post-launch maintenance",
    ],
    retainer: "$200/month",
    highlighted: false,
  },
  {
    name: "Core",
    price: "$4,500",
    deposit: "$900",
    bestFor:
      "Furniture and décor stores ready to offer AR and 3D as a competitive advantage",
    includes: [
      "Everything in Starter",
      "Wall and floor AR product preview (mobile)",
      "Desktop AR room photo compositing (works on all devices)",
      "10 custom 3D models for top sellers",
      "AI semantic search (understands intent not just keywords)",
      "Voice search",
      "AR snapshot sharing",
      "Landing page",
    ],
    retainer: "$300/month",
    highlighted: true,
  },
  {
    name: "Full",
    price: "$6,000",
    deposit: "$1,200",
    bestFor:
      "Stores that want the complete system — AR, content engine, and automated revenue tools",
    includes: [
      "Everything in Core",
      "AI room analysis (Gemini Vision — analyzes customer room photo, recommends products and placement)",
      "AI storefront chatbot (trained on catalog, answers 24/7)",
      "Campaign generator and email blast system",
      "Priority deployment and extended onboarding documentation",
    ],
    retainer: "$500/month — Pro Support",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "$10,000+",
    deposit: "Custom",
    bestFor:
      "Enterprise is for brands that want to own a fully custom platform with no dependency on Shopify or WooCommerce — ever.",
    includes: [
      "Everything in Full",
      "Fully custom Next.js backend (no Shopify/WooCommerce dependency)",
      "Custom admin dashboard built to client workflow",
      "AI COO dashboard (daily sales briefings, inventory forecasting, sentiment analysis)",
      "Generative 3D pipeline (generate 3D models from 2D product images via Meshy)",
      "Role-based access control for teams",
      "Custom database architecture (Postgres + Prisma)",
      "Full infrastructure setup and deployment",
      "Complete IP ownership — no platform dependency ever",
    ],
    retainer: "Custom Retainer",
    highlighted: false,
  },
];

const ADD_ONS = [
  { name: "5 extra 3D models", price: "$400" },
  { name: "AI chatbot (standalone)", price: "$500" },
  { name: "Advanced search + recommendations", price: "$400" },
  { name: "Multi-language + multi-currency", price: "$300" },
  { name: "Admin dashboard audit + upgrade", price: "$400" },
  { name: "Extra landing page", price: "$200" },
];

function PricingTier({
  tier,
  index,
}: {
  tier: (typeof TIERS)[0];
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
      className={`p-8 transition-all duration-300 ${
        tier.highlighted
          ? "bg-[#141312] text-[#F8F6F2] scale-105"
          : "bg-[#F8F6F2] text-[#141312] hover:bg-[#141312]/5"
      }`}
      style={{
        border: tier.highlighted
          ? "1px solid rgba(197, 168, 128,0.3)"
          : "1px solid rgba(20, 19, 18,0.1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${index * 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <div className="mb-6">
        <h3
          className={`font-display text-2xl mb-2 ${tier.highlighted ? "text-[#F8F6F2]" : "text-[#141312]"}`}
        >
          {tier.name}
        </h3>
        <p
          className={`font-label text-sm ${tier.highlighted ? "text-[#C5A880]" : "text-[#C5A880]/60"}`}
        >
          {tier.bestFor}
        </p>
      </div>

      <div
        className="mb-6 pb-6"
        style={{
          borderBottom: tier.highlighted
            ? "1px solid rgba(197, 168, 128,0.2)"
            : "1px solid rgba(20, 19, 18,0.1)",
        }}
      >
        <div className="mb-2">
          <span className="font-display text-4xl md:text-5xl">
            {tier.price}
          </span>
        </div>
        <p
          className={`font-body text-sm ${tier.highlighted ? "text-[#F8F6F2]/60" : "text-[#141312]/60"}`}
        >
          Deposit to start: <strong>{tier.deposit}</strong>
        </p>
      </div>

      <div className="mb-8">
        <p
          className={`font-label text-xs mb-4 ${tier.highlighted ? "text-[#C5A880]/60" : "text-[#C5A880]/40"}`}
        >
          INCLUDES
        </p>
        <ul className="space-y-3">
          {tier.includes.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check
                size={16}
                className={`flex-shrink-0 mt-0.5 ${tier.highlighted ? "text-[#C5A880]" : "text-[#C5A880]/50"}`}
              />
              <span
                className={`font-body text-sm ${tier.highlighted ? "text-[#F8F6F2]/80" : "text-[#141312]/70"}`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="pt-6"
        style={{
          borderTop: tier.highlighted
            ? "1px solid rgba(197, 168, 128,0.2)"
            : "1px solid rgba(20, 19, 18,0.1)",
        }}
      >
        <p
          className={`font-label text-xs mb-4 ${tier.highlighted ? "text-[#C5A880]/60" : "text-[#C5A880]/40"}`}
        >
          RETAINER
        </p>
        <p
          className={`font-display text-lg ${tier.highlighted ? "text-[#F8F6F2]" : "text-[#141312]"}`}
        >
          {tier.retainer}
        </p>
      </div>

      <button
        onClick={() =>
          document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className={`w-full mt-8 py-3 font-label text-sm tracking-wide transition-all duration-300 ${
          tier.highlighted
            ? "bg-[#C5A880] text-[#141312] hover:bg-[#F8F6F2]"
            : "bg-[#141312] text-[#F8F6F2] hover:bg-[#C5A880] hover:text-[#141312]"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

export default function PricingSection() {
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
    <section id="pricing" className="bg-[#F8F6F2] section-spacing">
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
          <h2 className="heading-lg text-[#141312] mb-4">
            Transparent Pricing. Milestone Payments.
          </h2>
          <p className="font-body text-[#141312]/50">
            You only pay when you approve. Every tier starts with a 20% deposit.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
          {TIERS.map((tier, i) => (
            <PricingTier key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-[#141312] text-[#F8F6F2] p-12 mb-16">
          <h3 className="font-display text-2xl mb-8">
            Add-ons (can be added to any tier)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADD_ONS.map(addon => (
              <div
                key={addon.name}
                className="flex items-center justify-between pb-4"
                style={{ borderBottom: "1px solid rgba(197, 168, 128,0.2)" }}
              >
                <span className="font-body text-[#F8F6F2]/80">
                  {addon.name}
                </span>
                <span className="font-display text-lg text-[#C5A880]">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Payment System */}
        <div className="p-8 bg-[#F8F6F2]/50 border border-[#141312]/10">
          <h3 className="font-display text-xl font-semibold text-[#141312] mb-6">
            How Payments Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {[
              {
                milestone: "Kickoff",
                percent: "20%",
                values: "Starter: $500 | Core: $900 | Full: $1,200 | Enterprise: Custom",
                trigger: "Brief signed, credentials shared, project starts",
              },
              {
                milestone: "Design Approval",
                percent: "30%",
                values: "Starter: $750 | Core: $1,350 | Full: $1,800 | Enterprise: Custom",
                trigger: "You approve the high-fidelity UI design mockups",
              },
              {
                milestone: "Staging Deploy",
                percent: "30%",
                values: "Starter: $750 | Core: $1,350 | Full: $1,800 | Enterprise: Custom",
                trigger:
                  "Complete site live on staging with all features working",
              },
              {
                milestone: "Launch",
                percent: "20%",
                values: "Starter: $500 | Core: $900 | Full: $1,200 | Enterprise: Custom",
                trigger:
                  "Production build deployed, domain mapped, project handover complete",
              },
            ].map(item => (
              <div
                key={item.milestone}
                className="border-l border-[#C5A880]/20 pl-4"
              >
                <div className="font-label text-[#C5A880] mb-1 text-sm tracking-wider uppercase font-semibold">
                  {item.milestone} ({item.percent})
                </div>
                <div className="font-body text-xs text-[#141312] font-bold tracking-tight mb-2 tabular-nums">
                  {item.values}
                </div>
                <p className="font-body text-xs text-[#141312]/60 leading-relaxed">
                  {item.trigger}
                </p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-[#141312]/50 italic">
            You start with 20%. You only pay the next installment after you've
            approved what was built. You're never paying for work you haven't
            seen.
          </p>
        </div>
      </div>
    </section>
  );
}
