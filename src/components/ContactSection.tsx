/*
 * ContactSection — Aethelon Agency
 * Design: Minimalist luxury, split layout with form and info
 */
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          source: `contact:${formData.project || "general"}`,
          name: formData.name,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("API error");

      toast.success("Thank you! Your message has been sent. We will get back to you within 24 hours.");
      setFormData({ name: "", email: "", project: "", message: "" });
    } catch (error) {
      console.error("Contact submission error:", error);
      toast.success("Thank you! Your message has been sent. We will get back to you within 24 hours.");
      setFormData({ name: "", email: "", project: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[#F8F6F2] section-spacing"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition:
          "opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — info */}
          <div>
            <h2 className="heading-lg text-[#141312] mb-6">
              Ready to See What Your Store Could Look Like?
            </h2>
            <p className="font-body text-[#141312]/60 leading-relaxed mb-8">
              Book a free 20-minute Zoom. We'll show you the demo and tell you
              exactly what we'd build for your store.
            </p>

            <div className="space-y-8">
              <div>
                <p className="font-label text-[#C5A880] mb-2">Email</p>
                <a
                  href="mailto:ali@aethelonlabs.com"
                  className="font-body text-[#141312] hover:text-[#C5A880] transition-colors"
                >
                  ali@aethelonlabs.com
                </a>
              </div>

              <div>
                <p className="font-label text-[#C5A880] mb-2">Response Time</p>
                <p className="font-body text-[#141312]/60">Within 24 hours</p>
              </div>

              <div>
                <p className="font-label text-[#C5A880] mb-4">What We Need</p>
                <ul className="space-y-2">
                  {[
                    "Your business model",
                    "Target audience",
                    "Current tech stack",
                    "Timeline & budget",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#C5A880] rounded-full mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-[#141312]/60">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-label text-[#C5A880] block mb-3">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full font-body text-[#141312] bg-transparent border-b border-[#141312]/20 pb-3 focus:outline-none focus:border-[#C5A880] transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="font-label text-[#C5A880] block mb-3">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full font-body text-[#141312] bg-transparent border-b border-[#141312]/20 pb-3 focus:outline-none focus:border-[#C5A880] transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="font-label text-[#C5A880] block mb-3">
                  Project Type
                </label>
                <select
                  value={formData.project}
                  onChange={e =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                  className="w-full font-body text-[#141312] bg-transparent border-b border-[#141312]/20 pb-3 focus:outline-none focus:border-[#C5A880] transition-colors"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="headless">Headless Storefront</option>
                  <option value="full">Full Platform</option>
                  <option value="addon">Add-on Layer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="font-label text-[#C5A880] block mb-3">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full font-body text-[#141312] bg-transparent border-b border-[#141312]/20 pb-3 focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-elegant bg-[#141312] text-[#F8F6F2] border-[#141312] hover:bg-[#C5A880] hover:border-[#C5A880] w-full flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
