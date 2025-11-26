import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const contentBlocks = [
  {
    type: "solid",
    text: "It began with a simple thought, why do we spend so much time on things that don't really need us?",
  },
  {
    type: "bordered",
    text: "That question brought the four of us together. Different skills, same mindset, we wanted to make work feel lighter and more meaningful.",
  },
  {
    type: "solid",
    content: (
      <>
        <span className="text-white">At </span>
        <span className="font-extrabold text-black">Aethel Labs</span>
        <span className="text-white">
          , we build AI-powered automation that takes care of the repetitive
          stuff, so people can focus on the work that actually matters,
          creating, growing, and leading.
        </span>
      </>
    ),
  },
  {
    type: "bordered",
    text: "We're not a typical agency chasing trends. We're a team that believes the future belongs to those who learn how to automate the boring parts and think on a higher level.",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section id="about" className="flex flex-col items-center gap-16 py-20 px-4 w-full bg-black">
      <h2 className="[font-family:'Inter',Helvetica] font-normal text-[55px] text-center tracking-[0] leading-[normal]">
        <span className="font-semibold text-white">ABOUT </span>
        <span className="font-semibold text-[#5f34fb]">US</span>
      </h2>

      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-[1106px] mx-auto">
        {contentBlocks.map((block, index) => (
          <Card
            key={index}
            className={`w-full ${block.type === "solid"
              ? "bg-[#4e2bcd] border-0"
              : "bg-transparent border border-[#a975f8] shadow-[inset_0px_0px_26.5px_#5f34fb52]"
              } rounded-[9px] overflow-hidden transition-transform hover:scale-[1.01] duration-300`}
          >
            <CardContent className="flex items-center justify-center py-8 px-8 md:px-20">
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-xl text-center leading-relaxed">
                {block.content || block.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
