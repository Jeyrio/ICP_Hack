"use client";

import { useState, useEffect } from "react";
import FallingLogos from "@/components/Landing/FallingLogos";
import Navigation from "@/components/Layout/Navigation";
import HeroSection from "@/components/Landing/HeroSection";
import FeaturesSection from "@/components/Landing/FeaturesSection";
import StorySection from "@/components/Landing/StorySection";
import TechnologySection from "@/components/Landing/TechnologySection";
import CTASection from "@/components/Landing/CTASection";
import Footer from "@/components/Layout/Footer";

export default function LandingPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after delay
    setTimeout(() => setShowContent(true), 800);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <FallingLogos />
      <Navigation />
      <HeroSection showContent={showContent} />
      <FeaturesSection />
      <StorySection />
      <TechnologySection />
      <CTASection />
      <Footer />
    </div>
  );
}