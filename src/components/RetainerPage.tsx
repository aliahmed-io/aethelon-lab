/*
 * RetainerPage — Aethelon Agency
 * Design: Minimalist luxury, detailed retainer and support packages
 */
import { useEffect, useRef, useState } from "react";
import { Check, Clock, MessageSquare, TrendingUp, Shield } from "lucide-react";

const RETAINER_TIERS = [
  {
    name: "Starter Support",
    price: "$200",
    period: "/month",
    description:
      "For stores that need ongoing maintenance and security updates",
    highlights: [
      "1 bug fix per month (up to 2 hours)",
      "Performance monitoring",
      "Security updates",
    ],
    features: [
      { icon: Shield, text: "Security patches and updates" },
      { icon: Clock, text: "Email support (48-hour response)" },
      { icon: TrendingUp, text: "Monthly performance reports" },
      { icon: MessageSquare, text: "Quarterly check-in calls" },
    ],
    bestFor: "Stores with stable traffic and minimal changes",
  },
  {
    name: "Core Support",
    price: "$300",
    period: "/month",
    description: "For stores that want ongoing development and optimization",
    highlights: [
      "4 hours/month of development",
      "Weekly performance reports",
      "Priority support",
    ],
    features: [
      { icon: TrendingUp, text: "Feature requests and bug fixes" },
      { icon: Clock, text: "Priority email support (24-hour response)" },
      { icon: MessageSquare, text: "Monthly strategy calls" },
      { icon: Shield, text: "Proactive performance optimization" },
    ],
    bestFor: "Growing stores that want to continuously improve",
    highlighted: true,
  },
  {
    name: "Pro Support",
    price: "$500",
    period: "/month",
    description:
      "For stores that want a true partnership and strategic guidance",
    highlights: [
      "12 hours/month of development",
      "Real-time Slack support",
      "Strategic planning",
    ],
    features: [
      { icon: TrendingUp, text: "Dedicated development hours" },
      { icon: MessageSquare, text: "Real-time Slack support (24/7)" },
      { icon: Clock, text: "Weekly strategy and optimization calls" },
      { icon: Shield, text: "A/B testing and conversion optimization" },
    ],
    bestFor: "Enterprise stores with complex needs and growth goals",
  },
  {
    name: "Enterprise Support",
    price: "Custom",
    period: "",
    description:
      "For custom platforms needing high-availability support",
    highlights: [
      "Dedicated engineer resources",
      "Real-time Slack & Phone support",
      "Custom SLA agreement",
    ],
    features: [
      { icon: Shield, text: "Continuous security & vulnerability audits" },
      { icon: MessageSquare, text: "Weekly alignment & advisory calls" },
      { icon: Clock, text: "Guaranteed under-4-hour emergency responses" },
      { icon: TrendingUp, text: "Custom dashboard maintenance" },
    ],
    bestFor: "Brands running custom storefronts with custom backends",
  },
];

const WHAT_IS_INCLUDED = [
  {
    category: "Development & Features",
    items: [
      "Bug fixes and patches",
      "Performance optimization",
      "Feature requests (within scope)",
      "Code reviews and refactoring",
      "Dependency updates",
    ],
  },
  {
    category: "Monitoring & Security",
    items: [
      "24/7 uptime monitoring",
      "Security vulnerability scanning",
      "Automated security patches",
      "Performance tracking",
      "Error logging and alerts",
    ],
  },
  {
    category: "Support & Communication",
    items: [
      "Email support",
      "Slack support (Pro tier)",
      "Priority response times",
      "Strategy calls",
      "Quarterly roadmap planning",
    ],
  },
  {
    category: "Content & Maintenance",
    items: [
      "Blog post publishing",
      "Product catalog updates",
      "Email template updates",
      "Landing page tweaks",
      "SEO optimization",
    ],
  },
];

