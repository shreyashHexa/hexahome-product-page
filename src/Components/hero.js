import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen pt-16 bg-center bg-cover"
      style={{ backgroundImage: "url('/images/heroBg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 grid w-full h-full gap-6 px-4 py-10 sm:px-8 sm:grid-cols-12">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center sm:col-span-7">
          <h2 className="px-4 py-8 text-lg font-extrabold text-torange md:text-xl lg:text-2xl md:px-8">
            GHAR AAPKA...KHOZ HAMARI
          </h2>
          <h1 className="px-4 text-2xl font-extrabold text-white md:px-8 md:text-6xl lg:text-4xl">
            Endless Real Estate Solution in Your Pocket - HexaHome
          </h1>
          <p className="px-4 text-base font-extrabold text-white md:px-8 md:text-lg">
            Property hunting made simple. Find, compare, and move into your dream home with ease. Download Now!
          </p>

          {/* Buttons */}
          <div id="button" className="grid grid-cols-1 gap-4 px-4 mt-6 sm:grid-cols-2 md:px-8">
            {/* App Store and Play Store buttons */}
            <button className="w-full col-span-1 px-6 py-3 text-white transition duration-300 bg-black border-2 rounded sm:w-auto">
              App Store
            </button>
            <button className="w-full col-span-1 px-6 py-3 text-white transition duration-300 bg-black border-2 rounded sm:w-auto">
              Play Store
            </button>

            {/* Explore Property button */}
            <button className="w-full col-span-2 px-6 py-3 mt-4 text-blue-500 transition duration-300 bg-white rounded sm:mt-0">
              Explore Property
            </button>
          </div>
        </div>

        {/* Right Side - Image (Hidden on smaller screens) */}
        <div className="items-center justify-center hidden sm:col-span-5 sm:flex">
          <Image
            src="/images/heroimg.png"
            alt="Hero Image"
            layout="intrinsic"
            width={400}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
