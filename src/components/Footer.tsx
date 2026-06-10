/*
 * Footer — Aethelon Agency
 * Design: Premium minimalist luxury, deep charcoal background, champagne-gold accents, type-safe navigation.
 */
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const isHomePage = window.location.pathname === "/";
    if (href.startsWith("#")) {
      if (isHomePage) {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.location.href = "/" + href;
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-[#141312] text-[#F8F6F2] section-spacing border-t border-[#F8F6F2]/5">
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 pb-16"
          style={{ borderBottom: "1px solid rgba(245,240,232,0.1)" }}
        >
          {/* Brand */}
          <div className="col-span-1 md:col-span-6">
            <h3 className="font-display text-2xl font-bold text-[#F8F6F2] mb-4 tracking-tight">
              AETHELON
            </h3>
            <p className="font-body text-sm text-[#F8F6F2]/50 leading-relaxed max-w-sm">
              Headless ecommerce agency specializing in custom platforms with
              AR/3D, AI, and lifecycle automation.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-3">
            <p className="font-label text-xs tracking-wider text-[#C5A880] uppercase mb-4 font-semibold">
              Navigation
            </p>
            <ul className="space-y-3">
              {[
                { label: "Features", href: "#features" },
                { label: "Our Process", href: "#process" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "#contact" },
              ].map(item => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="font-body text-sm text-[#F8F6F2]/60 hover:text-[#F8F6F2] transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1 md:col-span-3">
            <p className="font-label text-xs tracking-wider text-[#C5A880] uppercase mb-4 font-semibold">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ali@aethelonlabs.com"
                  className="font-body text-sm text-[#F8F6F2]/60 hover:text-[#F8F6F2] transition-colors flex items-center gap-2 group"
                >
                  <Mail size={14} className="text-[#C5A880] group-hover:scale-110 transition-transform duration-300" />
                  ali@aethelonlabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#F8F6F2]/40">
            © {currentYear} Aethelon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
