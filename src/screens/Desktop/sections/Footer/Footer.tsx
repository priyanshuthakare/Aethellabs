import React from "react";

export const Footer = (): JSX.Element => {
    return (
        <footer
            className="w-full flex flex-col items-center pt-10 pb-10 relative"
            style={{
                backgroundImage: "url(/assets/footer.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* Gradient Line Separator */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#5f34fb] to-transparent opacity-50 mb-10" />

            <div className="w-full max-w-[1440px] px-[62px] flex items-start justify-between">
                {/* Left Side: Logo & Tagline */}
                <div className="flex flex-col gap-2">
                    <img
                        className="w-[213px] h-10 object-contain"
                        alt="Aethel Labs Logo"
                        src="/image-45.png"
                    />
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffff80] text-sm tracking-[0] leading-[normal]">
                        making work simple
                    </p>
                </div>

                {/* Right Side: Navigation Links */}
                <div className="flex flex-col gap-4 items-end">
                    <a href="#" className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffcc] text-sm tracking-[0] leading-[normal] hover:text-white transition-colors">
                        About us
                    </a>
                    <a href="#" className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffcc] text-sm tracking-[0] leading-[normal] hover:text-white transition-colors">
                        Services
                    </a>
                    <a href="#" className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffcc] text-sm tracking-[0] leading-[normal] hover:text-white transition-colors">
                        Approach
                    </a>
                    <a href="#" className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffcc] text-sm tracking-[0] leading-[normal] hover:text-white transition-colors">
                        Contact us
                    </a>
                </div>
            </div>
        </footer>
    );
};