function RetainerTierCard({
  tier,
  index,
}: {
  tier: (typeof RETAINER_TIERS)[0];
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
          {tier.description}
        </p>
      </div>

      <div
        className="mb-8 pb-8"
        style={{
          borderBottom: tier.highlighted
            ? "1px solid rgba(197, 168, 128,0.2)"
            : "1px solid rgba(20, 19, 18,0.1)",
        }}
      >
        <div className="flex items-baseline gap-1 mb-2">
          <span className="font-display text-4xl">{tier.price}</span>
          <span
            className={`font-label text-sm ${tier.highlighted ? "text-[#C5A880]/60" : "text-[#C5A880]/40"}`}
          >
            {tier.period}
          </span>
        </div>
        <p
          className={`font-label text-xs ${tier.highlighted ? "text-[#C5A880]/60" : "text-[#C5A880]/40"}`}
        >
          {tier.bestFor}
        </p>
      </div>

      <div className="space-y-3 mb-8">
        {tier.highlights.map((highlight, i) => (
          <div key={i} className="flex items-start gap-3">
            <Check
              size={16}
              className={`flex-shrink-0 mt-0.5 ${tier.highlighted ? "text-[#C5A880]" : "text-[#C5A880]/50"}`}
            />
            <span
              className={`font-body text-sm ${tier.highlighted ? "text-[#F8F6F2]/80" : "text-[#141312]/70"}`}
            >
              {highlight}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {tier.features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div key={i} className="flex items-start gap-3">
              <Icon
                size={16}
                className={`flex-shrink-0 mt-0.5 ${tier.highlighted ? "text-[#C5A880]" : "text-[#C5A880]/50"}`}
              />
              <span
                className={`font-body text-sm ${tier.highlighted ? "text-[#F8F6F2]/70" : "text-[#141312]/60"}`}
              >
                {feature.text}
              </span>
            </div>
          );
        })}
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

export default function RetainerPage() {
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
        {/* Header */}
        <div
          ref={titleRef}
          className="mb-16 max-w-3xl"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <h1 className="heading-lg text-[#141312] mb-4">
            Ongoing Support & Maintenance
          </h1>
          <p className="font-body text-[#141312]/60 text-lg">
            After launch, your store needs ongoing care. We offer flexible
            retainer packages that keep your site fast, secure, and optimized
            for growth.
          </p>
        </div>

        {/* Retainer Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 items-stretch">
          {RETAINER_TIERS.map((tier, i) => (
            <RetainerTierCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>

        {/* What's Included */}
        <div className="mb-20">
          <h2 className="heading-md text-[#141312] mb-12 text-center">
            What's Included in Every Retainer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {WHAT_IS_INCLUDED.map(section => (
              <div key={section.category}>
                <h3 className="font-display text-lg text-[#141312] mb-6">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="text-[#C5A880] flex-shrink-0 mt-0.5"
                      />
                      <span className="font-body text-sm text-[#141312]/60">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto p-12 bg-[#141312] text-[#F8F6F2]">
          <h2 className="heading-md text-[#F8F6F2] mb-8">Common Questions</h2>

          <div className="space-y-8">
            <div>
              <h4 className="font-display text-lg text-[#F8F6F2] mb-2">
                Can I start without a retainer?
              </h4>
              <p className="font-body text-[#F8F6F2]/70">
                Yes. The first 2 weeks after launch are free. After that, we
                recommend a retainer to keep your store secure and optimized.
              </p>
            </div>

            <div>
              <h4 className="font-display text-lg text-[#F8F6F2] mb-2">
                What if I only need support sometimes?
              </h4>
              <p className="font-body text-[#F8F6F2]/70">
                Consulting work outside the retainer scope is quoted per project.
              </p>
            </div>

            <div>
              <h4 className="font-display text-lg text-[#F8F6F2] mb-2">
                Can I upgrade or downgrade?
              </h4>
              <p className="font-body text-[#F8F6F2]/70">
                Absolutely. Retainers are month-to-month. You can upgrade,
                downgrade, or pause anytime with 7 days notice.
              </p>
            </div>

            <div>
              <h4 className="font-display text-lg text-[#F8F6F2] mb-2">
                What happens if I don't renew?
              </h4>
              <p className="font-body text-[#F8F6F2]/70">
                Your site keeps running. You own all the code and can maintain
                it yourself or hire another developer. No lock-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
