import React from "react";
import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react";

const problems = [
    {
        icon: Clock,
        title: "Time-Consuming Manual Tasks",
        description: "Your team spends hours on repetitive work that could be automated, leaving less time for strategic initiatives."
    },
    {
        icon: DollarSign,
        title: "Rising Operational Costs",
        description: "Scaling your business means hiring more people for tasks that software could handle more efficiently."
    },
    {
        icon: AlertTriangle,
        title: "Error-Prone Processes",
        description: "Manual workflows lead to inconsistencies and mistakes that cost time and money to correct."
    },
    {
        icon: Users,
        title: "Difficulty Scaling",
        description: "Growth is limited by how fast you can hire and train, not by market demand or opportunity."
    }
];

export const ProblemSection = () => {
    return (
        <section className="py-20 px-4 bg-slate-50">
            <div className="w-full max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
                        The Problem
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                        Growing Pains That Hold You Back
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Most businesses hit a wall when manual processes can't keep up with growth.
                        Sound familiar?
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {problems.map((problem, index) => {
                        const IconComponent = problem.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <IconComponent className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                            {problem.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {problem.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
