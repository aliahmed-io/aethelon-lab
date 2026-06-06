/*
 * BlogSection — Aethelon Agency
 * Design: Minimalist luxury, blog article cards with stats and insights
 */
import { useEffect, useRef, useState } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import EmailSubscribeForm from "./EmailSubscribeForm";

const BLOG_ARTICLES = [
  {
    id: "headless-ecommerce",
    title: "Why Headless Ecommerce is Essential for Furniture Brands",
    excerpt:
      "Discover why decoupling your frontend from your commerce backend is the key to competitive advantage.",
    category: "Strategy",
    readTime: "6 min",
    stats: [
      { label: "Avg. Speed Improvement", value: "3.2x faster" },
      { label: "Conversion Lift", value: "+47%" },
      { label: "Time to Market", value: "-60%" },
    ],
    date: "Jun 3, 2026",
  },
  {
    id: "ar-3d-benefits",
    title: "AR & 3D: The Furniture Industry's Biggest Conversion Driver",
    excerpt:
      "How photorealistic 3D models and AR try-on experiences reduce returns and boost AOV.",
    category: "Technology",
    readTime: "7 min",
    stats: [
      { label: "Return Rate Reduction", value: "-65%" },
      { label: "AOV Increase", value: "+$87" },
      { label: "Try-On Engagement", value: "94% completion" },
    ],
    date: "May 31, 2026",
  },
  {
    id: "ai-search-chatbot",
    title: "AI-Powered Search & Chatbots: Cutting Support Costs by 73%",
    excerpt:
      "Intelligent search and 24/7 chatbots that actually understand customer intent and reduce support load.",
    category: "AI",
    readTime: "5 min",
    stats: [
      { label: "Support Tickets Reduced", value: "-73%" },
      { label: "Customer Satisfaction", value: "+34%" },
      { label: "Search Accuracy", value: "96%" },
    ],
    date: "May 28, 2026",
  },
  {
    id: "cart-recovery",
    title:
      "Cart Recovery & Email Alerts: Recovering $12K/Month in Lost Revenue",
    excerpt:
      "Automated email sequences that recover abandoned carts and notify customers of price drops.",
    category: "Growth",
    readTime: "6 min",
    stats: [
      { label: "Revenue Recovered", value: "$12K/month" },
      { label: "Email ROI", value: "$36 per $1 spent" },
      { label: "Recovery Rate", value: "12%" },
    ],
    date: "May 25, 2026",
  },
  {
    id: "custom-vs-template",
    title: "Custom Storefronts vs. Template Builders: The Real Cost Analysis",
    excerpt:
      "Why template builders cost more in the long run and why custom is the smarter investment.",
    category: "Business",
    readTime: "8 min",
    stats: [
      { label: "3-Year Cost Difference", value: "-$45K" },
      { label: "Flexibility Gain", value: "10x" },
      { label: "Time to Scale", value: "2 weeks vs 6 months" },
    ],
    date: "May 22, 2026",
  },
];

function BlogCard({
  article,
  index,
}: {
  article: (typeof BLOG_ARTICLES)[0];
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
      className="group cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${index * 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <div
        className="p-8 bg-[#F8F6F2] hover:bg-[#141312]/5 transition-all duration-300"
        style={{ border: "1px solid rgba(20, 19, 18,0.1)" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="font-label text-xs text-[#C5A880] mb-2">
              {article.category}
            </p>
            <h3 className="font-display text-xl text-[#141312] group-hover:text-[#C5A880] transition-colors duration-300 mb-2">
              {article.title}
            </h3>
            <p className="font-body text-sm text-[#141312]/60">
              {article.excerpt}
            </p>
          </div>
          <ArrowRight
            size={20}
            className="text-[#C5A880]/30 group-hover:text-[#C5A880] transition-colors duration-300 flex-shrink-0 ml-4 mt-1"
          />
        </div>

        {/* Stats Grid */}
        <div
          className="mb-6 pb-6"
          style={{
            borderTop: "1px solid rgba(20, 19, 18,0.1)",
            borderBottom: "1px solid rgba(20, 19, 18,0.1)",
          }}
        >
          <div className="grid grid-cols-3 gap-4">
            {article.stats.map(stat => (
              <div key={stat.label}>
                <p className="font-label text-xs text-[#C5A880]/60 mb-1">
                  {stat.label}
                </p>
                <p className="font-display text-sm text-[#141312] font-semibold">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-label text-xs text-[#C5A880]/60">
              {article.date}
            </span>
            <span className="font-label text-xs text-[#C5A880]/40">•</span>
            <span className="font-label text-xs text-[#C5A880]/60">
              {article.readTime}
            </span>
          </div>
          <TrendingUp
            size={16}
            className="text-[#C5A880]/30 group-hover:text-[#C5A880] transition-colors duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default function BlogSection() {
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
    <section id="blog" className="bg-[#F8F6F2] section-spacing">
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
            Insights & Strategy
          </h2>
          <p className="font-body text-[#141312]/50">
            Deep dives into headless ecommerce, AR/3D, AI, and growth strategies
            for furniture brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_ARTICLES.map((article, i) => (
            <BlogCard key={article.id} article={article} index={i} />
          ))}
        </div>

        <div
          className="mt-16 pt-16"
          style={{ borderTop: "1px solid rgba(20, 19, 18,0.1)" }}
        >
          <EmailSubscribeForm />
        </div>
      </div>
    </section>
  );
}
