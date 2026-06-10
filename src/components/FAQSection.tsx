/*
 * FAQSection — Aethelon Agency
 * Design: Minimalist luxury, accordion-style FAQ
 */
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Do I need to be on Shopify?",
    answer:
      "We work with both Shopify and WooCommerce. If you use a custom backend or another commerce engine, we can connect our headless Next.js frontend via APIs.",
  },
  {
    question: "What if I don't need AR/3D?",
    answer:
      "Our Starter tier is built for exactly that: a fast, custom Next.js headless storefront optimized for speed and conversion without the interactive 3D/AR visualization layer.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A custom Next.js headless build typically takes 6–8 weeks from kickoff to launch. Starter builds are faster, averaging 4–5 weeks.",
  },
  {
    question: "What are the ongoing retainer costs?",
    answer:
      "Ongoing maintenance, updates, and support are handled via monthly retainers: Starter is $200/month, Core is $300/month, Full is $500/month, and Enterprise is custom.",
  },
  {
    question: "Can I upgrade to AR/3D later?",
    answer:
      "Yes. All our headless storefronts are built with modular designs, allowing us to implement 3D configurators and AR support later with zero architectural re-work.",
  },
  {
    question: "Who owns the code and 3D assets?",
    answer:
      "You own 100% of the repository, design assets, and optimized 3D models upon completion of each milestone payment. We do not restrict or lock in your intellectual property.",
  },
  {
    question: "How do I schedule a discovery call?",
    answer:
      "Simply use our contact form to book a free 20-minute Zoom call. We'll audit your current store performance and outline high-level opportunities.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof FAQS)[0]; index: number }) {
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
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.6s ${index * 50}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 50}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left hover:text-[#C5A880] transition-colors duration-300"
      >
        <h3 className="font-display text-lg text-[#141312]">{faq.question}</h3>
        <ChevronDown
          size={20}
          className="flex-shrink-0 text-[#C5A880] transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {open && (
        <p className="font-body text-[#141312]/60 text-sm leading-relaxed mt-4">
          {faq.answer}
        </p>
      )}
    </div>
  );
}

export default function FAQSection() {
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
    <section id="faq" className="bg-[#F8F6F2] section-spacing">
      <div className="container max-w-3xl">
        <div
          ref={titleRef}
          className="mb-12"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <h2 className="heading-lg text-[#141312] mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-[#141312]/10">
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
