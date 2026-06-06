/*
 * TechMarquee — Aethelon Agency
 * Design: Warm dark strip with gold dust background, scrolling tech ticker
 */
const TECH = [
  "Next.js",
  "React",
  "TypeScript",
  "Shopify Storefront API",
  "Medusa.js",
  "Three.js",
  "WebXR",
  "Tailwind CSS",
  "GraphQL",
  "Node.js",
  "PostgreSQL",
  "Stripe",
  "Vercel",
  "Cloudflare",
  "Framer Motion",
  "LLM APIs",
  "Vector Search",
  "Resend",
  "Sanity CMS",
  "Contentful",
];

export default function TechMarquee() {
  const doubled = [...TECH, ...TECH];

  return (
    <div
      className="overflow-hidden py-4"
      style={{
        background:
          "linear-gradient(90deg, #150F0A 0%, #1A1510 50%, #150F0A 100%)",
        borderTop: "1px solid rgba(184,146,42,0.12)",
        borderBottom: "1px solid rgba(184,146,42,0.12)",
      }}
    >
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: "marquee 35s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((tech, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="label-tag text-[#F8F6F2]/20">{tech}</span>
            <span
              className="w-1 h-1 bg-[#B8922A] flex-shrink-0"
              style={{ opacity: 0.4 }}
            />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
