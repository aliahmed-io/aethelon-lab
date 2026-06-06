/*
 * CTABanner — Aethelon Agency
 * Design: Warm dark background with gold dust, dreamy CTA
 */
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CTABanner() {
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
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #F8F6F2 0%, #EDE8DE 100%)",
      }}
    >
      {/* Subtle gold dust overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663734895709/eGWAq6uu3bYqdeB8H9Q9HL/aethelon-hero-bg-4icMvCPBWbGgcnq6M6DVfn.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Radial veil */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(245,240,232,0.6) 0%, transparent 100%)",
        }}
      />

      <div className="container relative" style={{ zIndex: 2 }}>
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.9s cubic-bezier(0.23,1,0.32,1), transform 0.9s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <div>
            <p className="label-tag text-[#B8922A]/60 mb-4">Ready to Build?</p>
            <h2
              className="font-display text-4xl md:text-6xl text-[#1A1510] leading-tight"
              style={{ fontWeight: 400 }}
            >
              Your store deserves
              <br />
              <span className="text-[#B8922A]" style={{ fontStyle: "italic" }}>
                more than a template.
              </span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-body text-sm bg-[#1A1510] text-[#F8F6F2] px-8 py-5 flex items-center gap-3 hover:bg-[#B8922A] transition-all duration-300 active:scale-[0.97]"
              style={{ letterSpacing: "0.06em" }}
            >
              Begin a Project
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
