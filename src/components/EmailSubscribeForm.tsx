/*
 * EmailSubscribeForm — Aethelon Agency
 * Design: Minimalist luxury, email capture form with Brevo API integration
 */
import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function EmailSubscribeForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // Brevo API integration
      // Replace YOUR_BREVO_API_KEY with your actual Brevo API key from https://app.brevo.com/settings/keys/api
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "YOUR_BREVO_API_KEY",
        },
        body: JSON.stringify({
          email: email,
          listIds: [2],
          updateEnabled: true,
        }),
      });

      if (response.ok || response.status === 409) {
        // 409 means contact already exists, which is fine
        toast.success(
          "Thanks for subscribing! Check your email for confirmation."
        );
        setSubscribed(true);
        setEmail("");

        setTimeout(() => setSubscribed(false), 3000);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (subscribed) {
    return (
      <div className="p-8 bg-[#141312] text-[#F8F6F2] flex items-center gap-4">
        <CheckCircle size={24} className="text-[#C5A880] flex-shrink-0" />
        <div>
          <p className="font-display text-lg text-[#F8F6F2]">Subscribed!</p>
          <p className="font-body text-sm text-[#F8F6F2]/60">
            Check your email for a confirmation link.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-[#141312] text-[#F8F6F2]">
      <div className="flex items-center gap-3 mb-4">
        <Mail size={20} className="text-[#C5A880]" />
        <h3 className="font-display text-lg text-[#F8F6F2]">
          Subscribe to Insights
        </h3>
      </div>

      <p className="font-body text-sm text-[#F8F6F2]/60 mb-6">
        Get weekly articles on headless ecommerce, AR/3D, AI, and growth
        strategies. No spam, unsubscribe anytime.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={loading}
          className="flex-1 px-4 py-3 bg-[#F8F6F2] text-[#141312] placeholder-[#141312]/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-[#C5A880] text-[#141312] font-label text-sm hover:bg-[#F8F6F2] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      <p className="font-body text-xs text-[#F8F6F2]/40 mt-4">
        Note: To enable email subscriptions, add your Brevo API key to the form.
        Get it at https://app.brevo.com/settings/keys/api
      </p>
    </form>
  );
}
