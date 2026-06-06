/*
 * LabShowcase — Aethelon Agency
 * Design: Minimalist luxury, wireframe aesthetic, Sand/Obsidian/Gold palette
 * Showcases demo projects under development in the Aethelon Lab
 */
import { useEffect, useRef, useState } from "react";
import { Cpu, Layers, HelpCircle, ArrowUpRight } from "lucide-react";

interface LabProject {
  title: string;
  description: string;
  loadTime: string;
  polygonBudget: string;
  tech: string[];
}

const PROJECTS: LabProject[] = [
  {
    title: "Minimalist Chair Configurator",
    description:
      "Real-time material customization with instant reflections and dynamic lighting setups. Optimized for performance and buttery smooth rotations.",
    loadTime: "< 1.5s",
    polygonBudget: "< 10K",
    tech: ["React Three Fiber", "WebGL", "TailwindCSS"],
  },
  {
    title: "AR Sofa Showcase",
    description:
      "True-to-scale augmented reality placing digital assets into physical spaces. Complete with realistic shadows, occlusion, and light estimation.",
    loadTime: "< 2.0s",
    polygonBudget: "< 15K",
    tech: ["WebXR", "Three.js", "Model-Viewer"],
  },
];

export default function LabShowcase() {
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
      id="lab-showcase"
      ref={ref}
      className="bg-[#F8F6F2] border-t border-[#141312]/5 section-spacing"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition:
          "opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-label text-xs tracking-widest text-[#C5A880] uppercase block mb-3">
            Experimental Hub
          </span>
          <h2 className="heading-lg text-[#141312] mb-6">Aethelon Lab</h2>
          <p className="font-body text-[#141312]/60 leading-relaxed text-base max-w-xl">
            We are constantly pushing the limits of 3D web graphics, WebXR, and
            performance budgets. Below are live prototypes currently cooking in
            our research facility.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="border border-[#141312]/10 bg-white/40 backdrop-blur-sm p-8 flex flex-col justify-between group hover:border-[#C5A880] transition-colors duration-500"
            >
              <div>
                {/* Visual Placeholder / Mockup */}
                <div className="relative w-full h-48 bg-[#141312]/5 mb-8 flex items-center justify-center overflow-hidden border border-[#141312]/5">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    {/* Abstract Grid Background */}
                    <svg
                      width="100%"
                      height="100%"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id={`grid-${i}`}
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 20 0 L 0 0 0 20"
                            fill="none"
                            stroke="#141312"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#grid-${i})`}
                      />
                    </svg>
                  </div>

                  {/* Abstract CAD Mockup Wireframe */}
                  {i === 0 ? (
                    <svg
                      className="w-24 h-24 text-[#C5A880] opacity-40 group-hover:opacity-75 transition-opacity duration-500"
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      {/* Abstract Chair Wireframe */}
                      <path d="M30 70 L30 45 L70 45 L70 70 M30 45 L40 25 L60 25 L70 45 M35 70 L35 90 M65 70 L65 90 M30 55 L70 55" />
                      <circle cx="50" cy="35" r="3" fill="currentColor" />
                    </svg>
                  ) : (
                    <svg
                      className="w-24 h-24 text-[#C5A880] opacity-40 group-hover:opacity-75 transition-opacity duration-500"
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      {/* Abstract Sofa Wireframe */}
                      <path d="M20 70 L20 40 L80 40 L80 70 M20 55 L80 55 M20 70 L80 70 M25 70 L25 85 M75 70 L75 85 M35 55 L35 70 M65 55 L65 70" />
                      <rect
                        x="25"
                        y="45"
                        width="50"
                        height="10"
                        strokeDasharray="2,2"
                      />
                    </svg>
                  )}

                  <span className="absolute top-4 right-4 bg-[#141312]/5 text-[#141312]/60 font-label text-[10px] uppercase tracking-wider px-2.5 py-1">
                    Prototype
                  </span>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl text-[#141312] group-hover:text-[#C5A880] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-[#141312]/30 group-hover:text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                <p className="font-body text-[#141312]/60 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Specs Block */}
                <div className="grid grid-cols-2 gap-4 border-t border-[#141312]/10 pt-6">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#C5A880] mb-1">
                      <Cpu size={12} />
                      <span className="font-label text-[10px] tracking-wider uppercase font-semibold">
                        Load Budget
                      </span>
                    </div>
                    <span className="font-body font-medium text-sm text-[#141312] tabular-nums">
                      {project.loadTime}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[#C5A880] mb-1">
                      <Layers size={12} />
                      <span className="font-label text-[10px] tracking-wider uppercase font-semibold">
                        Mesh Budget
                      </span>
                    </div>
                    <span className="font-body font-medium text-sm text-[#141312] tabular-nums">
                      {project.polygonBudget}
                    </span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="font-label text-[10px] text-[#141312]/50 bg-[#141312]/5 px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Alert Block */}
        <div className="border border-dashed border-[#C5A880] bg-[#C5A880]/5 p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <HelpCircle
            className="text-[#C5A880] flex-shrink-0 mt-0.5 md:mt-0"
            size={24}
          />
          <p className="font-body text-[#141312]/80 text-sm leading-relaxed">
            <strong>Lab Status:</strong> Live URLs and interactive 3D mockups
            coming soon. Interactive models are currently under development in
            the Aethelon Lab.
          </p>
        </div>
      </div>
    </section>
  );
}
