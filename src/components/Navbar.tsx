/*
 * Navbar — Aethelon Agency
 * Design: Premium luxury, transparent-to-glassmorphic transitions, animated underlines
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
  { label: "Performance Reports", href: "/case-studies" },
  { label: "FAQ", href: "/faq" },
  { label: "Retainer", href: "/retainer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#services") {
      return;
    }
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F6F2]/80 backdrop-blur-md border-b border-[#141312]/5 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className="group flex items-center"
              onClick={e => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <span
                className="font-display text-2xl font-bold text-[#141312] group-hover:text-[#C5A880] transition-colors duration-500"
                style={{ letterSpacing: "-0.01em" }}
              >
                AETHELON
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase text-[#141312]/70 hover:text-[#141312] transition-all duration-300 hover:tracking-[0.18em] relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-[#C5A880] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-elegant hover:border-[#C5A880]"
              >
                Begin a Project
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-[#141312] hover:text-[#C5A880] transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F8F6F2] pt-24 pb-8 flex flex-col justify-between"
          >
            <div className="container flex flex-col gap-0 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between py-5 border-b text-left group border-[#141312]/5 cursor-pointer"
                >
                  <span className="font-display text-2xl text-[#141312] group-hover:text-[#C5A880] group-hover:pl-2 transition-all duration-300">
                    {link.label}
                  </span>
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#C5A880]/60">
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-8 btn-elegant w-full text-center py-4 hover:border-[#C5A880]"
              >
                Begin a Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
