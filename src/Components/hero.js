import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen pt-16 bg-center bg-cover"
      style={{ backgroundImage: "url('/images/heroBg.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 grid w-full h-full gap-8 px-4 py-10 sm:px-4 sm:py-6 sm:grid-cols-12 md:px-8 md:py-10 lg:px-16 lg:py-16">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center px-4 py-4 sm:col-span-7 md:px-6 sm:px-2 sm:py-4 lg:px-16 lg:py-8">
          <h2 className="px-2 py-4 text-lg italic font-extrabold text-torange md:text-xl lg:text-2xl md:px-8 ">
            GHAR AAPKA... KHOZ HAMARI
          </h2>
          <h1 className="px-2 pb-4 text-2xl font-extrabold text-center text-white md:text-6xl lg:text-4xl md:px-8 md:text-left">
            Endless Real Estate Solution in Your Pocket - HexaHome
          </h1>
          <p className="px-2 mb-4 text-base font-semibold text-center text-white md:text-lg md:px-8 md:text-left">
            Property hunting made simple. Find, compare, and move into your dream home with ease. Download Now!
          </p>

          {/* Buttons */}
          <div id="button" className="grid grid-cols-1 gap-4 px-4 mt-6 sm:grid-cols-2 lg:flex lg:justify-center lg:gap-6 md:px-8">
            {/* App Store and Play Store buttons */}
            <button className="px-5 py-2 text-sm text-white transition-all duration-150 ease-in-out bg-black border-2 rounded sm:w-auto md:px-4 md:py-2 md:text-sm lg:px-4 lg:py-2 lg:text-sm">
              App Store
            </button>
            <button className="px-5 py-2 text-sm text-white transition-all duration-150 ease-in-out bg-black border-2 rounded sm:w-auto md:px-4 md:py-2 md:text-sm lg:px-4 lg:py-2 lg:text-sm">
              Play Store
            </button>

            {/* Explore Property button */}
            <button className="col-span-2 px-6 py-2 mt-4 text-sm transition-all duration-150 ease-in-out bg-white rounded text-tblue sm:mt-0 sm:text-sm md:px-5 md:py-2 md:text-sm lg:px-6 lg:py-2 lg:text-sm lg:w-auto">
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
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
