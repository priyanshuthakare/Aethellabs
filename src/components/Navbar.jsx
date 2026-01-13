import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, Phone } from "lucide-react";

const servicesDropdownItems = [
    { icon: "🔗", title: "Software Integration", desc: "Unify your software" },
    { icon: "⚡", title: "Process Automation", desc: "Banish busywork" },
    { icon: "🤖", title: "AI Integration", desc: "Harness AI power" },
    { icon: "📊", title: "Data Management", desc: "Master your data" },
    { icon: "📄", title: "Document Automation", desc: "Streamline your docs" },
    { icon: "🛠️", title: "Nocode Development", desc: "Build custom apps faster" },
];

const methodsDropdownItems = [
    { icon: "⚡", title: "InstantBuild", desc: "Build your automation now" },
    { icon: "🚀", title: "FastTrack", desc: "Accelerated project delivery" },
    { icon: "🧭", title: "Pathfinder", desc: "Find your way forward" },
    { icon: "🔄", title: "AgileSync", desc: "Collaborative iterative dev" },
    { icon: "📈", title: "Transform", desc: "Continuous digital transformation" },
];

const DropdownMenu = ({ items, isOpen, align = "left" }) => {
    if (!isOpen) return null;

    return (
        <div
            className={`absolute top-full mt-2 ${align === 'right' ? 'right-0' : 'left-0'} bg-white rounded-2xl shadow-xl border border-gray-100 p-4 min-w-[280px] z-50 animate-fade-in`}
        >
            <div className="grid gap-1">
                {items.map((item, index) => (
                    <button
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors text-left w-full group"
                    >
                        <span className="w-10 h-10 bg-aethel-500 text-white rounded-lg flex items-center justify-center text-lg">
                            {item.icon}
                        </span>
                        <div>
                            <div className="font-semibold text-gray-900 group-hover:text-aethel-600 transition-colors">
                                {item.title}
                            </div>
                            <div className="text-sm text-gray-500">{item.desc}</div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const navRef = useRef(null);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setOpenDropdown(null);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <nav
                ref={navRef}
                className="max-w-[1200px] mx-auto bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-gray-100 px-6 py-3 flex items-center justify-between"
            >
                {/* Left: Logo + Brand Name */}
                <div className="flex items-center gap-3">
                    <img
                        src="/image-45.png"
                        alt="Aethel Labs Logo"
                        className="h-8 w-auto object-contain"
                    />
                    <span className="font-bold text-lg text-gray-900 tracking-tight">
                        Aethel Labs
                    </span>
                </div>

                {/* Center: Navigation Links with Dropdowns */}
                <div className="hidden md:flex items-center gap-1">
                    {/* Services Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                            className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium text-sm transition-all ${openDropdown === 'services'
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                        >
                            Services
                            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                        </button>
                        <DropdownMenu items={servicesDropdownItems} isOpen={openDropdown === 'services'} />
                    </div>

                    {/* Methods Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setOpenDropdown(openDropdown === 'methods' ? null : 'methods')}
                            className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium text-sm transition-all ${openDropdown === 'methods'
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                        >
                            Solutions
                            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'methods' ? 'rotate-180' : ''}`} />
                        </button>
                        <DropdownMenu items={methodsDropdownItems} isOpen={openDropdown === 'methods'} />
                    </div>

                    {/* Static Links */}
                    <button
                        onClick={() => handleScroll("work")}
                        className="px-4 py-2 rounded-full font-medium text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                        Work
                    </button>
                    <button
                        onClick={() => handleScroll("about")}
                        className="px-4 py-2 rounded-full font-medium text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                        About
                    </button>
                </div>

                {/* Right: Phone + CTA */}
                <div className="flex items-center gap-3">
                    {/* Phone Number - Hidden on mobile */}
                    <a
                        href="tel:+1234567890"
                        className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        <span>Contact Us</span>
                    </a>

                    {/* CTA Button */}
                    <button
                        onClick={() => handleScroll("contact")}
                        className="inline-flex items-center gap-2 bg-aethel-500 hover:bg-aethel-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        Get Started
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
