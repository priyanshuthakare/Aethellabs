import React from "react";
import { Navbar } from "../../../../components/Navbar";
import {
    ChevronRight,
    Sparkles,
    Check,
    ArrowRight,
    Users,
    Star,
    Shield,
    Zap,
    TrendingUp,
    Clock,
    CheckCircle2,
    Play
} from "lucide-react";

// Animated Background Orbs
const BackgroundOrbs = () => (
    <>
        {/* Large floating orbs */}
        <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] bg-aethel-400/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -right-32 top-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse animation-delay-500" />
        <div className="absolute left-1/3 -bottom-20 w-[300px] h-[300px] bg-aethel-500/20 rounded-full blur-[80px] animate-pulse animation-delay-1000" />

        {/* Subtle grid pattern overlay */}
        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }}
        />
    </>
);

// Avatar Stack Component with hover effect
const AvatarStack = () => {
    const avatars = [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    ];

    return (
        <div className="flex -space-x-3">
            {avatars.map((avatar, i) => (
                <img
                    key={i}
                    src={avatar}
                    alt={`Team member ${i + 1}`}
                    className="w-10 h-10 rounded-full border-[3px] border-white object-cover shadow-lg hover:scale-110 hover:z-10 transition-transform duration-200"
                />
            ))}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aethel-500 to-aethel-600 border-[3px] border-white flex items-center justify-center text-white text-xs font-bold shadow-lg">
                +17
            </div>
        </div>
    );
};

// Enhanced Glass Card: Project Tracker
const ProjectTrackerCard = () => (
    <div className="relative group">
        {/* Glow effect behind card */}
        <div className="absolute -inset-1 bg-gradient-to-r from-aethel-500/40 to-purple-500/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative glass rounded-3xl p-6 shadow-2xl w-[340px] border border-white/20 backdrop-blur-xl animate-float">
            <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-aethel-500 to-aethel-600 flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Project Tracker</h3>
                </div>
                <span className="text-xs font-semibold text-aethel-600 bg-aethel-100 px-3 py-1.5 rounded-full">
                    Automated
                </span>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 mb-5 border border-gray-100 shadow-inner">
                <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Current Milestone</div>
                <div className="text-base font-bold text-gray-900">Scope 2 - Delivery Phase</div>
                <div className="flex items-center gap-2 mt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        In Progress
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">Due in 3 days</span>
                </div>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-between text-xs text-gray-500 relative px-2">
                <div className="absolute top-4 left-8 right-8 h-1 bg-gray-200 rounded-full" />
                <div className="absolute top-4 left-8 w-[55%] h-1 bg-gradient-to-r from-aethel-500 to-aethel-400 rounded-full" />

                {[
                    { label: "Approved", done: true },
                    { label: "In Dev", done: true },
                    { label: "Testing", active: true },
                    { label: "Launch", pending: true }
                ].map((step, i) => (
                    <div key={i} className="relative flex flex-col items-center gap-2 z-10">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all ${step.done
                                ? 'bg-gradient-to-br from-aethel-500 to-aethel-600'
                                : step.active
                                    ? 'bg-white border-2 border-aethel-500'
                                    : 'bg-gray-100 border-2 border-gray-200'
                            }`}>
                            {step.done ? (
                                <Check className="w-4 h-4 text-white" />
                            ) : step.active ? (
                                <div className="w-2.5 h-2.5 bg-aethel-500 rounded-full animate-pulse" />
                            ) : (
                                <div className="w-2 h-2 bg-gray-300 rounded-full" />
                            )}
                        </div>
                        <span className={`font-medium ${step.done || step.active ? 'text-gray-700' : 'text-gray-400'}`}>
                            {step.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// Enhanced Glass Card: Automation Stats
const AutomationStatsCard = () => (
    <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-aethel-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative glass rounded-3xl p-5 shadow-2xl w-[300px] border border-white/20 backdrop-blur-xl animate-float animation-delay-300">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                    <div className="text-2xl font-black text-gray-900">23 hrs</div>
                    <div className="text-sm text-gray-500">saved per week</div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-gray-900">94%</div>
                    <div className="text-xs text-gray-500">Error Reduction</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-gray-900">3.2x</div>
                    <div className="text-xs text-gray-500">Faster Processing</div>
                </div>
            </div>
        </div>
    </div>
);

// Enhanced Glass Card: Workflow Created
const WorkflowCard = () => (
    <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-aethel-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative glass rounded-3xl p-5 shadow-2xl w-[320px] border border-white/20 backdrop-blur-xl animate-float animation-delay-700">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-aethel-500 via-aethel-600 to-purple-600 flex items-center justify-center shadow-lg">
                        <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center shadow-md">
                        <Check className="w-3 h-3 text-white" />
                    </div>
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-base">New Workflow Live!</h4>
                    <p className="text-sm text-gray-500 mt-0.5">Invoice automation deployed</p>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <AvatarStack />
                </div>
                <button className="inline-flex items-center gap-1.5 bg-gradient-to-r from-aethel-500 to-aethel-600 hover:from-aethel-600 hover:to-aethel-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow-lg hover:shadow-xl">
                    <Play className="w-3.5 h-3.5" />
                    View
                </button>
            </div>
        </div>
    </div>
);

// Trusted By Logos (optional enhancement)
const TrustedLogos = () => (
    <div className="flex items-center gap-8 opacity-60">
        {["Forbes", "TechCrunch", "Wired", "Fast Company"].map((name, i) => (
            <span key={i} className="text-white/60 text-sm font-semibold tracking-wider">
                {name}
            </span>
        ))}
    </div>
);

export const HeroSection = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #472FFF 0%, #1a1066 50%, #040959 100%)' }}>
            {/* Navbar */}
            <Navbar />

            {/* Animated Background */}
            <BackgroundOrbs />

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)]">
                    {/* Left: Text Content */}
                    <div className="flex flex-col gap-8">
                        {/* Badge */}
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors cursor-pointer group">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                New Article
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                            <span className="text-white/70 text-sm font-medium">Process Automation ROI</span>
                        </div>

                        {/* Main Heading with gradient */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                            <span className="text-white">AI &</span><br />
                            <span className="bg-gradient-to-r from-white via-aethel-200 to-white bg-clip-text text-transparent">
                                Automation,
                            </span><br />
                            <span className="text-white">Made Easy</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-lg">
                            Unlock efficient growth and operational excellence in your technical
                            services business with expertly delivered software integration, AI
                            automation, and nocode development solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => handleScroll("contact")}
                                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-navy-900 font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
                            >
                                Contact us
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={() => window.open("https://cal.com/aethellabs/discovery", "_blank")}
                                className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50"
                            >
                                <Sparkles className="w-5 h-5" />
                                Claim your free audit
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-white font-semibold">4.9/5</span>
                            </div>
                            <div className="h-6 w-px bg-white/30" />
                            <span className="text-white/70 text-sm">Based on 420+ reviews</span>
                        </div>
                    </div>

                    {/* Right: Floating Cards */}
                    <div className="hidden lg:flex flex-col items-end gap-6 relative">
                        <AutomationStatsCard />
                        <ProjectTrackerCard />
                        <WorkflowCard />
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="relative z-10 w-full bg-white/5 backdrop-blur-md border-t border-white/10">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center md:text-left">
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">975+</span>
                                <span className="text-white/60 text-sm">Businesses Served</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">2.9K+</span>
                                <span className="text-white/60 text-sm">Workflows Deployed</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">99.9%</span>
                                <span className="text-white/60 text-sm">Uptime Guarantee</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
