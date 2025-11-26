import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const sliderItems = [
  "ACCELERATES",
  "SIMPLIFIES",
  "AUTOMATE",
  "OPTIMIZES",
  "STREAMLINES",
];

// Duplicate items to create a seamless loop
const extendedItems = [...sliderItems, ...sliderItems, ...sliderItems, ...sliderItems];

export const SliderSection = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const totalWidth = containerRef.current.scrollWidth / 2; // Approximate half width for loop

    // Infinite scroll animation
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(containerRef.current, {
      x: "-50%",
      duration: 20,
      ease: "none",
    });

    // Proximity effect
    gsap.ticker.add(() => {
      if (!containerRef.current) return;

      const centerX = window.innerWidth / 2;
      const glassBoxWidth = 300; // Approximate width of the glass box

      itemsRef.current.forEach((item) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);

        // Calculate scale and opacity based on distance from center
        // Max scale 1.1 at center, min 0.8 at edges
        // Max opacity 1 at center, min 0.3 at edges
        const maxDist = 300; // Distance of influence

        let scale = 0.8;
        let opacity = 0.3;

        if (distance < maxDist) {
          const progress = 1 - (distance / maxDist);
          scale = 0.8 + (0.3 * progress); // 0.8 -> 1.1
          opacity = 0.3 + (0.7 * progress); // 0.3 -> 1.0
        }

        gsap.set(item, {
          scale: scale,
          opacity: opacity,
          filter: `blur(${distance < 150 ? 0 : 2}px)`
        });
      });
    });

  }, { scope: containerRef });

  return (
    <div className="relative w-full py-20 overflow-hidden bg-black flex items-center justify-center">

      {/* Static Glass Box (Centered) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="w-[280px] md:w-[350px] h-[100px] bg-black/40 rounded-2xl border border-[#a975f8] shadow-[0_0_30px_rgba(95,52,251,0.4)] backdrop-blur-sm" />
      </div>

      {/* Scrolling Text Container */}
      <div ref={containerRef} className="flex items-center gap-16 md:gap-24 whitespace-nowrap pl-[100vw]">
        {extendedItems.map((text, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="flex items-center justify-center px-4 py-6 transition-transform will-change-transform"
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
