/*
 * FeaturesSection — Aethelon Agency
 * Design: Minimalist luxury, alternating image/text layout, premium aesthetic
 */
import { useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    number: "01",
    title: "3D & AR Try-On",
    subtitle: "Spatial Commerce",
    description:
      "Photorealistic 3D product viewers powered by Three.js and WebGL. Customers can rotate, zoom, and explore products from every angle. AR try-on using AI-generated images lets customers visualize items in real-world contexts before purchase.",
    highlights: [
      "360° product viewers",
      "AR try-on via image generation",
      "WebGL configurators",
      "GLTF/GLB support",
    ],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663734895709/eGWAq6uu3bYqdeB8H9Q9HL/aethelon-feature-1-iPhEvG68qRTkaXDwdW35JA.webp",
  },
  {
    number: "02",
    title: "AI Commerce Intelligence",
    subtitle: "Smart Search & Recommendations",
    description:
      "Embedded AI shopping assistant that understands natural language queries. Semantic vector search finds products by meaning, not just keywords. Advanced admin panel with real-time analytics, inventory intelligence, and predictive insights.",
    highlights: [
      "LLM-powered chatbot",
      "Semantic search",
      "Predictive inventory",
      "Advanced analytics",
    ],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663734895709/eGWAq6uu3bYqdeB8H9Q9HL/aethelon-feature-2-ene5Rf8G6iThWKDtvc3QNb.webp",
  },
  {
    number: "03",
    title: "Lifecycle Automation",
    subtitle: "Revenue Recovery Engine",
    description:
      "Complete email marketing infrastructure with newsletter system, abandoned cart recovery, and wishlist price-drop alerts. Integrated blog with SEO optimization. Transactional notifications keep customers engaged throughout their journey.",
    highlights: [
      "Cart recovery",
      "Newsletter automation",
      "Price-drop alerts",
      "Blog & CMS",
    ],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663734895709/eGWAq6uu3bYqdeB8H9Q9HL/aethelon-feature-3-eUXBCw4PPubKsULTxa5BZY.webp",
  },
];

function FeatureBlock({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[0];
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

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="grid grid-cols-12 gap-8 md:gap-12 items-center py-16 md:py-24"
    >
      {/* Image */}
      <div
        className={`col-span-12 md:col-span-5 ${isEven ? "md:col-start-1" : "md:col-start-8"}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: `opacity 0.8s ${index * 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s ${index * 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        }}
      >
        <div className="overflow-hidden" style={{ aspectRatio: "1/1" }}>
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div
        className={`col-span-12 md:col-span-5 ${isEven ? "md:col-start-8" : "md:col-start-1"}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: `opacity 0.8s ${index * 100 + 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s ${index * 100 + 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="font-label text-[#C5A880]">{feature.number}</span>
          <div className="elegant-divider flex-1" />
        </div>
        <h3 className="heading-md text-[#141312] mb-2">{feature.title}</h3>
        <p className="font-label text-[#C5A880] mb-6">{feature.subtitle}</p>
        <p className="font-body text-[#141312]/60 leading-relaxed mb-6">
          {feature.description}
        </p>
        <ul className="space-y-2">
          {feature.highlights.map(highlight => (
            <li key={highlight} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-[#C5A880] rounded-full mt-2 flex-shrink-0" />
              <span className="font-body text-sm text-[#141312]/70">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
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
          className="mb-20"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <h2 className="heading-lg text-[#141312] mb-6">Signature Add-ons</h2>
          <p className="font-body text-[#141312]/60 max-w-2xl">
            Three specialist layers that transform a standard ecommerce platform
            into an extraordinary customer experience.
          </p>
        </div>

        {FEATURES.map((feature, i) => (
          <FeatureBlock key={feature.number} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
