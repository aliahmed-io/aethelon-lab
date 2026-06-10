import { test, expect } from "@playwright/test";

test.describe("Aethelon Site E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  // 1. Purged testimonials
  test("should not show testimonials", async ({ page }) => {
    const heading = page.locator("text=What Our Clients Say");
    await expect(heading).not.toBeVisible();

    // Check that testimonial authors or quotes are not present
    await expect(page.locator("text=Sarah Chen")).not.toBeVisible();
    await expect(page.locator("text=Marcus Johnson")).not.toBeVisible();
  });

  // 2. No fake client claims (SocialProofBadges removed)
  test("should not show social proof badges or fake client claims", async ({
    page,
  }) => {
    await expect(
      page.locator("text=Trusted by 50+ Furniture Brands")
    ).not.toBeVisible();
    await expect(
      page.locator("text=4.9/5 Average Client Rating")
    ).not.toBeVisible();
    await expect(page.locator("text=200+ Stores Launched")).not.toBeVisible();
  });

  // 3. Lab Showcase
  test("should display the Aethelon Lab showcase with placeholder projects and coming-soon notes", async ({
    page,
  }) => {
    const labHeading = page
      .locator("text=/Aethelon Lab|Demo Projects/i")
      .first();
    await expect(labHeading).toBeVisible();

    const comingSoon = page.locator("text=/coming soon|coming-soon/i").first();
    await expect(comingSoon).toBeVisible();
  });

  // 4. Industry Performance Reports
  test("should display industry benchmark reports with sources and tabular numbers", async ({
    page,
  }) => {
    // Benchmark reports for Vercel, Shopify, Klaviyo, Django
    await expect(page.locator("text=Vercel").first()).toBeVisible();
    await expect(page.locator("text=Shopify").first()).toBeVisible();
    await expect(page.locator("text=Klaviyo").first()).toBeVisible();
    await expect(page.locator("text=Django").first()).toBeVisible();

    // Source citation
    const source = page.locator("text=/source:|cited:/i").first();
    await expect(source).toBeVisible();
  });

  // 5. Milestone Payment System
  test("should verify the 4-milestone plan, tier pricing, and pull quote", async ({
    page,
  }) => {
    // Check milestone labels and percentages
    await expect(page.locator("text=Kickoff").first()).toBeVisible();
    await expect(page.locator("text=20%").first()).toBeVisible();
    await expect(page.locator("text=Design").first()).toBeVisible();
    await expect(page.locator("text=30%").first()).toBeVisible();

    // Check tier pricing values
    await expect(page.locator("text=$2,500").first()).toBeVisible();
    await expect(page.locator("text=$4,500").first()).toBeVisible();
    await expect(page.locator("text=$6,000").first()).toBeVisible();
    await expect(page.locator("text=$10,000+").first()).toBeVisible();

    // Verify pull quote
    const pullQuote = page
      .locator(
        "text=/You start with 20%\\. You only pay the next installment/i"
      )
      .first();
    await expect(pullQuote).toBeVisible();
  });

  // 6. Process & Timelines
  test("should verify the 6-step workflow with correct timings", async ({
    page,
  }) => {
    await expect(page.locator("text=20-minute Zoom").first()).toBeVisible();
    await expect(page.locator("text=24 hours").first()).toBeVisible();
    await expect(page.locator("text=48 hours").first()).toBeVisible();
  });

  // 7. Pricing Tiers & FAQ
  test("should verify pricing tiers and FAQ text", async ({ page }) => {
    await expect(
      page.locator("text=Do I need to be on Shopify?").first()
    ).toBeVisible();
    await expect(
      page.locator("text=What if I don't need AR/3D?").first()
    ).toBeVisible();
  });
});
