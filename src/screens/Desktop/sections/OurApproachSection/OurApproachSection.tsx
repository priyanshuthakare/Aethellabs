import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const approachSteps = [
  {
    number: "01",
    title: "Listen First",
    description: "We don't walk in with ready-made solutions. We start by listening, to how your team works, where time gets lost, and what goals truly matter to you. Every automation we build begins with understanding, not assumptions.",
    image: "/image 46.png",
    isRotated: true,
  },
  {
    number: "02",
    title: "Discover the Gaps",
    description: "Once we see the full picture, we identify the gaps, those silent inefficiencies that slow things down. Then we explore how AI can quietly step in to simplify not complicate.",
    image: "/image 47.png",
    isRotated: true,
  },
  {
    number: "03",
    title: "Make It Work",
    description: "Then we build. Every automation is designed to fit naturally into how you already work. Simple and Practical.",
    image: "/image 48.png",
    isRotated: false,
  },
  {
    number: "04",
    title: "Keep Improving",
    description: "Things change, and so should your systems. We stick around to tweak, refine, and grow your automations as your team grows.",
    image: "/image 49.png",
    isRotated: true,
  },
];

export const OurApproachSection = (): JSX.Element => {
  return (
    <section id="approach" className="flex flex-col items-center gap-[66px] py-20 px-4 w-full bg-black">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-[66px]">
        <div className="text-center">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-[55px] leading-tight mb-4">
            <span className="text-white">OUR </span>
            <span className="text-[#6600ff]">APPROACH</span>
          </h2>
          <p className="max-w-[663px] mx-auto [font-family:'Inter',Helvetica] font-normal text-white text-2xl leading-relaxed opacity-80">
            A proven methodology that ensures successful ai implementation from concept to deployment.
          </p>
        </div>

        <div className="flex items-center justify-center gap-[47px] flex-wrap px-4">
          {approachSteps.map((step, index) => (
            <div key={index} className="relative w-[296px] h-[509px]">
              {/* Card with background image */}
              <Card
                className={`absolute w-full h-[86.64%] top-[13.36%] left-0 bg-[#0a0222] rounded-[14px] overflow-hidden border-0 ${step.isRotated ? "rotate-180" : ""}`}
              >
                <CardContent className="p-0 relative h-full">
                  <img
                    className={`absolute top-0 left-0 w-full h-[441px] object-cover ${step.isRotated ? "-rotate-180" : ""}`}
                    alt="Background"
                    src={step.image}
                  />
                  <div
                    className={`absolute ${step.isRotated ? "top-[85px]" : "top-[93px]"} left-[9px] w-[278px] flex flex-col ${step.isRotated ? "gap-[54px] rotate-180" : "gap-[73px]"} px-[6px]`}
                  >
                    <h3
                      className={`${step.isRotated ? "order-2" : "order-1"} [font-family:'Inter',Helvetica] font-semibold text-white text-[32px] text-center tracking-[0] leading-[normal]`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`${step.isRotated ? "order-1" : "order-2"} [font-family:'Inter',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[normal]`}
                    >
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Number badge */}
              <div className="flex items-center justify-center absolute top-0 left-[30%] bg-[#00000000] rounded-[11px] overflow-hidden border border-solid border-[#a975f8] shadow-[inset_0px_0px_26.5px_#5f34fb52,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] px-[22px] py-[22px]">
                <span className="[font-family:'JetBrains_Mono',Helvetica] font-normal text-white text-5xl text-center tracking-[0] leading-[normal]">
                  {step.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
