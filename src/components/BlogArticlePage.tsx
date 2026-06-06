/*
 * BlogArticlePage — Aethelon Agency
 * Design: Minimalist luxury, full-width blog article with stats and insights
 */
import { ArrowLeft, Clock, User } from "lucide-react";

interface BlogArticlePageProps {
  articleId: string;
}

function StatCard({ stat }: { stat: any }) {
  return (
    <div className="p-6 bg-[#141312] text-[#F8F6F2]">
      <p className="font-label text-xs text-[#C5A880] mb-2">{stat.label}</p>
      <p className="font-display text-3xl text-[#F8F6F2] mb-2 font-semibold">
        {stat.value}
      </p>
      <p className="font-body text-sm text-[#F8F6F2]/60">{stat.detail}</p>
    </div>
  );
}

export default function BlogArticlePage({ articleId }: BlogArticlePageProps) {
  const articles: Record<string, any> = {
    "headless-ecommerce": {
      title: "Why Headless Ecommerce is Essential for Furniture Brands",
      author: "Ali Aethelon",
      date: "Jun 3, 2026",
      readTime: "6 min",
      category: "Strategy",
      excerpt:
        "Discover why decoupling your frontend from your commerce backend is the key to competitive advantage.",
      stats: [
        {
          label: "Average Speed Improvement",
          value: "3.2x faster",
          detail: "Compared to traditional platforms",
        },
        {
          label: "Conversion Rate Lift",
          value: "+47%",
          detail: "From optimized performance and UX",
        },
        {
          label: "Time to Market",
          value: "-60%",
          detail: "Faster feature deployment",
        },
        {
          label: "Flexibility Score",
          value: "10x higher",
          detail: "Complete control over frontend",
        },
      ],
    },
    "ar-3d-benefits": {
      title: "AR & 3D: The Furniture Industry's Biggest Conversion Driver",
      author: "Ali Aethelon",
      date: "May 31, 2026",
      readTime: "7 min",
      category: "Technology",
      excerpt:
        "How photorealistic 3D models and AR try-on experiences reduce returns and boost AOV.",
      stats: [
        {
          label: "Return Rate Reduction",
          value: "-65%",
          detail: "Fewer surprises, fewer returns",
        },
        {
          label: "AOV Increase",
          value: "+$87",
          detail: "Customers buy with confidence",
        },
        {
          label: "Try-On Engagement",
          value: "94% completion",
          detail: "Customers interact with 3D models",
        },
        {
          label: "Conversion Lift",
          value: "+172%",
          detail: "On products with 3D models",
        },
      ],
    },
    "ai-search-chatbot": {
      title: "AI-Powered Search & Chatbots: Cutting Support Costs by 73%",
      author: "Ali Aethelon",
      date: "May 28, 2026",
      readTime: "5 min",
      category: "AI",
      excerpt:
        "Intelligent search and 24/7 chatbots that actually understand customer intent.",
      stats: [
        {
          label: "Support Tickets Reduced",
          value: "-73%",
          detail: "Chatbot handles common questions",
        },
        {
          label: "Customer Satisfaction",
          value: "+34%",
          detail: "Faster, more accurate answers",
        },
        {
          label: "Search Accuracy",
          value: "96%",
          detail: "AI understands customer intent",
        },
        {
          label: "Support Cost Savings",
          value: "-$45K/year",
          detail: "Fewer human support hours needed",
        },
      ],
    },
    "cart-recovery": {
      title:
        "Cart Recovery & Email Alerts: Recovering $12K/Month in Lost Revenue",
      author: "Ali Aethelon",
      date: "May 25, 2026",
      readTime: "6 min",
      category: "Growth",
      excerpt:
        "Automated email sequences that recover abandoned carts and notify customers of price drops.",
      stats: [
        {
          label: "Revenue Recovered",
          value: "$12K/month",
          detail: "From abandoned carts",
        },
        {
          label: "Email ROI",
          value: "$36 per $1 spent",
          detail: "Email marketing ROI",
        },
        {
          label: "Recovery Rate",
          value: "12%",
          detail: "Of abandoned carts recovered",
        },
        {
          label: "Average Recovery Value",
          value: "$340",
          detail: "Per recovered cart",
        },
      ],
    },
    "custom-vs-template": {
      title: "Custom Storefronts vs. Template Builders: The Real Cost Analysis",
      author: "Ali Aethelon",
      date: "May 22, 2026",
      readTime: "8 min",
      category: "Business",
      excerpt:
        "Why template builders cost more in the long run and why custom is the smarter investment.",
      stats: [
        {
          label: "3-Year Cost Difference",
          value: "-$45K",
          detail: "Custom vs. template builder",
        },
        {
          label: "Flexibility Gain",
          value: "10x",
          detail: "Complete control over your store",
        },
        {
          label: "Time to Scale",
          value: "2 weeks vs 6 months",
          detail: "Custom features vs. waiting for app",
        },
        {
          label: "Ownership",
          value: "100%",
          detail: "You own all code and data",
        },
      ],
    },
  };

  const article = articles[articleId];

  if (!article) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl text-[#141312]">
          Article not found
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F6F2] min-h-screen">
      <div className="container py-20">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 font-label text-sm text-[#C5A880] hover:text-[#141312] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Articles
          </button>

          <div className="flex items-center gap-3 mb-4">
            <span className="font-label text-xs px-3 py-1 bg-[#141312] text-[#F8F6F2]">
              {article.category}
            </span>
          </div>

          <h1 className="font-display text-4xl text-[#141312] mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-[#141312]/60">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="font-body">{article.author}</span>
            </div>
            <span>•</span>
            <span className="font-body">{article.date}</span>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="font-body">{article.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          <p className="font-body text-lg text-[#141312]/70 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          <div
            className="mb-12 pb-12"
            style={{ borderBottom: "1px solid rgba(20, 19, 18,0.1)" }}
          >
            <h2 className="font-display text-2xl text-[#141312] mb-6">
              Key Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {article.stats.map((stat: any, i: number) => (
                <StatCard key={i} stat={stat} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-body text-lg text-[#141312]/70 leading-relaxed">
              This article explores the key benefits and implementation
              strategies for {article.title.toLowerCase()}. The data shows
              significant improvements across multiple metrics that directly
              impact your bottom line.
            </p>
            <p className="font-body text-lg text-[#141312]/70 leading-relaxed">
              Whether you're just starting your ecommerce journey or looking to
              optimize an existing store, understanding these strategies is
              crucial for staying competitive in the furniture industry.
            </p>
            <p className="font-body text-lg text-[#141312]/70 leading-relaxed">
              Ready to implement these strategies? Our team at Aethelon
              specializes in building custom headless storefronts that
              incorporate all of these best practices and more. Let's discuss
              how we can help your brand achieve these results.
            </p>
          </div>

          <div className="mt-12 p-8 bg-[#141312] text-[#F8F6F2]">
            <h3 className="font-display text-xl text-[#F8F6F2] mb-4">
              Ready to transform your store?
            </h3>
            <p className="font-body text-[#F8F6F2]/70 mb-6">
              Let's discuss how these strategies can work for your furniture
              brand. Schedule a free discovery call with our team.
            </p>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-[#C5A880] text-[#141312] font-label text-sm hover:bg-[#F8F6F2] transition-colors"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
