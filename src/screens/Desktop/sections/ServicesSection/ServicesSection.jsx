import React, { useState } from "react";
import { ChevronRight, Link2, Zap, Brain, Database, FileText, Code2 } from "lucide-react";

const expertiseData = [
    {
        id: "integration",
        title: "Software Integration",
        icon: Link2,
        heading: "Unify Your Software",
        description: "Sync your software to eliminate silos and boost productivity. Seamless integrations deliver real-time data flow, streamlined workflows, and scalable solutions, freeing you from manual workarounds and enhancing decision-making.",
        features: [
            "Real-time data synchronization",
            "API development & management",
            "Legacy system modernization",
            "Cross-platform connectivity"
        ]
    },
    {
        id: "automation",
        title: "Process Automation",
        icon: Zap,
        heading: "Banish Busywork",
        description: "Automate repetitive tasks to save time and reduce errors. Scalable workflows across all of your tools, streamlining operations and empowering your team to focus on high-value work with effortless efficiency.",
        features: [
            "Workflow automation design",
            "Task scheduling & triggers",
            "Error handling & recovery",
            "Process monitoring dashboards"
        ]
    },
    {
        id: "ai",
        title: "AI Integration",
        icon: Brain,
        heading: "Harness AI Power",
        description: "Embed AI into your workflows for sharper decisions and exponential output. Systematic AI integration delivers consistent, scalable results, enhancing productivity whilst centralising governance and optimisation efforts.",
        features: [
            "Custom AI model deployment",
            "Intelligent document processing",
            "Predictive analytics",
            "Natural language automation"
        ]
    },
    {
        id: "data",
        title: "Data Strategy",
        icon: Database,
        heading: "Master Your Data",
        description: "Centralise, clean and enrich your data to fuel your people, automations and AI agent force. Scalable data strategies ensure secure, real-time access, integrating with your systems to drive smarter decisions.",
        features: [
            "Data warehouse design",
            "ETL pipeline development",
            "Data quality management",
            "Business intelligence setup"
        ]
    },
    {
        id: "document",
        title: "Document Automation",
        icon: FileText,
        heading: "Streamline Your Docs",
        description: "Automate document creation and extraction. Generate custom docs and extract data from scans, cutting admin time, boosting accuracy, and integrating doc flows with your systems for seamless output.",
        features: [
            "Automated document generation",
            "OCR & data extraction",
            "Template management",
            "Digital signature integration"
        ]
    },
    {
        id: "nocode",
        title: "Nocode Development",
        icon: Code2,
        heading: "Build Custom Apps Faster",
        description: "Create custom tools without coding, replacing spreadsheets with scalable apps. Rapid, flexible and scalable solutions integrate with your tech stack, streamline processes and accelerating productivity with ease.",
        features: [
            "Custom app development",
            "Internal tool building",
            "Database applications",
            "Workflow portals"
        ]
    }
];

export const ServicesSection = () => {
    const [activeTab, setActiveTab] = useState("integration");
    const activeExpertise = expertiseData.find(e => e.id === activeTab);
    const ActiveIcon = activeExpertise?.icon || Link2;

    return (
        <section id="services" className="py-20 px-4 bg-gray-50">
            <div className="w-full max-w-[1200px] mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Areas of <span className="text-aethel-500">Expertise</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        With best-in-class tools in pragmatic and experienced hands, we build and
                        optimise your solution faster than most could scope it.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {expertiseData.map((expertise) => {
                        const Icon = expertise.icon;
                        return (
                            <button
                                key={expertise.id}
                                onClick={() => setActiveTab(expertise.id)}
                                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all duration-200 ${activeTab === expertise.id
                                        ? 'bg-navy-900 text-white shadow-lg'
                                        : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {expertise.title}
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-soft overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left: Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="w-14 h-14 bg-aethel-500 rounded-xl flex items-center justify-center mb-6">
                                <ActiveIcon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {activeExpertise?.heading}
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                {activeExpertise?.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8">
                                {activeExpertise?.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-5 h-5 rounded-full bg-aethel-100 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-aethel-500" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Links */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex items-center gap-2 text-aethel-500 hover:text-aethel-600 font-semibold transition-colors">
                                    Learn how we help you
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                                <button className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors">
                                    View recent work
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Right: Visual */}
                        <div className="bg-gradient-to-br from-aethel-50 to-aethel-100 p-8 lg:p-12 flex items-center justify-center min-h-[400px]">
                            <div className="relative w-full max-w-md">
                                {/* Decorative elements */}
                                <div className="absolute inset-0 bg-aethel-gradient rounded-3xl opacity-10 blur-2xl transform rotate-6" />

                                {/* Main Visual */}
                                <div className="relative bg-white rounded-2xl shadow-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-aethel-500 rounded-lg flex items-center justify-center">
                                            <ActiveIcon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{activeExpertise?.title}</div>
                                            <div className="text-sm text-gray-500">Aethel Labs</div>
                                        </div>
                                    </div>

                                    {/* Progress bars */}
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-600">Efficiency Gain</span>
                                                <span className="font-semibold text-aethel-500">85%</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-aethel-500 rounded-full w-[85%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-600">Time Saved</span>
                                                <span className="font-semibold text-aethel-500">72%</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-aethel-400 rounded-full w-[72%]" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-600">Error Reduction</span>
                                                <span className="font-semibold text-aethel-500">94%</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-aethel-300 rounded-full w-[94%]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
