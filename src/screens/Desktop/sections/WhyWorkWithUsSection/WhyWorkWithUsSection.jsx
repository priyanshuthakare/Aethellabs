import React from "react";
import { Zap, MessageCircle, Target, Sparkles, Eye, HeadphonesIcon } from "lucide-react";

const benefits = [
    {
        icon: Zap,
        title: "Fast",
        description: "We deliver solutions swiftly and iteratively to slash your time to value and get you moving faster."
    },
    {
        icon: MessageCircle,
        title: "Friendly",
        description: "Our team brings a collaborative, approachable style, making complex feel simple and stress-free."
    },
    {
        icon: Target,
        title: "Focused",
        description: "We won't over engineer a solution and overwhelm you with complexity. We stay on point with you in control."
    },
    {
        icon: Sparkles,
        title: "Flexible",
        description: "From start to finish, we adapt to your goals, timeline, and constraints with dynamism that maximises your agility."
    },
    {
        icon: Eye,
        title: "Clear",
        description: "We've eliminated jargon and explain everything simply and transparently so you're always in the loop."
    },
    {
        icon: HeadphonesIcon,
        title: "Committed",
        description: "We don't disappear after deployment. We can – and would love to – monitor, support and optimise your technology long-term."
    }
];

export const WhyWorkWithUsSection = () => {
    return (
        <section id="why-us" className="py-20 px-4 bg-white">
            <div className="w-full max-w-[1200px] mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why work with <span className="text-aethel-500">Aethel Labs?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        It's not just what we help you achieve, it is about how we will work with you
                        to make your technology journey easy and your engagement fun and fulfilling.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-gray-50 hover:bg-white rounded-2xl p-8 border border-gray-100 hover:border-aethel-200 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-aethel-500 group-hover:bg-aethel-600 rounded-xl flex items-center justify-center mb-6 transition-colors">
                                    <IconComponent className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyWorkWithUsSection;
