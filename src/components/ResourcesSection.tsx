/*
 * ResourcesSection — Aethelon Agency
 * Design: Minimalist luxury, downloadable resources with email capture
 */
import { useEffect, useRef, useState } from "react";
import { Download, Mail } from "lucide-react";
import { toast } from "sonner";

const RESOURCES = [
  {
    id: "furniture-checklist",
    title: "Furniture Ecommerce Checklist",
    description:
      "The complete checklist for launching a furniture store. 47 items covering design, development, marketing, and operations.",
    icon: "📋",
    format: "PDF",
  },
  {
    id: "ar-roi-calculator",
    title: "AR ROI Calculator",
    description:
      "Calculate the ROI of adding AR to your store. See how AR impacts conversion, returns, and AOV for furniture brands.",
    icon: "📊",
    format: "Excel",
  },
  {
    id: "headless-guide",
    title: "Headless Ecommerce Guide",
    description:
      "Everything you need to know about headless commerce. Architecture, benefits, challenges, and implementation roadmap.",
    icon: "🏗️",
    format: "PDF",
  },
  {
    id: "conversion-playbook",
    title: "Conversion Optimization Playbook",
    description:
      "Proven tactics to increase conversion rate. Based on global furniture ecommerce UX research and benchmark A/B tests, copy frameworks, and UX patterns.",
    icon: "🎯",
    format: "PDF",
  },
  {
    id: "ai-implementation",
    title: "AI Implementation Roadmap",
    description:
      "Step-by-step guide to adding AI chatbots, search, and recommendations to your store. Timeline, costs, and expected ROI.",
    icon: "🤖",
    format: "PDF",
  },
  {
    id: "tech-stack-guide",
    title: "Tech Stack Decision Guide",
    description:
      "How to choose the right tech stack for your ecommerce store. Shopify vs Medusa vs custom. Pros, cons, and when to use each.",
    icon: "⚙️",
    format: "PDF",
  },
];

function ResourceCard({
  resource,
  index,
}: {
  resource: (typeof RESOURCES)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // Simulate email capture and download
      console.log(`Downloading ${resource.title} for ${email}`);
      toast.success(
        `Check your email for the ${resource.title} download link!`
      );
      setEmail("");

      // In production, integrate with Brevo or your email service
      // For now, just show success
      setTimeout(() => {
        // Simulate file download
        const link = document.createElement("a");
        link.href = "#";
        link.download = `${resource.id}.pdf`;
        link.click();
      }, 500);
    } catch (error) {
      console.error("Download error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={ref}
      className="p-8 bg-[#F8F6F2] border border-[#C5A880]/20 hover:border-[#C5A880]/50 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${index * 80}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 80}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="text-3xl">{resource.icon}</span>
        <div className="flex-1">
          <h3 className="font-display text-lg text-[#141312] mb-1">
            {resource.title}
          </h3>
          <p className="font-label text-xs text-[#C5A880]">{resource.format}</p>
        </div>
      </div>

      <p className="font-body text-[#141312]/60 mb-6">{resource.description}</p>

      <form onSubmit={handleDownload} className="space-y-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={loading}
          className="w-full px-4 py-2 bg-[#F8F6F2] border border-[#C5A880]/20 text-[#141312] placeholder-[#141312]/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#141312] text-[#F8F6F2] font-label text-sm hover:bg-[#C5A880] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download size={16} />
          {loading ? "Sending..." : "Download"}
        </button>
      </form>
    </div>
  );
}

export default function ResourcesSection() {
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
          <h2 className="heading-lg text-[#141312] mb-4">Free Resources</h2>
          <p className="font-body text-[#141312]/60">
            Download our guides, checklists, and calculators. Everything you
            need to plan and launch a winning furniture ecommerce store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((resource, i) => (
            <ResourceCard key={resource.id} resource={resource} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
