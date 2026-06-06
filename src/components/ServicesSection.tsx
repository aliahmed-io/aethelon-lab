/*
 * ServicesSection — Aethelon Agency
 * Design: Minimalist luxury, ivory background, elegant rows with descriptions
 */
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    title: "Headless Storefront",
    subtitle: "Frontend Autonomy",
    description:
      "Your storefront, completely decoupled from the commerce backend. We build with React/Next.js connected to Shopify, Medusa, or your custom API. The result: total design control, lightning-fast performance, and zero template constraints.",
    price: "From $2,000",
  },
  {
    number: "02",
    title: "Full Custom Platform",
    subtitle: "Complete Ownership",
    description:
      "A ground-up ecommerce system engineered to your exact specifications. Custom checkout, inventory logic, multi-currency support, and every edge case your business requires. Built to scale with you, not against you.",
    price: "From $4,000",
  },
  {
    number: "03",
    title: "Spatial Commerce",
    subtitle: "AR & 3D Layer",
    description:
      "Photorealistic 3D product viewers and WebXR AR experiences. Customers visualize products from every angle and in their own space. AI-powered try-on for apparel and accessories. Conversion rates rise when customers can truly see what they're buying.",
    price: "Add-on",
  },
  {
    number: "04",
    title: "Commerce Intelligence",
    subtitle: "AI & Analytics Layer",
    description:
      "Natural language shopping assistant, semantic search that understands intent, and predictive recommendations. Advanced admin dashboard with real-time inventory insights and customer behavior analytics. Commerce that thinks.",
    price: "Add-on",
  },
  {
    number: "05",
    title: "Revenue Automation",
    subtitle: "Email & Retention Layer",
    description:
      "Abandoned cart recovery, wishlist price-drop alerts, and newsletter automation. SEO-optimized blog with built-in CMS. Transactional emails that delight. Every touchpoint engineered to recover revenue and build loyalty.",
    price: "Add-on",
  },
];

function ServiceRow({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
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
      className="group"
      style={{
        borderBottom: "1px solid rgba(20, 19, 18,0.1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.7s ${index * 70}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s ${index * 70}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <div className="grid grid-cols-12 gap-4 py-10 md:py-12 items-start">
        <div className="col-span-2 md:col-span-1">
          <span className="font-label text-xs text-[#C5A880]/40">
            {service.number}
          </span>
        </div>

        <div className="col-span-10 md:col-span-4">
          <h3 className="font-display text-2xl md:text-3xl text-[#141312] mb-1 group-hover:text-[#C5A880] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="font-label text-[#C5A880]/60">{service.subtitle}</p>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-6">
          <p className="font-body text-[#141312]/60 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="col-span-12 md:col-span-2 md:col-start-11 flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2 mt-2 md:mt-0">
          <span className="font-label text-sm text-[#141312]">
            {service.price}
          </span>
          <div
            className="w-8 h-8 flex items-center justify-center group-hover:bg-[#C5A880] transition-all duration-300"
            style={{ border: "1px solid rgba(20, 19, 18,0.2)" }}
          >
            <ArrowUpRight
              size={13}
              className="text-[#141312] group-hover:text-[#F8F6F2] transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
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
    <section id="services" className="bg-[#F8F6F2] section-spacing">
      <div className="container">
        <div
          ref={titleRef}
          className="grid grid-cols-12 gap-4 mb-16"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className="col-span-12 md:col-span-5">
            <h2 className="heading-lg text-[#141312] mb-6">
              Services &<br />
              <span className="text-[#C5A880]" style={{ fontStyle: "italic" }}>
                Capabilities
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
            <p className="font-body text-[#141312]/50 leading-relaxed text-sm">
              Every engagement starts with a headless or custom ecommerce
              foundation. Three specialist add-on layers — AR/3D, AI
              intelligence, and lifecycle automation — can be integrated at any
              stage.
            </p>
          </div>
        </div>

        <div className="elegant-divider mb-0" />

        {SERVICES.map((service, i) => (
          <ServiceRow key={service.number} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
