import React from 'react';
import HeroSection from '../sections/HeroSection';
import CompanyIntroSection from '../sections/CompanyIntroSection';
import ServicesPreviewSection from '../sections/ServicesPreviewSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import StatisticsSection from '../sections/StatisticsSection';
import ContactCTASection from '../sections/ContactCTASection';

export default function Home() {
  return (
    <div className="relative">
      {/* 1. Hero section with industrial headline */}
      <HeroSection />

      {/* 2. Company introduction */}
      <CompanyIntroSection />

      {/* 3. Services preview with glass cards */}
      <ServicesPreviewSection />

      {/* 4. Why choose SRA Industries */}
      <WhyChooseUsSection />

      {/* 5. Company statistics & verifiable engineering benchmarks */}
      <StatisticsSection />

      {/* 6. Contact call-to-action */}
      <ContactCTASection />
    </div>
  );
}
