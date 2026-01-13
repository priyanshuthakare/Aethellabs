import React from "react";

const sliderItems = [
    "ACCELERATES",
    "SIMPLIFIES",
    "AUTOMATE",
    "OPTIMIZES",
    "STREAMLINES",
];

export const SliderSection = () => {
    return (
        <div className="relative w-full py-20 overflow-hidden bg-black flex items-center justify-center">
            {/* Static Text Container */}
            <div className="flex items-center gap-16 md:gap-24 whitespace-nowrap">
                {sliderItems.map((text, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center px-4 py-6"
                    >
                        <div className="[font-family:'Inter',Helvetica] font-medium text-white text-3xl md:text-5xl text-center tracking-wider">
                            {text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
