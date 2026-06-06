# Codebase Exploration and Update Analysis Report

This report presents the findings from a read-only codebase exploration of the Aethelon Agency website and outlines a proposed implementation strategy to update it per the specifications in `ORIGINAL_REQUEST.md`.

---

## 1. Observation

### Key Component & Page Locations

Through file system queries, the exact locations of the requested components and page layouts were identified:

- **HeroSection**: `src/components/HeroSection.tsx` (lines 175-300 define the component, lines 11-42 define feature card data, lines 44-49 define stats).
- **FeaturesGrid**: `src/components/FeaturesGrid.tsx` (defines 12 key features in the `FEATURES` array on lines 9-82).
- **FeaturesSection**: `src/components/FeaturesSection.tsx` (defines 3 signature add-ons in the `FEATURES` array on lines 7-32; imported but not rendered in `Home.tsx`).
- **PricingSection**: `src/components/PricingSection.tsx` (defines Starter/Core/Full tiers on lines 8-59, add-ons on lines 61-68, and a milestone summary table on lines 208-226).
- **RetainerPage**: `src/components/RetainerPage.tsx` (defines 3 retainer tiers on lines 8-52, what's included on lines 54-95, and retainer FAQs on lines 245-277).
- **MilestonePlan**: `src/components/MilestonePlan.tsx` (defines project milestones in `MILESTONES` on lines 8-44; uses an outdated 5-milestone system).
- **ProcessSection**: `src/components/ProcessSection.tsx` (defines 6 step-cards in the `STEPS` array on lines 7-38).
- **EngagementProcess**: `src/components/EngagementProcess.tsx` (defines 6 detailed engagement steps in the `STEPS` array on lines 8-81).
- **WhyAethelon / Comparison**: `src/components/WhyAethelon.tsx` (defines 6 differentiators on lines 8-33; currently lacks the structured comparison table).
- **FAQSection**: `src/components/FAQSection.tsx` (defines 7 common FAQs on lines 8-37).
- **FAQPage**: `src/components/FAQPage.tsx` (defines 15+ comprehensive FAQs organized by category on lines 8-127).
- **CTABanner**: `src/components/CTABanner.tsx` (elegant banner prompting to start a project on lines 8-74).
- **ContactSection**: `src/components/ContactSection.tsx` (defines the contact layout and fields on lines 9-147; embeds `SocialProofBadges` on line 42).
- **SocialProofBadges**: `src/components/SocialProofBadges.tsx` (defines 4 client-centric stats on lines 8-29; contains fake project metrics).
- **Footer**: `src/components/Footer.tsx` (defines the footer navigation and brand info on lines 7-91).
- **FloatingCTA**: `src/components/FloatingCTA.tsx` (renders floating Calendly scheduler button/modal on lines 8-110).
- **CaseStudiesSection**: `src/components/CaseStudiesSection.tsx` (defines 3 case study blocks on lines 8-48).
- **CaseStudiesPage**: `src/components/CaseStudiesPage.tsx` (defines 3 detailed case study layouts on lines 8-54).
- **TestimonialsSection**: `src/components/TestimonialsSection.tsx` (defines 4 client reviews under the `TESTIMONIALS` constant on lines 8-41).

### Hardcoded Testimonials

Direct client testimonials are hardcoded in `src/components/TestimonialsSection.tsx` (lines 8-41) under the `TESTIMONIALS` array:

```typescript
const TESTIMONIALS = [
  {
    quote: "Ali transformed our store from a 2% conversion rate to 6% in just 3 months. The AR preview feature alone drove a 40% reduction in returns. We're now doing $156K/month.",
    author: "Sarah Chen",
    title: "Founder & CEO",
    company: "Luxe Living Co.",
    metric: "+246% Revenue Growth",
    rating: 5,
  },
  ...
]
```

`TestimonialsSection` is imported on line 13 of `src/page-components/Home.tsx` but is **never actually rendered** in the homepage JSX (lines 26-49).

### Hardcoded Case Studies

Case studies are hardcoded in two separate files:

1.  **CaseStudiesSection.tsx** (lines 8-48): Defines `CASE_STUDIES` containing objects with `number`, `company` ("Luxe Living Co.", "Artisan Goods", "Modern Spaces"), `category`, `description`, `metrics` (array with `label`, `before`, `after`, `change`), `features` (built features), and `tier`.
2.  **CaseStudiesPage.tsx** (lines 8-54): Defines `CASE_STUDIES` containing objects with `id`, `name`, `tagline`, `challenge`, `solution`, `results` (array with `metric`, `before`, `after`, `change`), `timeline`, and `features`.

### Design Tokens & Palette

Colors and fonts are defined inside `src/app/globals.css`:

- **Colors (:root variables, lines 52-86)**:
  - **Sand** (Light theme background/body): `--background: #F8F6F2`, with utility mappings `.bg-ivory` and `.text-ivory` (value: `#F8F6F2`).
  - **Obsidian** (Dark theme text/elements): `--foreground: #141312` and `--primary: #141312`, with utility mappings `.bg-brown` and `.text-brown` (value: `#141312`).
  - **Gold** (Accent highlights): `--accent: #C5A880` and `--ring: #C5A880`, with utility mapping `.text-accent-brown` (value: `#C5A880`).
  - **Taupe / Warm Brown**: `--secondary: #8B7355`, with utility mappings `.bg-taupe` and `.text-taupe` (value: `#8B7355`).
- **Typography (lines 109-115, 157-173)**:
  - **Display Font**: Playfair Display serif (`--font-playfair` in CSS / loaded in `src/app/layout.tsx`), configured via className `.font-display`.
  - **Body Font / Label Font**: Plus Jakarta Sans (`--font-sans` in CSS / loaded in `src/app/layout.tsx`), configured via className `.font-body` and `.font-label`.

### Testing Assessment

A search for `*test*` and `*spec*` files in the project workspace returned 0 results. No Vitest configuration file (e.g., `vitest.config.ts` or `vite.config.ts`) exists, and `package.json` contains no script to run tests. Vitest is listed in `devDependencies` (`"vitest": "^2.1.4"`), but the necessary dependencies for testing React components (like `@vitejs/plugin-react`, `@testing-library/react`, `@testing-library/jest-dom`, and `jsdom`) are not present in `package.json`.

---

## 2. Logic Chain

1.  **Testimonials Removal**: Because the agency is brand new and has no direct clients or completed projects yet (per `ORIGINAL_REQUEST.md`), any components making direct customer claims must be deleted. `TestimonialsSection.tsx` is the only component holding direct reviews. Deleting it and its import in `Home.tsx` ensures compliance.
2.  **Social Proof Removal**: `SocialProofBadges.tsx` contains metrics such as "Trusted by 50+ Brands", "47 completed projects", and "200+ stores launched" which represent fake claims. Since it is rendered in `ContactSection.tsx` on line 42, removing it from `ContactSection` ensures absolute adherence to the no-fake-claims rule.
3.  **Case Studies Transformation**: Since there are no real clients, the hardcoded data representing real projects (like Luxe Living, Artisan Goods, and Modern Spaces) in `CaseStudiesSection.tsx` and `CaseStudiesPage.tsx` must be converted. Rewriting these as "Industry Performance Reports" that focus on general industry benchmarks (using Vercel, Deloitte, Shopify, and Klaviyo metrics provided in the brief) satisfies R2 and R3.
4.  **Milestone Payment Schedule Alignment**: `MilestonePlan.tsx` currently outlines a 5-phase schedule (Weeks 1-10) with custom payment percentages (30/20/20/20/10), which conflicts with the 4-milestone plan outlined in `PricingSection.tsx` and the content brief (Kickoff 20%, Design 30%, Staging 30%, Launch 20%). Rewriting `MilestonePlan.tsx` to align exactly with the 4-phase kickoff/design/staging/launch percentages, incorporating the exact dollar values for each tier (Starter/Core/Full), and injecting the pull quote ensures consistency across the website.
5.  **Differentiators extended**: `WhyAethelon.tsx` contains 6 text differentiators but lacks the comparison table prescribed in the content brief. Modifying it to display the side-by-side comparison table (Generic Agency vs Aethelon) will fully fulfill the "Why Aethelon — Extended" requirement.
6.  **Timeline & Process Updates**: `ProcessSection.tsx` and `EngagementProcess.tsx` display generic step information. Updating these with specific milestones, duration details (e.g., "20-minute Zoom", "24 hours", "48 hours after signing"), and detail metrics aligns the copy with the brief.

---

## 3. Caveats

- **Routing Path**: The path to case studies page is defined as `/case-studies`. Rather than changing the Next.js App Router folder name to `/performance-reports` (which requires rewriting imports and links), it is assumed safer to keep the folder as `src/app/case-studies` but change all user-facing labels and headers to "Performance Reports" / "Industry Performance Reports".
- **Package Dependencies**: Setting up Vitest for React components will require running `pnpm install` to get `@testing-library/react` and `jsdom`. Since this is a read-only investigation, the testing dependencies are outlined in the implementation strategy and will need to be installed during the implementation phase.

---

## 4. Conclusion

The codebase is highly modular and ready to compile cleanly. The target update areas are localized to the components listed in the findings.
To update the site successfully, the implementation must:

1.  Completely purge `TestimonialsSection` and `SocialProofBadges` to remove fake clients.
2.  Add a new `LabShowcase.tsx` component to highlight the demo projects.
3.  Convert the `CaseStudiesSection` and `CaseStudiesPage` into feature-centric "Industry Performance Reports".
4.  Standardize the milestone pricing percentages, dollar amounts, and pull quote across `PricingSection.tsx` and `MilestonePlan.tsx`.
5.  Construct the Comparison Table in `WhyAethelon.tsx`.
6.  Update process sections (`ProcessSection.tsx`, `EngagementProcess.tsx`) and the FAQ sections with the specific copy from the brief.

---

## 5. Verification Method

To verify the changes once they are implemented:

1.  **TypeScript Check**: Run `pnpm check` (`tsc --noEmit`) to verify zero type errors.
2.  **Next.js Build Check**: Run `pnpm build` to verify the production compilation.
3.  **UI Inspect & Layout Checks**:
    - Inspect `/` and confirm `SocialProofBadges` and `TestimonialsSection` are absent.
    - Inspect `/case-studies` (Performance Reports) to verify that case studies are formatted as industry benchmark stats, referencing sources (Shopify, Deloitte, etc.) and utilising tabular numbers (`font-variant-numeric: tabular-nums`).
    - Check `/about` to ensure team member details and copy align with the brief.
    - Check `/retainer` and `/faq` to verify prices and answers align with the brief.
4.  **Automated Tests**:
    - After adding the test runner, run `pnpm test` to run the test suite and verify it passes.

---

# Proposed Implementation Strategy

To execute this update with zero friction, follow this phased approach:

### Phase 1: Test Setup (Vitest)

1.  **Install dependencies**:
    ```bash
    pnpm add -D @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom
    ```
2.  **Create `vitest.config.ts`**: Configure Vitest to use the `jsdom` environment and register React plugins and `@/*` aliases.
3.  **Add package scripts**:
    Add `"test": "vitest run"` and `"test:watch": "vitest"` to `package.json`.
4.  **Write initial sanity tests**: Write simple component render tests for `WhyAethelon.tsx` and `FAQSection.tsx`.

### Phase 2: Purge Testimonials & Social Proof

1.  **Delete File**: `src/components/TestimonialsSection.tsx`.
2.  **Remove imports**: Open `src/page-components/Home.tsx` and delete the import on line 13.
3.  **Remove Social Proof**: Remove `SocialProofBadges` import and element from `src/components/ContactSection.tsx`. Delete `src/components/SocialProofBadges.tsx`.

### Phase 3: Implement Aethelon Lab Showcase

1.  **Create `src/components/LabShowcase.tsx`**:
    Build a showcase card layout featuring:
    - **Minimalist Chair Configurator**: Metric: Target Load < 1.5s, Polygon budget < 10K.
    - **AR Sofa Showcase**: Metric: Target Load < 2.0s, Polygon budget < 15K.
    - Add a prominent note: _"Live URLs and interactive 3D mockups coming soon. Interactive models are currently under development in the Aethelon Lab."_
2.  **Import in Home**: Render `LabShowcase` inside `src/page-components/Home.tsx` (above `CaseStudiesSection`).

### Phase 4: Refactor Case Studies to Performance Reports

1.  **Refactor `CaseStudiesSection.tsx`**:
    - Rename internal headings to **Industry Performance Reports** / **Industry Benchmarks**.
    - Change the three reports to:
      1.  _Next.js Headless Frontends_: up to 70% faster loading (Source: Vercel Engineering, 2024), 1s delay reduces conversions by 7% (Google, 2024).
      2.  _3D & AR Product Previews_: 94% higher conversion rates (Shopify, 2025), 40% fewer returns (BrandXR, 2025).
      3.  _Lifecycle Automation & Cart Recovery_: 75% average abandonment rate (83% for furniture) (Baymard Institute, 2024/2025), recovers 10% lost revenue.
    - Format numbers with `.stat-number` or `font-variant-numeric: tabular-nums`.
2.  **Refactor `CaseStudiesPage.tsx`**:
    - Mirror the changes from the section into the standalone page layout.
3.  **Rename Navbar/Footer labels**: Update nav link label from "Case Studies" to "Performance Reports".

### Phase 5: Standardize Milestones & Pricing

1.  **Update `PricingSection.tsx`**:
    - Starter ($2,000, $400 deposit, $200/mo retainer)
    - Core ($4,000, $800 deposit, $300/mo retainer)
    - Full ($5,000, $1,000 deposit, $500/mo retainer)
    - Milestone Schedule at the bottom: Kickoff (20%), Design (30%), Staging (30%), Launch (20%), along with respective dollar values.
2.  **Refactor `MilestonePlan.tsx`**:
    - Convert the current 5-step roadmap into the 4-phase system: Kickoff (20%), Design Approval (30%), Staging Deploy (30%), and Launch (20%).
    - Incorporate the pricing breakdowns ($400/$800/$1,000 for Kickoff; $600/$1,200/$1,500 for Design; $600/$1,200/$1,500 for Staging; $400/$800/$1,000 for Launch) for each package tier.
    - Embed the pull quote in an editorial block: _"You start with $400. You only pay the next installment after you've approved what was built..."_

### Phase 6: Differentiators & Workflow Copy Updates

1.  **Extend `WhyAethelon.tsx`**:
    - Build a side-by-side comparison table (Generic Agency vs Aethelon) listing the features from the brief (niche specialty, custom headless vs templates, AR/3D core vs expensive add-ons, 20% deposit vs 50% upfront, etc.).
2.  **Update Process Sections**:
    - Update descriptions in `ProcessSection.tsx` and `EngagementProcess.tsx` with specific timings: step 1 (20 min), step 2 (24 hours), step 3 (48 hours after signing).
3.  **Update FAQ Section & Page**:
    - Verify all questions are present and statistics/claims are corrected to match the brief (including removing client references).

### Phase 7: Validation

1.  Run `pnpm format` to format code.
2.  Run `pnpm check` to ensure zero type errors.
3.  Run `pnpm build` to compile successfully.
4.  Run unit tests `pnpm test`.
