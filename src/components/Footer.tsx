/*
 * Footer — Aethelon Agency
 * Design: Minimalist luxury, warm brown background, elegant serif logo
 */
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141312] text-[#F8F6F2] section-spacing">
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-16"
          style={{ borderBottom: "1px solid rgba(245,240,232,0.1)" }}
        >
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl text-[#F8F6F2] mb-4">
              AETHELON
            </h3>
            <p className="font-body text-sm text-[#F8F6F2]/50 leading-relaxed">
              Headless ecommerce agency specializing in custom platforms with
              AR/3D, AI, and lifecycle automation.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-label text-[#C5A880] mb-4">Services</p>
            <ul className="space-y-2">
              {[
                "Headless Storefronts",
                "Full Custom Platforms",
                "AR & 3D Layer",
                "AI Intelligence",
                "Lifecycle Automation",
              ].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-sm text-[#F8F6F2]/60 hover:text-[#F8F6F2] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-label text-[#C5A880] mb-4">Company</p>
            <ul className="space-y-2">
              {["About", "Process", "Pricing", "Contact"].map(item => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(`#${item.toLowerCase()}`)}
                    className="font-body text-sm text-[#F8F6F2]/60 hover:text-[#F8F6F2] transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-label text-[#C5A880] mb-4">Connect</p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-[#F8F6F2]/20 hover:border-[#C5A880] transition-colors"
              >
                <Mail size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-[#F8F6F2]/20 hover:border-[#C5A880] transition-colors"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-[#F8F6F2]/20 hover:border-[#C5A880] transition-colors"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#F8F6F2]/40">
            © {currentYear} Aethelon. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-xs text-[#F8F6F2]/40 hover:text-[#F8F6F2] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-body text-xs text-[#F8F6F2]/40 hover:text-[#F8F6F2] transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
