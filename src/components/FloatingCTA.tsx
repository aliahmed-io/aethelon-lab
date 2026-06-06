/*
 * FloatingCTA — Aethelon Agency
 * Design: Fixed floating button with Calendly embed modal
 */
import { useEffect, useRef, useState } from "react";
import { Calendar, X } from "lucide-react";

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Show button after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && !scriptRef.current) {
      // Load Calendly script when modal opens
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      scriptRef.current = script;
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-[#141312] text-[#F8F6F2] hover:bg-[#C5A880] transition-all duration-300 shadow-lg"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.8)",
          transition:
            "opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <Calendar size={18} />
        <span className="font-label text-sm">Book a Call</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-[#F8F6F2] rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={e => e.stopPropagation()}
            style={{
              animation: "slideUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#141312]/10">
              <h2 className="font-display text-xl text-[#141312]">
                Schedule a Demo
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-[#141312]/10 transition-colors"
              >
                <X size={20} className="text-[#141312]" />
              </button>
            </div>

            {/* Calendly Embed */}
            <div className="flex-1 overflow-auto">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/ali-aethelonlabs/discovery-call?hide_event_type_details=1&hide_gdpr_block=1"
                style={{ minHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Animation Keyframes */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes slideUp {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        }
      `}</style>
    </>
  );
}
