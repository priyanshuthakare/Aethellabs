import { useState, useRef } from "react";
import { Mail, ArrowRight, CheckCircle, ChevronRight, Sparkles } from "lucide-react";

export const ContactUsSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const formInputs = useRef({});

    const handleInputChange = (id, value) => {
        formInputs.current[id] = value;
    };

    const handleSubmit = async () => {
        setError("");
        setIsLoading(true);

        try {
            if (!formInputs.current["name"] || !formInputs.current["email"]) {
                setError("Name and email are required");
                setIsLoading(false);
                return;
            }

            const response = await fetch("https://formspree.io/f/mpwgbqae", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formInputs.current["name"],
                    email: formInputs.current["email"],
                    company: formInputs.current["company"] || "Not provided",
                    message: formInputs.current["message"] || "No message",
                    _subject: `New Contact from ${formInputs.current["name"]}`
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
                formInputs.current = {};
            } else {
                setError("Failed to submit. Please try again.");
            }
        } catch (err) {
            setError("Error: " + err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-gray-50">
            <div className="w-full max-w-[1200px] mx-auto">
                {/* CTA Header */}
                <div className="bg-aethel-gradient rounded-4xl p-12 md:p-16 text-center relative overflow-hidden">
                    {/* Glow effects */}
                    <div className="absolute -left-40 top-1/2 w-80 h-80 bg-aethel-500/20 rounded-full blur-3xl" />
                    <div className="absolute -right-40 bottom-0 w-60 h-60 bg-aethel-500/10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Make your AI automation<br />journey easy
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Join more than <span className="font-bold text-white">975+ businesses</span> that have enjoyed
                            working with a capable and trustworthy partner.
                        </p>
                        <button
                            onClick={() => window.open("https://cal.com/aethellabs/discovery", "_blank")}
                            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-navy-900 font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Speak with our team
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            Or send us a message
                        </h3>
                        <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8 md:p-12 max-w-3xl mx-auto">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center py-8 text-center">
                                <div className="w-16 h-16 bg-aethel-100 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-8 h-8 text-aethel-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Thank You!
                                </h3>
                                <p className="text-lg text-gray-600">
                                    We'll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                        Your Name *
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-aethel-500 focus:ring-2 focus:ring-aethel-500/20 outline-none transition-all"
                                        onChange={(e) => handleInputChange("name", e.target.value)}
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                        Email Address *
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-aethel-500 focus:ring-2 focus:ring-aethel-500/20 outline-none transition-all"
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        placeholder="you@company.com"
                                    />
                                </div>

                                {/* Company */}
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label htmlFor="company" className="text-sm font-medium text-gray-700">
                                        Company Name
                                    </label>
                                    <input
                                        id="company"
                                        type="text"
                                        className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-aethel-500 focus:ring-2 focus:ring-aethel-500/20 outline-none transition-all"
                                        onChange={(e) => handleInputChange("company", e.target.value)}
                                        placeholder="Acme Inc."
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                                        Tell us about your project
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:border-aethel-500 focus:ring-2 focus:ring-aethel-500/20 outline-none transition-all resize-none"
                                        onChange={(e) => handleInputChange("message", e.target.value)}
                                        placeholder="What workflows would you like to automate?"
                                    />
                                </div>

                                {error && (
                                    <div className="md:col-span-2 p-4 bg-red-50 border border-red-200 rounded-xl">
                                        <p className="text-red-600 text-sm">{error}</p>
                                    </div>
                                )}

                                <div className="md:col-span-2">
                                    <button
                                        onClick={handleSubmit}
                                        disabled={isLoading}
                                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-aethel-500 hover:bg-aethel-600 active:bg-aethel-700 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? "Sending..." : "Send Message"}
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
