/*
 * StackSection — Aethelon Agency
 * Design: Ivory background, tech stack grid with gold hover reveals
 */
import { useEffect, useRef, useState } from "react";

const STACK_GROUPS = [
  {
    category: "Frontend",
    items: [
      "Next.js 14",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Commerce",
    items: [
      "Shopify Storefront API",
      "Medusa.js",
      "Commerce.js",
      "Custom Backends",
      "Stripe",
    ],
  },
  {
    category: "Spatial",
    items: [
      "Three.js",
      "WebXR / AR",
      "Model Viewer",
      "GLTF/GLB Pipeline",
      "AI Image Gen",
    ],
  },
  {
    category: "Intelligence",
    items: [
      "OpenAI / LLMs",
      "Vector Search",
      "Semantic Embeddings",
      "Recommendation Engine",
      "Analytics",
    ],
  },
  {
    category: "Automation",
    items: [
      "Resend / SendGrid",
      "Sanity CMS",
      "Contentful",
      "Webhooks",
      "Cron Automations",
    ],
  },
  {
    category: "Infrastructure",
    items: ["Vercel", "Cloudflare", "PostgreSQL", "Redis", "S3 / CDN"],
  },
];

export default function StackSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-[#F8F6F2] py-20"
      style={{ borderTop: "1px solid rgba(184,146,42,0.15)" }}
    >
      <div className="container">
        <div
          className="flex items-center gap-3 mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div className="gold-rule w-8" />
          <span className="label-tag text-[#B8922A]/50">Technology Stack</span>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px"
          style={{ background: "rgba(184,146,42,0.12)" }}
        >
          {STACK_GROUPS.map((group, i) => (
            <div
              key={group.category}
              className="bg-[#F8F6F2] p-6 hover:bg-[#1A1510] group transition-colors duration-400"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.6s ${i * 60}ms cubic-bezier(0.23,1,0.32,1), transform 0.6s ${i * 60}ms cubic-bezier(0.23,1,0.32,1), background-color 0.4s ease`,
              }}
            >
              <p className="label-tag text-[#B8922A]/40 group-hover:text-[#B8922A] mb-4 transition-colors duration-300">
                {group.category}
              </p>
              <ul className="space-y-2">
                {group.items.map(item => (
                  <li
                    key={item}
                    className="font-body text-xs text-[#1A1510]/50 group-hover:text-[#F8F6F2]/50 transition-colors duration-300 leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
