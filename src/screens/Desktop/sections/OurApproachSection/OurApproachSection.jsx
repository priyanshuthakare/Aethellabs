import React from "react";
import { Ear, Search, Wrench, TrendingUp } from "lucide-react";

const approachSteps = [
    {
        number: "01",
        title: "Listen First",
        description: "We start by listening—to how your team works, where time gets lost, and what goals truly matter. Every automation begins with understanding.",
        icon: Ear,
    },
    {
        number: "02",
        title: "Discover the Gaps",
        description: "We identify silent inefficiencies that slow things down and explore how AI can quietly step in to simplify, not complicate.",
        icon: Search,
    },
    {
        number: "03",
        title: "Make It Work",
        description: "We build automations designed to fit naturally into how you already work. Simple and practical.",
        icon: Wrench,
    },
    {
        number: "04",
        title: "Keep Improving",
        description: "Things change, and so should your systems. We stick around to tweak, refine, and grow your automations as your team grows.",
        icon: TrendingUp,
    },
];

export const OurApproachSection = () => {
    return (
        <section id="approach" className="py-20 px-4 bg-white">
            <div className="w-full max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-slate-800">Our </span>
                        <span className="text-emerald-500">Approach</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        A proven methodology that ensures successful AI implementation
                        from concept to deployment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {approachSteps.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
                            <div
                                key={index}
                                className="relative bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
                            >
                                {/* Step number badge */}
                                <div className="absolute -top-4 left-6 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                    {step.number}
                                </div>

                                <div className="mt-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                        <IconComponent className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

