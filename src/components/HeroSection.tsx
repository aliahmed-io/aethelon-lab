"use client";

/*
 * HeroSection — Aethelon Agency
 * Design: Editorial luxury, asymmetrical layout, Framer Motion card state morphs & hover image reveals
 */
import { useEffect, useState } from "react";
import { ArrowRight, Box, Cpu, Mail } from "lucide-react";
import { motion } from "framer-motion";

const FEATURE_CARDS = [
  {
    id: "ar",
    number: "01",
    label: "AR & 3D Commerce",
    title: "Spatial Product Experience",
    description:
      "Photorealistic 3D viewers, AR try-on, and 360° product exploration.",
    icon: Box,
    demoImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663734895709/eGWAq6uu3bYqdeB8H9Q9HL/aethelon-feature-1-iPhEvG68qRTkaXDwdW35JA.webp",
    yOffset: "lg:translate-y-0",
  },
  {
    id: "ai",
    number: "02",
    label: "AI Commerce Intelligence",
    title: "Intelligent Search & Assistant",
    description:
      "AI chatbot, semantic search, advanced admin panel with analytics.",
    icon: Cpu,
    demoImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663734895709/eGWAq6uu3bYqdeB8H9Q9HL/aethelon-feature-2-ene5Rf8G6iThWKDtvc3QNb.webp",
    yOffset: "lg:translate-y-10", // Asymmetric offset to break rigid stacked layout
  },
  {
    id: "email",
    number: "03",
    label: "Lifecycle Automation",
    title: "Revenue Recovery Engine",
    description: "Blog, newsletter, cart recovery, and smart email alerts.",
    icon: Mail,
    demoImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663734895709/eGWAq6uu3bYqdeB8H9Q9HL/aethelon-feature-3-eUXBCw4PPubKsULTxa5BZY.webp",
    yOffset: "lg:translate-y-4", // Asymmetric offset to break rigid stacked layout
  },
];

const STATS = [
  { value: "94%", label: "Higher conversion with 3D/AR" },
  { value: "40%", label: "Fewer returns with AR" },
  { value: "$36", label: "Email ROI per $1 spent" },
  { value: "10%", label: "Lost revenue recovered" },
];

