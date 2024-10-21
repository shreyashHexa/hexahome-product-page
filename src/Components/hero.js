import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen pt-16 pr-4 bg-center bg-cover"
      style={{ backgroundImage: "url('/images/heroBg.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 grid w-full h-full gap-8 px-4 py-10 sm:px-4 sm:py-6 sm:grid-cols-12 md:px-8 md:py-10 lg:px-16 lg:py-16">
        {/* Left Side - Text Content */}
        <div className="flex flex-col sm:col-span-7 md:px-6 sm:px-2 sm:py-4 lg:px-9 lg:py-6">
          <h2 className="text-lg italic font-extrabold text-torange md:text-xl lg:text-2xl">
            GHAR AAPKA... KHOZ HAMARI
          </h2>
          <h1 className="pb-4 text-2xl font-extrabold text-center text-white md:text-6xl lg:text-4xl md:text-left">
            Endless Real Estate Solution in Your Pocket - HexaHome
          </h1>
          <p className="mb-4 text-base font-semibold text-center text-white md:text-lg md:text-left">
            Property hunting made simple. Find, compare, and move into your dream home with ease. Download Now!
          </p>

          {/* Buttons */}
          <div className="grid grid-cols-1 gap-4 mt-6 lg:pr-6 sm:grid-cols-2 lg:flex lg:gap-4">
            <button className="px-5 py-2 text-sm text-white transition-all duration-150 ease-in-out bg-black border-2 rounded sm:w-auto">
              App Store
            </button>
            <button className="px-5 py-2 text-sm text-white transition-all duration-150 ease-in-out bg-black border-2 rounded sm:w-auto">
              Play Store
            </button>
            <button className="col-span-2 px-6 py-2 mt-4 text-sm transition-all duration-150 ease-in-out bg-white rounded text-tblue sm:mt-0">
              Explore Property
            </button>
          </div>
        </div>

        {/* Right Side - Image (Hidden on smaller screens) */}
        <div className="items-center justify-center hidden sm:col-span-5 sm:flex">
          <Image
            src="/images/heroimg.webp"
            alt="Hero Image"
            layout="intrinsic"
            width={400}
            height={700}
            className="rounded-lg"
            priority
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
