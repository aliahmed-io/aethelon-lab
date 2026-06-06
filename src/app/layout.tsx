import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aethelon — Headless Ecommerce Agency",
  description:
    "Aethelon builds award-winning headless and custom ecommerce experiences with AR/3D, AI commerce intelligence, and lifecycle automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sans.variable} antialiased font-sans bg-[#F8F6F2] text-[#141312] relative`}
      >
        {/* Global Paper Grain Texture Overlay */}
        <svg
          className="pointer-events-none fixed inset-0 w-full h-full opacity-[0.03] z-[9999] mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
