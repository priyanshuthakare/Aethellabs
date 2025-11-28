import { useState, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import GlassSurface from "../../../../components/ui/GlassSurface";

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
            // Validate required fields
            if (!formInputs.current["name"] || !formInputs.current["your-email"]) {
                setError("Name and email are required");
                setIsLoading(false);
                return;
            }

            const name = formInputs.current["name"];
            const email = formInputs.current["your-email"];
            const website = formInputs.current["website"] || "Not provided";
            const servicesOfInterest = formInputs.current["services-of-interest"] || "Not specified";
            const projectTimeline = formInputs.current["project-timeline"] || "Not specified";
            const primaryBusinessChallenge = formInputs.current["primary-business-challenge"] || "Not specified";
            const estimatedBudget = formInputs.current["estimated-budget-for-this-project"] || "Not specified";

            // Use Formspree (no backend needed, free tier available)
            const response = await fetch("https://formspree.io/f/mpwgbqae", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    website: website,
                    servicesOfInterest: servicesOfInterest,
                    projectTimeline: projectTimeline,
                    primaryBusinessChallenge: primaryBusinessChallenge,
                    estimatedBudget: estimatedBudget,
                    _subject: `New Contact Form Submission from ${name}`
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
                formInputs.current = {};
            } else {
                setError("Failed to submit form. Please try again.");
            }
        } catch (err) {
            setError("Error submitting form: " + err.message);
            console.error("Form submission error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="flex items-start justify-end gap-2.5 px-[91px] py-20 relative w-full bg-black">
            <div className="relative w-full max-w-[1440px] mx-auto h-[904px]">
                {/* Background with content */}
                <div className="absolute w-[98.11%] h-[100.12%] top-[2.95%] left-0 pointer-events-none">
                    <img
                        className="absolute w-[99.72%] top-0 left-0 h-[904px] object-cover"
                        alt="Background"
                        src="/image 54.png"
                    />

                    <h2 className="absolute w-[45.45%] top-[3.94%] left-[3.61%] [font-family:'Inter',Helvetica] font-bold text-[55px] tracking-[0] leading-[normal]">
                        <span className="text-white">Start </span>
                        <span className="text-[#5f34fb]">Your </span>
                        <span className="text-white">Automation Journey</span>
                    </h2>

                    <p className="absolute w-[41.33%] top-[22.01%] left-[3.61%] [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]">
                        Ready to transform your business with AI? Let's discuss how Aethel
                        Labs can accelerate your digital transformation.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="absolute right-0 top-0 pointer-events-auto">
                    <GlassSurface
                        width={598}
                        height={800}
                        borderRadius={11}
                        backgroundOpacity={0}
                        className="border border-solid border-[#a975f8] shadow-[inset_0px_0px_26.5px_#5f34fb52,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]"
                    >
                        {isSubmitted ? (
                            <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                                <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-[40px] mb-6 tracking-[0] leading-[normal]">
                                    Thank You!
                                </h3>
                                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
                                    We will contact you as soon as possible.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h3 className="absolute top-3.5 left-[211px] [font-family:'Inter',Helvetica] font-light text-white text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
                                    Contact Us
                                </h3>

                                {/* Name and Website */}
                                <div className="absolute top-[105px] left-[62px] flex gap-[27px]">
                                    <div className="flex flex-col gap-[7px]">
                                        <Label
                                            htmlFor="name"
                                            className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]"
                                        >
                                            Your Name
                                        </Label>
                                        <Input
                                            id="name"
                                            className="w-[240.17px] h-8 bg-black rounded border border-solid border-[#5f34fb] text-white"
                                            onChange={(e) => handleInputChange("name", e.target.value)}
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-[7px]">
                                        <Label
                                            htmlFor="website"
                                            className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]"
                                        >
                                            Company Website
                                        </Label>
                                        <Input
                                            id="website"
                                            className="w-[240.17px] h-8 bg-black rounded border border-solid border-[#5f34fb] text-white"
                                            onChange={(e) => handleInputChange("website", e.target.value)}
                                            placeholder="https://example.com"
                                        />
                                    </div>
                                </div>

                                {/* Full width fields */}
                                {[
                                    "Your Email",
                                    "Services Of Interest",
                                    "Project Timeline",
                                    "Primary Business Challenge",
                                    "Estimated Budget For This Project"
                                ].map((label, index) => (
                                    <div key={label} className="absolute left-[62px] w-[511px] flex flex-col gap-[7px]" style={{ top: `${186 + index * 81}px` }}>
                                        <Label
                                            htmlFor={label.toLowerCase().replace(/ /g, '-')}
                                            className="[font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal]"
                                        >
                                            {label}
                                        </Label>
                                        <Input
                                            id={label.toLowerCase().replace(/ /g, '-')}
                                            type={label === "Estimated Budget For This Project" ? "number" : "text"}
                                            className="w-[509px] h-8 bg-black rounded border border-solid border-[#5f34fb] text-white"
                                            onChange={(e) => handleInputChange(label.toLowerCase().replace(/ /g, '-'), e.target.value)}
                                            placeholder={label === "Your Email" ? "your@email.com" : ""}
                                        />
                                    </div>
                                ))}

                                {error && (
                                    <div className="absolute top-[650px] left-[62px] w-[511px] p-3 bg-red-500/20 border border-red-500 rounded">
                                        <p className="[font-family:'Inter',Helvetica] font-normal text-red-400 text-sm">
                                            {error}
                                        </p>
                                    </div>
                                )}

                                <Button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="absolute top-[694px] left-[150px] w-[352px] h-[60px] bg-[#4e2bcd] rounded-[9px] shadow-[inset_0px_4px_4px_#a975f8] [font-family:'Inter',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-[normal] hover:bg-[#4e2bcd]/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? "Submitting..." : "Book a consultation"}
                                </Button>
                            </>
                        )}
                    </GlassSurface>
                </div>
            </div>
        </section>
    );
};
