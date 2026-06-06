# E2E Test Suite Ready

The testing frameworks for both component/unit testing (Vitest) and end-to-end integration testing (Playwright) are fully installed, configured, and verified. The test suites target the key updates for the Aethelon ecommerce agency website.

## Test Runner Commands

### Unit & Component Tests (Vitest)

```bash
pnpm test
```

To run tests in watch mode:

```bash
pnpm test:watch
```

### End-to-End Tests (Playwright)

```bash
pnpm test:e2e
```

---

## Coverage Summary (Tiers 1-4 Count)

We have organized the test cases into 4 strategic tiers ranging from smoke testing to integration and negative verification.

| Tier       | Category                              | Description                                                                                                    | Vitest Unit Tests | Playwright E2E Tests |
| ---------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------- | :---------------: | :------------------: |
| **Tier 1** | **Critical Smoke & Render**           | Verifies basic component/page loading and DOM safety.                                                          |         1         |          1           |
| **Tier 2** | **Functional Regression (Text/Copy)** | Validates workflow process timelines, pricing tiers, and FAQ content.                                          |         2         |          2           |
| **Tier 3** | **Compliance & Integrity (Negative)** | Ensures all direct client testimonials and fake social proof badges are fully purged.                          |         2         |          2           |
| **Tier 4** | **E2E Feature Integration**           | Verifies detailed calculations (Milestone payments), Lab Showcase existence, and Benchmark report data points. |         2         |          2           |
| **Total**  |                                       |                                                                                                                |       **7**       |        **7**         |

---

## Feature Checklist

Below is the verification checklist mapping directly to the requirement brief. All test suites contain matching assertions for each item:

- [ ] **Purged Testimonials**
  - [ ] Assert that the section heading `What Our Clients Say` is not in the DOM.
  - [ ] Assert that hardcoded customer quotes are not present.
  - [ ] Assert that mock client names (e.g. `Sarah Chen`, `Marcus Johnson`) are not present.
- [ ] **No Fake Client Claims**
  - [ ] Assert that `SocialProofBadges` is removed.
  - [ ] Assert that generic metrics (`Trusted by 50+ Furniture Brands`, `4.9/5 Average Client Rating`, `200+ Stores Launched`) are not present.
- [ ] **Aethelon Lab Showcase**
  - [ ] Assert that "Aethelon Lab" or "Demo Projects" section exists.
  - [ ] Assert that "coming soon" or "coming-soon" notes are displayed next to demo placeholders.
- [ ] **Industry Performance Reports**
  - [ ] Assert case study elements are converted to benchmark reports for Vercel, Shopify, Klaviyo, and Django.
  - [ ] Assert that benchmark statistics cite correct sources (e.g., Vercel Engineering, Shopify, BrandXR, Deloitte, Baymard Institute, Klaviyo, IBM, Forrester, HubSpot, WordStream, Endor Labs, CSA).
  - [ ] Assert that reports display tabular numbers (`font-variant-numeric: tabular-nums`).
- [ ] **Milestone Payment System**
  - [ ] Assert that the 4-milestone plan is defined (Kickoff 20%, Design 30%, Staging 30%, Launch 20%).
  - [ ] Assert that exact pricing values match the Starter ($400 kickoff), Core ($800 kickoff), and Full ($1,000 kickoff) tiers.
  - [ ] Assert that the pull quote ("You start with 20% / $400. You only pay the next installment after you've approved...") is correctly formatted and displayed.
- [ ] **Process & Timelines**
  - [ ] Assert that the workflow displays correct durations: 20-minute Zoom (Discovery), 24 hours (Proposal & Scope), and 48 hours after signing (Kickoff).
- [ ] **Pricing Tiers & FAQ**
  - [ ] Assert that pricing values are accurate for all packages.
  - [ ] Assert that FAQs include crucial questions: "Do I need to be on Shopify?" and "What if I don't need AR/3D?".
