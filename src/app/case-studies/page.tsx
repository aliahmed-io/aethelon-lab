"use client";

import Navbar from "@/components/Navbar";
import CaseStudiesPage from "@/components/CaseStudiesPage";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F6F2]">
      <Navbar />
      <CaseStudiesPage />
      <Footer />
    </div>
  );
}
