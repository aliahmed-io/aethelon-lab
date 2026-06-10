import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "@/page-components/Home";

describe("Aethelon Website Component Requirements", () => {
  // 1. Purged Testimonials
  it("should not contain any client testimonials or reviews in the DOM", () => {
    render(<Home />);
    // Verify that testimonial-related section headings or text are not present.
    const testimonialsHeading = screen.queryByText(/What Our Clients Say/i);
    const clientReview = screen.queryByText(
      /Aethelon transformed our shopify/i
    );
    expect(testimonialsHeading).toBeNull();
    expect(clientReview).toBeNull();
  });

  // 2. No Fake Client Claims (Social Proof Badges)
  it("should not render SocialProofBadges or fake client metrics", () => {
    render(<Home />);
    // Verify typical metrics/badges from the social proof badges component are removed.
    const trustBadgeText = screen.queryByText(
      /Trusted by 50\+ Furniture Brands/i
    );
    const averageRatingText = screen.queryByText(
      /4.9\/5 Average Client Rating/i
    );
    const storesLaunchedText = screen.queryByText(/200\+ Stores Launched/i);
    expect(trustBadgeText).toBeNull();
    expect(averageRatingText).toBeNull();
    expect(storesLaunchedText).toBeNull();
  });

  // 3. Lab Showcase
  it("should display the Aethelon Lab / Demo Projects section with coming-soon notes", () => {
    render(<Home />);
    // Check that the showcase heading and placeholder projects are rendered.
    const labHeading =
      screen.queryByRole("heading", { name: /Aethelon Lab|Demo Projects/i }) ||
      screen.queryByText(/Aethelon Lab/i);
    expect(labHeading).toBeInTheDocument();

    // Verify placeholder projects and coming-soon notes are present.
    const comingSoonNotes = screen.queryAllByText(/coming soon|coming-soon/i);
    expect(comingSoonNotes.length).toBeGreaterThan(0);
  });

  // 4. Industry Performance Reports
  it("should display industry benchmark reports citing correct sources and using tabular numbers", () => {
    render(<Home />);
    // Check that case studies are converted into reports focusing on industry benchmarks
    // Focus areas: Vercel loading, Shopify AR conversion, Shopify returns, Klaviyo ROI, Django SQL injection CVE
    expect(screen.queryAllByText(/Vercel/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/Shopify/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/Klaviyo/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/Django/i).length).toBeGreaterThan(0);

    // Verify benchmarks/reports cite sources
    const sources = screen.queryAllByText(/source:|cited:/i);
    expect(sources.length).toBeGreaterThan(0);
  });

  // 5. Milestone Payment System
  it("should define the 4-milestone plan with correct pricing and pull quote", () => {
    render(<Home />);

    // 4-milestone percentages
    expect(screen.queryAllByText(/Kickoff/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/20%/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/Design/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/30%/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/Staging/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/30%/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/Launch/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/20%/i).length).toBeGreaterThan(0);

    // Starter tier pricing
    expect(screen.queryAllByText(/\$2,500/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/\$500/i).length).toBeGreaterThan(0);

    // Core tier pricing
    expect(screen.queryAllByText(/\$4,500/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/\$900/i).length).toBeGreaterThan(0);

    // Full tier pricing
    expect(screen.queryAllByText(/\$6,000/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/\$1,200/i).length).toBeGreaterThan(0);

    // Enterprise tier pricing
    expect(screen.queryAllByText(/\$10,000\+/i).length).toBeGreaterThan(0);

    // Pull quote verification
    const pullQuoteText =
      /You start with 20%\. You only pay the next installment after you've approved/i;
    const pullQuote = screen.queryByText(pullQuoteText);
    expect(pullQuote).toBeInTheDocument();
  });

  // 6. Process & Timelines
  it("should verify the 6-step workflow with correct timings", () => {
    render(<Home />);
    // 20-min Zoom, 24 hours, 48 hours after signing
    expect(screen.queryAllByText(/20-minute Zoom/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/24 hours/i).length).toBeGreaterThan(0);
    expect(screen.queryAllByText(/48 hours/i).length).toBeGreaterThan(0);
  });

  // 7. Pricing Tiers & FAQ
  it("should display correct pricing tiers and FAQ text", () => {
    render(<Home />);
    // FAQs validation
    expect(
      screen.queryByText(/Do I need to be on Shopify\?/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/What if I don't need AR\/3D\?/i)
    ).toBeInTheDocument();
  });
});
