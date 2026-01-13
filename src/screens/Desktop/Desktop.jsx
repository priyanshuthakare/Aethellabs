import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { UseCasesSection } from "./sections/UseCasesSection/UseCasesSection";
import { ServicesSection } from "./sections/ServicesSection";
import { JourneySection } from "./sections/JourneySection/JourneySection";
import { WhyWorkWithUsSection } from "./sections/WhyWorkWithUsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { SecuritySection } from "./sections/SecuritySection/SecuritySection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { Footer } from "./sections/Footer/Footer";

export const Desktop = () => {
    return (
        <div className="flex flex-col w-full bg-white overflow-hidden relative">
            {/* Blue glow wrapper effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -left-1/4 top-[20%] w-1/2 h-1/3 bg-aethel-500/5 rounded-full blur-3xl" />
                <div className="absolute -right-1/4 top-[50%] w-1/2 h-1/3 bg-aethel-500/5 rounded-full blur-3xl" />
            </div>

            {/* Main Content */}
            <main className="relative z-10">
                <HeroSection />
                <UseCasesSection />
                <ServicesSection />
                <JourneySection />
                <WhyWorkWithUsSection />
                <TestimonialsSection />
                <SecuritySection />
                <ContactUsSection />
            </main>

            <Footer />
        </div>
    );
};

export default Desktop;
