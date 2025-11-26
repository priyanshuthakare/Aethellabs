import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { HeroSection } from "./sections/HeroSection";
import { OurApproachSection } from "./sections/OurApproachSection";
import { ServicesSection } from "./sections/ServicesSection";
import { SliderSection } from "./sections/SliderSection";
import { Footer } from "./sections/Footer/Footer";

export const Desktop = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-black overflow-hidden">
      <HeroSection />

      {/* Main Content Container */}
      <SliderSection />
      <AboutUsSection />
      <ServicesSection />
      <OurApproachSection />
      <ContactUsSection />

      <Footer />
    </div>
  );
};
