"use client";

import Navbar from "@/components/Navbar";
import AboutUsPage from "@/components/AboutUsPage";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F6F2]">
      <Navbar />
      <AboutUsPage />
      <Footer />
    </div>
  );
}
