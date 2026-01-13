import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star, BadgeCheck, Quote } from "lucide-react";

const testimonials = [
    {
        company: "Villa Retreats Cyprus",
        quote: "Villa Retreats Cyprus Ltd relied on a legacy WordPress-based booking system that lacked flexibility, failed to integrate with their core tools, and created double-handling of data. The team delivered a seamless, scalable booking experience that transformed our operations.",
        result: "60% reduction in booking time",
        rating: 5
    },
    {
        company: "BB7 Engineering",
        quote: "BB7's finance workflows were fragmented and heavily manual. Invoices were rekeyed from Scoro to Business Central, and forecasting relied on static spreadsheets. The new integrated system automated our full finance lifecycle, from invoicing to revenue recognition.",
        result: "4 hours saved daily",
        rating: 5
    },
    {
        company: "MDF Store",
        quote: "MDF Store relied on spreadsheets and nightly manual planning to manage orders. Each day, the production team spent 4–5 hours cleaning data and manually grouping jobs. Now we have real visibility into work stages and the ability to scale our digital operations.",
        result: "75% reduction in manual planning",
        rating: 5
    },
    {
        company: "Doormatic",
        quote: "Doormatic relied on spreadsheets, email threads, and WhatsApp messages to manage operations. Shipping updates were slow, installation scheduling was chaotic. The automation brought visibility, efficiency, and a significantly improved customer experience.",
        result: "90% faster customer updates",
        rating: 5
    },
    {
        company: "Shoreline",
        quote: "Before working with the team, Shoreline was battling a fragmented tech stack. WooCommerce, Katana, Pipedrive, and ShipStation weren't talking to each other. Now we have a single source of truth and can finally focus on growth instead of firefighting.",
        result: "100% system integration",
        rating: 5
    }
];

export const TestimonialsSection = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 450;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 bg-aethel-gradient relative overflow-hidden">
            {/* Glow effects */}
            <div className="absolute -right-40 top-1/3 w-80 h-80 bg-aethel-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
                {/* Heading */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Real customers,{" "}
                            <span className="text-white/90">real impact</span>
                        </h2>
                        <button className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors">
                            Our work
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[420px] bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors"
                        >
                            {/* Company Name */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                    <Quote className="w-5 h-5 text-aethel-500" />
                                </div>
                                <span className="font-bold text-white text-lg">{testimonial.company}</span>
                            </div>

                            {/* Quote */}
                            <p className="text-white/80 leading-relaxed mb-6 text-sm line-clamp-5">
                                {testimonial.quote}
                            </p>

                            {/* Result Badge */}
                            <div className="bg-white/10 rounded-xl px-4 py-3 mb-4">
                                <span className="text-white font-semibold">{testimonial.result}</span>
                            </div>

                            {/* Rating and Verified */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <div className="flex items-center gap-1 text-white/70 text-sm">
                                    <BadgeCheck className="w-4 h-4 text-blue-400" />
                                    Verified
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
