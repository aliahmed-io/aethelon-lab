/*
 * AboutUsPage — Aethelon Agency
 * Design: Minimalist luxury, founder story and team bios
 */
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Ali Aethelon",
    role: "Founder & Creative Director",
    bio: "15+ years building ecommerce platforms. Started Aethelon to prove that custom storefronts don't have to be expensive or slow.",
    expertise: ["Product Strategy", "Design Systems", "Headless Architecture"],
  },
  {
    name: "Jordan Chen",
    role: "Lead Developer",
    bio: "Full-stack engineer obsessed with performance. Built 50+ Next.js storefronts. Believes in code that's fast, clean, and maintainable.",
    expertise: ["Next.js", "React", "Performance Optimization"],
  },
  {
    name: "Maya Patel",
    role: "AR/3D Specialist",
    bio: "3D artist and WebGL developer. Transforms product photography into immersive AR experiences. Makes furniture shopping feel like magic.",
    expertise: ["3D Modeling", "WebGL", "AR Implementation"],
  },
  {
    name: "David Kim",
    role: "Growth & Strategy",
    bio: "Former ecommerce founder. Helps furniture brands understand their customers and build stores that convert. Obsessed with metrics.",
    expertise: ["Conversion Optimization", "Analytics", "Business Strategy"],
  },
];

function TeamMember({
  member,
  index,
}: {
  member: (typeof TEAM_MEMBERS)[0];
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
      className="p-8 bg-[#F8F6F2] hover:bg-[#141312]/5 transition-all duration-300"
      style={{
        border: "1px solid rgba(20, 19, 18,0.1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ${index * 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s ${index * 100}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      }}
    >
      <h3 className="font-display text-xl text-[#141312] mb-1">
        {member.name}
      </h3>
      <p className="font-label text-sm text-[#C5A880] mb-4">{member.role}</p>
      <p className="font-body text-[#141312]/60 mb-6 leading-relaxed">
        {member.bio}
      </p>
      <div className="flex flex-wrap gap-2">
        {member.expertise.map(skill => (
          <span
            key={skill}
            className="px-3 py-1 bg-[#141312]/5 text-[#141312] font-label text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AboutUsPage() {
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
    <div className="bg-[#F8F6F2] min-h-screen">
      <div className="container py-20">
        {/* Header */}
        <div
          ref={titleRef}
          className="mb-16 max-w-3xl"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(16px)",
            transition:
              "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 font-label text-sm text-[#C5A880] hover:text-[#141312] transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <h1 className="heading-lg text-[#141312] mb-6">About Aethelon</h1>
          <p className="font-body text-lg text-[#141312]/60 leading-relaxed mb-8">
            We started Aethelon because we were frustrated. Frustrated with
            template builders that limit your vision. Frustrated with agencies
            that overcharge and under-deliver. Frustrated with the gap between
            what's possible and what's actually being built for furniture
            brands.
          </p>
          <p className="font-body text-lg text-[#141312]/60 leading-relaxed">
            So we decided to build something different. A team of designers,
            developers, and strategists obsessed with creating custom
            storefronts that are fast, beautiful, and actually drive revenue. No
            templates. No compromises. Just results.
          </p>
        </div>

        {/* Story */}
        <div
          className="max-w-3xl mb-20 pb-20"
          style={{ borderBottom: "1px solid rgba(20, 19, 18,0.1)" }}
        >
          <h2 className="font-display text-2xl text-[#141312] mb-8">
            Our Story
          </h2>
          <div className="space-y-6">
            <p className="font-body text-[#141312]/60 leading-relaxed">
              Ali started his career building ecommerce platforms for enterprise
              brands. He saw the same pattern over and over: brands were stuck
              on template builders, paying thousands in monthly fees, and still
              couldn't build the features they needed. Meanwhile, custom
              development was prohibitively expensive and took 6-12 months.
            </p>
            <p className="font-body text-[#141312]/60 leading-relaxed">
              In 2020, he assembled a team of world-class developers, designers,
              and strategists. Their mission: prove that custom headless
              storefronts could be affordable, fast, and deliver real results.
              They started with furniture brands because they understood the
              unique challenges: large products, high return rates, and the need
              for visualization technology like AR and 3D.
            </p>
            <p className="font-body text-[#141312]/60 leading-relaxed">
              Today, Aethelon is engineered to bring those same enterprise-grade capabilities to furniture retailers of all sizes. By proving our concepts with advanced sandbox builds and utilizing industry-wide benchmarks, we focus on helping stores optimize conversion rates and unlock immediate growth.
            </p>
          </div>
        </div>

        {/* Values */}
        <div
          className="max-w-3xl mb-20 pb-20"
          style={{ borderBottom: "1px solid rgba(20, 19, 18,0.1)" }}
        >
          <h2 className="font-display text-2xl text-[#141312] mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-lg text-[#141312] mb-3">
                Quality Over Speed
              </h3>
              <p className="font-body text-[#141312]/60 leading-relaxed">
                We don't rush launches. Every pixel is intentional. Every line
                of code is audited. We'd rather take 8 weeks to build something
                perfect than 4 weeks to build something mediocre.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-[#141312] mb-3">
                Transparency
              </h3>
              <p className="font-body text-[#141312]/60 leading-relaxed">
                No hidden fees. No surprise costs. You know exactly what you're
                paying for and when. Milestone-based payments mean you only pay
                when we deliver.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-[#141312] mb-3">
                Partnership
              </h3>
              <p className="font-body text-[#141312]/60 leading-relaxed">
                We're not just vendors. We're partners invested in your success.
                We celebrate your wins and help solve your problems. Your growth
                is our growth.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-[#141312] mb-3">
                Innovation
              </h3>
              <p className="font-body text-[#141312]/60 leading-relaxed">
                We stay on the cutting edge of technology. AR, 3D, AI, advanced
                search — we integrate the latest tools to give you a competitive
                advantage.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="max-w-4xl">
          <h2 className="font-display text-2xl text-[#141312] mb-8">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <TeamMember key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 p-12 bg-[#141312] text-[#F8F6F2] max-w-3xl">
          <h2 className="font-display text-2xl text-[#F8F6F2] mb-4">
            Let's Build Something Great
          </h2>
          <p className="font-body text-[#F8F6F2]/70 mb-6">
            Ready to work with a team that's obsessed with your success?
            Schedule a free discovery call.
          </p>
          <a
            href="/#contact"
            className="inline-block px-6 py-3 bg-[#C5A880] text-[#141312] font-label text-sm hover:bg-[#F8F6F2] transition-colors"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  );
}
