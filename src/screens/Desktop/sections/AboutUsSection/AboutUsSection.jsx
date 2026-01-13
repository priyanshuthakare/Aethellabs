import React from "react";

const contentBlocks = [
    {
        type: "highlight",
        text: "It began with a simple thought: why do we spend so much time on things that don't really need us?",
    },
    {
        type: "normal",
        text: "That question brought the four of us together. Different skills, same mindset—we wanted to make work feel lighter and more meaningful.",
    },
    {
        type: "highlight",
        content: (
            <>
                <span className="text-slate-700">At </span>
                <span className="font-bold text-emerald-600">Aethel Labs</span>
                <span className="text-slate-700">
                    , we build AI-powered automation that takes care of the repetitive
                    stuff, so people can focus on the work that actually matters—
                    creating, growing, and leading.
                </span>
            </>
        ),
    },
    {
        type: "normal",
        text: "We're not a typical agency chasing trends. We're a team that believes the future belongs to those who learn how to automate the boring parts and think on a higher level.",
    },
];

export const AboutUsSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-white">
            <div className="w-full max-w-[900px] mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    <span className="text-slate-800">About </span>
                    <span className="text-emerald-500">Us</span>
                </h2>

                <div className="flex flex-col gap-5">
                    {contentBlocks.map((block, index) => (
                        <div
                            key={index}
                            className={`rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-md ${block.type === "highlight"
                                    ? "bg-emerald-50 border border-emerald-200"
                                    : "bg-slate-50 border border-slate-200"
                                }`}
                        >
                            <p className="text-lg text-slate-700 text-center leading-relaxed">
                                {block.content || block.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

