/*
 * GetStartedCTA — Aethelon Agency
 * Design: Minimalist luxury, prominent call-to-action section
 */
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function GetStartedCTA() {
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

  const handleClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="get-started" className="bg-[#F8F6F2] section-spacing">
      <div className="container">
        <div
          ref={ref}
          className="max-w-4xl mx-auto p-16 bg-[#141312] text-[#F8F6F2]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.95)",
            transition:
              "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="text-center">
            <h2 className="font-display text-4xl text-[#F8F6F2] mb-6 leading-tight">
              Ready to build your custom storefront?
            </h2>
            <p className="font-body text-lg text-[#F8F6F2]/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how a headless storefront with AR, AI, and email
              automation can transform your furniture brand. Schedule a free
              20-minute discovery call with our team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleClick}
                className="flex items-center gap-2 px-8 py-4 bg-[#C5A880] text-[#141312] font-label text-sm hover:bg-[#F8F6F2] transition-all duration-300"
              >
                Schedule a Call
                <ArrowRight size={18} />
              </button>
              <a
                href="#blog"
                className="px-8 py-4 border border-[#C5A880] text-[#C5A880] font-label text-sm hover:bg-[#C5A880]/10 transition-all duration-300"
              >
                Read Our Blog
              </a>
            </div>

            <div
              className="mt-12 pt-12"
              style={{ borderTop: "1px solid rgba(197, 168, 128,0.2)" }}
            >
              <p className="font-label text-xs text-[#C5A880] mb-4">
                WHAT TO EXPECT
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="font-display text-2xl text-[#F8F6F2] mb-2">
                    20 min
                  </p>
                  <p className="font-body text-sm text-[#F8F6F2]/60">
                    Discovery call to understand your goals
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl text-[#F8F6F2] mb-2">
                    24 hrs
                  </p>
                  <p className="font-body text-sm text-[#F8F6F2]/60">
                    Detailed proposal with timeline & pricing
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl text-[#F8F6F2] mb-2">
                    No Risk
                  </p>
                  <p className="font-body text-sm text-[#F8F6F2]/60">
                    20% deposit, milestone-based payments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
