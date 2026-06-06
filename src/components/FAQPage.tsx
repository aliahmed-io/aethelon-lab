/*
 * FAQPage — Aethelon Agency
 * Design: Minimalist luxury, comprehensive FAQ with 15+ questions organized by category
 */
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_CATEGORIES = [
  {
    category: "Platform & Technology",
    questions: [
      {
        q: "What platforms do you build on?",
        a: "We build Next.js headless storefronts that connect to Shopify, WooCommerce, or custom databases via APIs. This separates your presentation layer from database schemas, increasing site speed and resilience.",
      },
      {
        q: "Do I need to migrate off my current platform?",
        a: "No. We connect directly to your existing Shopify or WooCommerce backends via GraphQL or REST APIs. You keep your product catalog, order history, and payment gateway configuration completely unchanged.",
      },
      {
        q: "Can you connect to an ERP or custom inventory system?",
        a: "Yes. Headless architecture is specifically designed for multi-system integration. We can map custom inventory layers, ERP systems, or PIM software directly into the API layer.",
      },
      {
        q: "What security measures are implemented?",
        a: "We address critical vulnerabilities, including patching CVE-2025-64459 Django SQL injection flaws (rated 9.1/10 by Endor Labs, 2025) and hardening codebases against automated exploits that target standard WordPress or Shopify configurations.",
      },
    ],
  },
  {
    category: "Features & Functionality",
    questions: [
      {
        q: "What are the benefits of 3D and AR product previews?",
        a: "Interactive 3D configurators and augmented reality previews allow buyers to inspect spatial dimensions and materials in their own rooms. This raises conversion rates by up to 94% (Shopify, 2025) and reduces return rates by up to 40% (BrandXR, 2025).",
      },
      {
        q: "How does the AI chatbot work?",
        a: "The chatbot answers customer queries 24/7 regarding specifications and delivery schedules using vectorized site data. It operates with a response latency under 3 seconds, handling up to 80% of support interactions automatically (IBM, 2024).",
      },
      {
        q: "How does advanced search improve conversion?",
        a: "Search users are 2-3 times more likely to convert (Forrester, 2024), but 68% of users bounce if search fails to return results in seconds (Baymard, 2024). We build instant search configurations that index metadata in real-time.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        q: "What are your pricing structures and retainers?",
        a: "We offer three transparent tiers: Starter ($2,000 with $200/mo retainer), Core ($4,000 with $300/mo retainer), and Full ($5,000 with $500/mo retainer). Tiers align with feature inclusion.",
      },
      {
        q: "What is your milestone payment schedule?",
        a: "Payments are divided across four key checkpoints: Kickoff (20%), Design Approval (30%), Staging Deploy (30%), and Launch (20%). You only pay the next installment once you have approved the milestone's deliverables.",
      },
      {
        q: "Are there transaction fees?",
        a: "No. We never take a percentage of your store's sales or charge transaction fees. You pay a one-time build cost and a fixed monthly retainer for updates.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    questions: [
      {
        q: "How long does a headless build take?",
        a: "A custom project typically spans 6–8 weeks from kickoff to launch. Starter setups average 4–5 weeks. Specific timelines are detailed in the initial scope.",
      },
      {
        q: "What is your onboarding and engagement workflow?",
        a: "Discovery Call (20 min) → Proposal & Scope (24 hours) → Kickoff (48 hours after signing) → Design Phase → Build & Staging → Launch & Handover.",
      },
      {
        q: "Can you handle high concurrent traffic?",
        a: "Yes. By utilizing static generation and global edge middleware (Vercel, 2024), server response times are kept low regardless of traffic spikes, preventing checkout crashes during sale events.",
      },
    ],
  },
  {
    category: "Support & Maintenance",
    questions: [
      {
        q: "What does the monthly retainer cover?",
        a: "Retainers cover regular dependency upgrades, security patching, Lighthouse speed optimization, and developer support hours to implement new marketing assets or features.",
      },
      {
        q: "Do you provide documentation and training?",
        a: "Yes. We deliver clean documentation covering CMS updates, along with a walkthrough video detailing how to manage products, update copy, and configure 3D models.",
      },
      {
        q: "Can I migrate the store to a different developer later?",
        a: "Yes. Because you own 100% of the repository and design assets, any React or Next.js developer can easily take over, edit, and expand your storefront without restriction.",
      },
    ],
  },
  {
    category: "Business & ROI",
    questions: [
      {
        q: "What benchmark metrics justify a headless build?",
        a: "By decoupling the frontend, loading speeds improve by up to 70% (Vercel, 2024). Reducing load times is critical: a 1-second delay reduces conversions by 7% (Google, 2024), and a load time under 2 seconds drops bounce rates by 15% (Google, 2024).",
      },
      {
        q: "How does Aethelon prevent cart abandonment?",
        a: "Furniture abandonment averages 83% (Baymard, 2025). We implement server-side lifecycle sequences and email infrastructure returning up to $36 per $1 spent (Klaviyo, 2024) to recover 10% of lost revenue (SellersCommerce, 2025).",
      },
    ],
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
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
      className="border-b border-[#141312]/10 py-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-16px)",
        transition: `opacity 0.6s ${index * 50}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 50}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-start justify-between w-full text-left group"
      >
        <h3 className="font-display text-lg text-[#141312] group-hover:text-[#C5A880] transition-colors duration-300 flex-1">
          {question}
        </h3>
        <ChevronDown
          size={20}
          className="text-[#C5A880] flex-shrink-0 ml-4 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
        />
      </button>

      {open && (
        <p className="font-body text-[#141312]/60 mt-4 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQPage() {
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
            Frequently Asked Questions
          </h1>
          <p className="font-body text-[#141312]/60 text-lg">
            Everything you need to know about building a custom headless
            storefront with Aethelon. Can't find your answer? Email us at
            ali@aethelonlabs.com.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-3xl space-y-16">
          {FAQ_CATEGORIES.map(category => (
            <div key={category.category}>
              <h2 className="font-display text-2xl text-[#141312] mb-8">
                {category.category}
              </h2>
              <div className="space-y-0">
                {category.questions.map((item, i) => (
                  <FAQItem
                    key={item.q}
                    question={item.q}
                    answer={item.a}
                    index={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 p-12 bg-[#141312] text-[#F8F6F2] max-w-3xl">
          <h2 className="font-display text-2xl text-[#F8F6F2] mb-4">
            Still have questions?
          </h2>
          <p className="font-body text-[#F8F6F2]/70 mb-6">
            Schedule a free 20-minute discovery call with our team. We'll answer
            all your questions and discuss your specific needs.
          </p>
          <a
            href="/#contact"
            className="inline-block px-6 py-3 bg-[#C5A880] text-[#141312] font-label text-sm hover:bg-[#F8F6F2] transition-colors"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  );
}
