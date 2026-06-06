/*
 * TechStackShowcase — Aethelon Agency
 * Design: Minimalist luxury, technology stack showcase
 */
import { useEffect, useRef, useState } from "react";

const TECH_CATEGORIES = [
  {
    category: "Frontend",
    color: "#141312",
    tools: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Backend & Commerce",
    color: "#C5A880",
    tools: [
      "Shopify Headless",
      "Medusa",
      "Commerce.js",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    category: "AR & 3D",
    color: "#141312",
    tools: ["Babylon.js", "Three.js", "WebGL", "Model Viewer", "8th Wall"],
  },
  {
    category: "AI & Search",
    color: "#C5A880",
    tools: [
      "OpenAI API",
      "Pinecone",
      "Vector Search",
      "LLM Integration",
      "NLP",
    ],
  },
  {
    category: "Performance & Analytics",
    color: "#141312",
    tools: ["Vercel", "CloudFlare", "Sentry", "Datadog", "Google Analytics"],
  },
  {
    category: "Email & Marketing",
    color: "#C5A880",
    tools: ["Brevo", "SendGrid", "Mailchimp", "Segment", "Klaviyo"],
  },
];

function TechCategory({
  cat,
  index,
}: {
  cat: (typeof TECH_CATEGORIES)[0];
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
      className="p-8 bg-[#F8F6F2] hover:shadow-lg transition-all duration-300"
      style={{
        border: `2px solid ${cat.color}`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${index * 80}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 80}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <h3
        className="font-display text-lg text-[#141312] mb-6"
        style={{ color: cat.color }}
      >
        {cat.category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {cat.tools.map(tool => (
          <span
            key={tool}
            className="px-4 py-2 bg-[#141312] text-[#F8F6F2] font-label text-sm"
            style={{ backgroundColor: cat.color, color: "#F8F6F2" }}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStackShowcase() {
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
            Built With Best-in-Class Tech
          </h2>
          <p className="font-body text-[#141312]/60">
            We use the latest tools and frameworks to build fast, scalable, and
            maintainable storefronts. No legacy tech. No compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((cat, i) => (
            <TechCategory key={cat.category} cat={cat} index={i} />
          ))}
        </div>

        {/* Info box */}
        <div className="mt-16 p-8 bg-[#141312] text-[#F8F6F2] max-w-3xl">
          <h3 className="font-display text-lg text-[#F8F6F2] mb-3">
            Why This Stack?
          </h3>
          <p className="font-body text-[#F8F6F2]/70 mb-4">
            We choose technologies based on performance, scalability, and
            developer experience. Every tool serves a purpose. We don't use
            trendy tech for the sake of it.
          </p>
          <ul className="space-y-2 font-body text-sm text-[#F8F6F2]/60">
            <li>
              • <strong>Next.js</strong> for blazing-fast storefronts with
              built-in SEO
            </li>
            <li>
              • <strong>Headless commerce</strong> for complete design freedom
            </li>
            <li>
              • <strong>Vercel</strong> for global edge performance and instant
              deployments
            </li>
            <li>
              • <strong>Modern AI</strong> for intelligent search and chatbots
            </li>
            <li>
              • <strong>WebGL</strong> for immersive AR and 3D experiences
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
