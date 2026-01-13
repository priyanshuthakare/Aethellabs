import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Lightbulb, Pencil, Code, Rocket, TrendingUp, HeadphonesIcon } from "lucide-react";

const journeySteps = [
    {
        icon: Lightbulb,
        title: "Distill",
        subtitle: "what matters the most",
        description: "We start by understanding your unique challenges, goals, and current processes to identify the highest-impact opportunities."
    },
    {
        icon: Pencil,
        title: "Architect",
        subtitle: "an effective design",
        description: "We create a detailed blueprint for your automation solution, ensuring it fits seamlessly into your existing operations."
    },
    {
        icon: Code,
        title: "Develop",
        subtitle: "your custom solution",
        description: "Our team builds and configures your automation with precision, testing thoroughly at every stage."
    },
    {
        icon: Rocket,
        title: "Equip",
        subtitle: "your people for success",
        description: "We train your team and provide comprehensive documentation so everyone can leverage the new systems effectively."
    },
    {
        icon: TrendingUp,
        title: "Adapt",
        subtitle: "and optimise your systems",
        description: "We continuously monitor performance and refine your automation to keep pace with your evolving needs."
    },
    {
        icon: HeadphonesIcon,
        title: "Catch",
        subtitle: "and solve issues quickly",
        description: "Our support team is always ready to troubleshoot and resolve any challenges that arise along the way."
    }
];

export const JourneySection = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 bg-aethel-gradient relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute -left-40 top-1/2 w-80 h-80 bg-aethel-500/20 rounded-full blur-3xl" />
            <div className="absolute -right-40 bottom-0 w-80 h-80 bg-aethel-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
                {/* Heading */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Help for your whole<br />
                            <span className="text-white/90">AI Automation journey</span>
                        </h2>
                        <p className="text-lg text-white/80 max-w-xl">
                            From initial discovery through to ongoing support, maintenance and optimisation –
                            we can help you with AI automation solutions that unlock growth and operational excellence.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {journeySteps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[320px] bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors group"
                            >
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <IconComponent className="w-7 h-7 text-aethel-500" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1">{step.title}</h3>
                                <p className="text-lg text-white/70 mb-4">{step.subtitle}</p>
                                <p className="text-white/60 leading-relaxed text-sm">{step.description}</p>

                                <button className="mt-6 inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors">
                                    Speak with someone
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
