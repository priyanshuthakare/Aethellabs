import React from "react";
import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

const securityFeatures = [
    {
        icon: Shield,
        title: "Security Governance",
        description: "We ensure a robust security governance framework by implementing strict access controls and continuous monitoring to protect data integrity and maintain regulatory adherence."
    },
    {
        icon: Lock,
        title: "GDPR Compliant",
        description: "Adhering to GDPR and using industry best practices such as CyberEssentials, we ensure secure data handling and user control over confidential information."
    },
    {
        icon: Eye,
        title: "Real-time Monitoring",
        description: "Through real-time monitoring, we make sure you always know what's happening on your accounts, from which apps are connected, to how well your automation is performing."
    }
];

const trustBadges = [
    "ISO 27001 Ready",
    "GDPR Compliant",
    "Cyber Essentials",
    "SOC 2 Type II"
];

export const SecuritySection = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="w-full max-w-[1200px] mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Secure, reliable, and{" "}
                        <span className="text-aethel-500">compliant. Always.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Confidentiality and your data security are central to our ways of working.
                        Information security governance is baked into the DNA of our service delivery practices.
                    </p>
                </div>

                {/* Center Visual */}
                <div className="flex justify-center mb-16">
                    <div className="relative">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-aethel-gradient rounded-full blur-3xl opacity-20 scale-150" />

                        {/* Shield Visual */}
                        <div className="relative w-48 h-48 bg-gradient-to-br from-aethel-500 to-navy-900 rounded-full flex items-center justify-center shadow-aethel-lg">
                            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                                <Shield className="w-16 h-16 text-aethel-500" />
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float">
                                <Lock className="w-8 h-8 text-aethel-500" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float animation-delay-500">
                                <Eye className="w-8 h-8 text-aethel-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {securityFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-aethel-200 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-aethel-500 rounded-xl flex items-center justify-center mb-4">
                                    <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {trustBadges.map((badge, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium"
                        >
                            <CheckCircle className="w-4 h-4 text-aethel-500" />
                            {badge}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
