You are tasked with executing Milestones 2-6: Website Implementation for the Aethelon website update project.

Your objective is to:

1. Purge Testimonials & Social Proof:
   - Delete `src/components/TestimonialsSection.tsx` and `src/components/SocialProofBadges.tsx`.
   - In `src/page-components/Home.tsx`, remove the import of `TestimonialsSection`.
   - In `src/components/ContactSection.tsx`, remove the import and JSX element of `SocialProofBadges` (line 42).
   - Ensure no other files reference `TestimonialsSection` or `SocialProofBadges`.
2. Implement Aethelon Lab Showcase:
   - Create `src/components/LabShowcase.tsx`. It must showcase our demo projects matching the Sand/Obsidian/Gold palette:
     - "Minimalist Chair Configurator": Target Load Time < 1.5s, Polygon budget < 10K.
     - "AR Sofa Showcase": Target Load Time < 2.0s, Polygon budget < 15K.
     - Add a prominent note stating that live URLs and mockups are coming soon: "Live URLs and interactive 3D mockups coming soon. Interactive models are currently under development in the Aethelon Lab."
   - Import and render `LabShowcase` in `src/page-components/Home.tsx` (above `CaseStudiesSection`).
3. Refactor Case Studies to Industry Performance Reports:
   - In `src/components/CaseStudiesSection.tsx` and `src/app/case-studies/page.tsx` (which imports `src/components/CaseStudiesPage.tsx` or defines case studies):
     - Convert Luxe Living, Artisan Goods, and Modern Spaces case studies into feature-based Industry Performance Reports:
       1. Next.js Headless Frontends: up to 70% faster loading (Source: Vercel Engineering, 2024), 1s delay reduces conversions by 7% (Google, 2024).
       2. AR Product Previews / 3D Models: 94% higher conversion rates (Shopify, 2025), 40% fewer returns (BrandXR, 2025 / Shopify AR Study, 2023).
       3. Lifecycle Automation & Cart Recovery: 75% average abandonment rate (83% for furniture) (Baymard Institute, 2024/2025), recovers 10% lost revenue.
     - Citations must be accurate and numbers formatted with tabular-nums styling.
     - Completely rename headings from "Case Studies" to "Industry Performance Reports" or "Performance Reports".
     - Update nav links in `src/components/Navbar.tsx` and `src/components/Footer.tsx` from "Case Studies" to "Performance Reports".
4. Standardize Milestones & Pricing:
   - In `src/components/PricingSection.tsx`, update Starter ($2,000, $400 deposit, $200/mo retainer), Core ($4,000, $800 deposit, $300/mo retainer), and Full ($5,000, $1,000 deposit, $500/mo retainer) tiers.
   - At the bottom of `PricingSection.tsx` or in the pricing card layout, detail the Milestone payment schedule: Kickoff (20%), Design (30%), Staging (30%), Launch (20%), along with respective dollar values for each tier.
   - Refactor `src/components/MilestonePlan.tsx` from the 5-step roadmap to the 4-phase system: Kickoff (20%), Design Approval (30%), Staging Deploy (30%), Launch (20%). Display the exact dollar amounts for each tier ($400/$800/$1,000 kickoff, $600/$1,200/$1,500 design, $600/$1,200/$1,500 staging, $400/$800/$1,000 launch).
   - In `src/components/MilestonePlan.tsx`, embed the pull quote verbatim in a beautifully designed editorial block: "You start with $400. You only pay the next installment after you've approved what was built. If at any point you're not satisfied, we stop — you've only paid for what was delivered."
5. Differentiators & Workflow Copy:
   - In `src/components/WhyAethelon.tsx`, construct a side-by-side comparison table (Generic Agency vs Aethelon) listing the features from the brief (specialty, custom headless, AR/3D core, 20% deposit/milestone, direct developer contact, own everything, demo store).
   - In `src/components/ProcessSection.tsx` and `src/components/EngagementProcess.tsx`, update the step durations and copy to: Step 1: Discovery Call (20 min), Step 2: Proposal & Scope (24 hours), Step 3: Kickoff (48 hours after signing).
   - In `src/components/FAQSection.tsx` and `src/components/FAQPage.tsx`, ensure all statistics match the brief and ensure no direct client claims are made.
6. Validation:
   - Run `pnpm check` (`tsc --noEmit`) to verify zero TypeScript compilation errors.
   - Run `pnpm build` to verify Next.js builds successfully.
   - Run `pnpm test` and `pnpm test:e2e` to verify all Vitest and Playwright test cases pass.
   - Document the test results, build results, and code layout compliance in your handoff report.

Write your handoff report to `handoff.md` in your working directory (`.agents/worker_implement`).