function FeatureCard({
  card,
  index,
}: {
  card: (typeof FEATURE_CARDS)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = card.icon;

  // Variants for Framer Motion elements
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.4 + index * 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.02, y: -4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col justify-between p-8 rounded-sm overflow-hidden border border-[#141312]/8 transition-all duration-500 cursor-pointer min-h-[440px] ${card.yOffset} ${
        hovered
          ? "bg-[#141312] text-[#F8F6F2] shadow-xl border-transparent"
          : "bg-white/40 backdrop-blur-sm text-[#141312]"
      }`}
      style={{
        transformOrigin: "center bottom",
      }}
    >
      {/* Background Image Reveal on Hover */}
      <div
        className="absolute inset-0 z-0 transition-all duration-700 ease-out"
        style={{
          opacity: hovered ? 0.3 : 0,
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      >
        <img
          src={card.demoImage}
          alt={card.label}
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-[#141312]/85" />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between flex-1">
        {/* Top Details */}
        <div className="flex items-start justify-between">
          <span
            className={`font-sans text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
              hovered ? "text-[#C5A880]" : "text-[#141312]/55"
            }`}
          >
            {card.label}
          </span>
          <span
            className={`font-display text-xs transition-colors duration-300 ${
              hovered ? "text-[#C5A880]/40" : "text-[#141312]/20"
            }`}
          >
            {card.number}
          </span>
        </div>

        {/* Center Icon & Title */}
        <div className="my-auto py-8">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-sm mb-6 border transition-all duration-500 ${
              hovered
                ? "border-[#C5A880]/30 bg-[#C5A880] text-[#141312]"
                : "border-[#141312]/15 text-[#141312]"
            }`}
          >
            <Icon
              size={18}
              className="transition-transform duration-500"
              style={{ transform: hovered ? "rotate(10deg)" : "none" }}
            />
          </div>

          <h3
            className={`font-display text-2xl md:text-3xl tracking-tight leading-tight mb-3 transition-colors duration-300 ${
              hovered ? "text-[#F8F6F2]" : "text-[#141312]"
            }`}
          >
            {card.title}
          </h3>

          <p
            className={`font-sans text-sm leading-relaxed transition-colors duration-300 ${
              hovered ? "text-[#F8F6F2]/70" : "text-[#141312]/60"
            }`}
          >
            {card.description}
          </p>
        </div>

        {/* Bottom Interactive Trigger */}
        <div
          className={`pt-4 flex items-center justify-between border-t transition-colors duration-500 ${
            hovered ? "border-[#F8F6F2]/10" : "border-[#141312]/5"
          }`}
        >
          <span
            className={`font-sans text-[10px] font-bold tracking-[0.12em] uppercase transition-all duration-300 ${
              hovered ? "text-[#C5A880] pl-1" : "text-[#141312]/40"
            }`}
          >
            Hover to preview
          </span>
          <ArrowRight
            size={13}
            className={`transition-all duration-500 ${
              hovered ? "text-[#C5A880] translate-x-1" : "text-[#141312]/40"
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen bg-[#F8F6F2] overflow-hidden pt-20 flex items-center"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663734895709/eGWAq6uu3bYqdeB8H9Q9HL/aethelon-hero-premium-PYnmm26Em9b6PkiBT3bBU7.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Premium subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(248,246,242,0.6) 0%, rgba(248,246,242,0.92) 80%, #F8F6F2 100%)",
          zIndex: 1,
        }}
      />

      <div
        className="container relative pt-20 pb-28 md:pt-28 md:pb-36"
        style={{ zIndex: 2 }}
      >
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center text-center"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A880] bg-[#C5A880]/8 px-4 py-1.5 rounded-full">
              Next.js · AR & 3D · Headless Commerce
            </span>
          </motion.div>

          {/* Main Title - Asymmetrical Serif style */}
          <motion.div variants={itemVariants} className="mb-6 relative">
            <h1
              className="font-display text-[#141312] leading-[0.85] tracking-tight relative z-10"
              style={{
                fontSize: "clamp(4rem, 14vw, 8.5rem)",
              }}
            >
              AETHELON
            </h1>
            <div className="absolute top-[20%] right-[-15%] md:right-[-25%] font-display italic text-lg md:text-2xl text-[#C5A880] select-none pointer-events-none tracking-normal font-normal">
              [ Studio ]
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-8 max-w-3xl">
            <p className="font-display text-xl md:text-2xl text-[#C5A880] leading-relaxed italic font-normal">
              We engineer headless Next.js storefronts for furniture and home
              décor brands — integrating photorealistic 3D viewers, AR, and
              custom conversion systems.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-24"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-elegant border-[#141312] bg-[#141312] text-[#F8F6F2]"
            >
              See the Demo
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-elegant border-[#141312] bg-transparent text-[#141312] hover:text-[#141312]"
            >
              View Pricing
            </button>
          </motion.div>

          {/* Asymmetrical grid layout for the feature cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24 text-left items-start">
            {FEATURE_CARDS.map((card, i) => (
              <FeatureCard key={card.id} card={card} index={i} />
            ))}
          </div>

          {/* Stats Section with refined styling */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/35 backdrop-blur-[2px] px-6 py-6 text-center border border-[#141312]/5 transition-all duration-300 hover:bg-white/60"
              >
                <div className="stat-number text-3xl md:text-4xl text-[#141312] mb-1 font-bold tracking-tight">
                  {stat.value}
                </div>
                <div className="font-sans text-[10px] font-bold tracking-[0.1em] uppercase text-[#C5A880]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
