import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

export const ContactUsSection = (): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
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
        <div className="absolute right-0 top-0 w-[598px] h-[799.98px] bg-[#00000000] rounded-[11px] overflow-hidden border border-solid border-[#a975f8] shadow-[inset_0px_0px_26.5px_#5f34fb52,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] pointer-events-auto">
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
                  />
                </div>
              ))}

              <Button
                onClick={handleSubmit}
                className="absolute top-[694px] left-[150px] w-[352px] h-[60px] bg-[#4e2bcd] rounded-[9px] shadow-[inset_0px_4px_4px_#a975f8] [font-family:'Inter',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-[normal] hover:bg-[#4e2bcd]/90"
              >
                Book a consultation
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
