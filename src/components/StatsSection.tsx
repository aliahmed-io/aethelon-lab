/*
 * StatsSection — Aethelon Agency
 * Design: Warm dark strip with animated counters and gold accents
 */
import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  {
    value: 48,
    suffix: "+",
    label: "Stores Launched",
    description: "Across fashion, beauty, electronics, and lifestyle",
  },
  {
    value: 3,
    suffix: "",
    label: "Signature Add-ons",
    description: "AR/3D, AI intelligence, lifecycle automation",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    description: "Clients return for ongoing development",
  },
  {
    value: 100,
    suffix: "K+",
    label: "Avg Monthly Orders",
    description: "Handled by stores we've built",
  },
];

export default function StatsSection() {
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
    <section
      className="relative py-20"
      style={{
        background: "linear-gradient(180deg, #1A1510 0%, #150F0A 100%)",
        borderTop: "1px solid rgba(184,146,42,0.1)",
      }}
    >
      {/* Subtle gold dust bg */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663734895709/eGWAq6uu3bYqdeB8H9Q9HL/aethelon-dark-bg-hRQdQZ3yXRtUJtXAUe7u5d.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative" style={{ zIndex: 2 }}>
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: "rgba(184,146,42,0.08)" }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="p-8 md:p-10"
              style={{
                background: "rgba(21,15,10,0.5)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.7s ${i * 100}ms cubic-bezier(0.23,1,0.32,1), transform 0.7s ${i * 100}ms cubic-bezier(0.23,1,0.32,1)`,
              }}
            >
              <div className="stat-number text-4xl md:text-5xl text-[#F8F6F2] mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="label-tag text-[#B8922A] mb-2">{stat.label}</div>
              <p className="font-body text-xs text-[#F8F6F2]/25 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
