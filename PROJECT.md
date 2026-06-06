# Project: Aethelon Headless Ecommerce Agency Website Update

## Architecture

- **Framework**: Next.js 16 (App Router) with TypeScript, Tailwind CSS, Radix UI, and Framer Motion.
- **Data Flow**: Static marketing pages displaying structured pricing, process, features, and showcase components. All pricing and statistics are statically defined in components and page layouts.
- **Shared Interfaces**: React components in `src/components/` imported and rendered in page components (`src/page-components/`) and app routes (`src/app/`).
- **Design Tokens**: Palette (Sand, Obsidian, Gold) defined as CSS variables in `src/app/globals.css` and applied via Tailwind utility classes.

## Code Layout

- **App Routes**: `src/app/` (e.g., `src/app/page.tsx`, `src/app/case-studies/page.tsx`, `src/app/retainer/page.tsx`, `src/app/faq/page.tsx`)
- **Main Home Page**: `src/page-components/Home.tsx`
- **Components**: `src/components/`
- **Global CSS & Tokens**: `src/app/globals.css`
- **Configuration**: `package.json`, `tailwind.config.ts`, `tsconfig.json`

## Milestones

| #   | Name                              | Scope                                                                                                                                  | Dependencies       | Status  |
| --- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| M1  | E2E Testing Track                 | Set up test framework (Vitest/Playwright), implement comprehensive requirement-driven test cases (Tiers 1-4), publish `TEST_READY.md`. | None               | DONE |
| M2  | Purge Testimonials & Social Proof | Delete `TestimonialsSection.tsx`, remove client-specific reviews and fake social proof badges from `ContactSection.tsx`.               | M1                 | DONE |
| M3  | Aethelon Lab Showcase             | Create and integrate `LabShowcase.tsx` highlighting mock demo projects (Minimalist Chair Configurator, AR Sofa Showcase) and metrics.  | M1                 | DONE |
| M4  | Industry Performance Reports      | Convert case studies components and pages into industry-wide feature-performance reports using Vercel, Shopify, Deloitte benchmarks.   | M1                 | DONE |
| M5  | Milestone Payment System          | Refactor `MilestonePlan.tsx` and `PricingSection.tsx` to align on 4 payment milestones, pricing tiers, and the pull quote.             | M1                 | DONE |
| M6  | Differentiators & Process Copy    | Add Generic vs Aethelon Comparison Table to `WhyAethelon.tsx`, update step timelines/FAQ copy with specific brief values.              | M1                 | DONE |
| M7  | Integration & Validation          | Verify 100% test suite pass, run build/check clean sweeps, and execute the final Forensic Audit.                                       | M2, M3, M4, M5, M6 | DONE |

## Interface Contracts

### Components ↔ Pages

- All updated sections and new components (e.g. `LabShowcase`) must export a default React Component with no required props, ensuring they can be drop-in replaced inside page files.
- Font styling must follow the Sand/Obsidian/Gold styling using Tailwind utility classes.
- Tabular numbers must use `font-variant-numeric: tabular-nums` or the `tabular-nums` Tailwind utility.
