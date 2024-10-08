import Image from "next/image"; // Ensure this import is present

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen pt-12 bg-center bg-cover" // Added pt-16 to prevent overlap with header
      style={{ backgroundImage: "url('/images/heroBg.png')" }} // Correct path here
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 grid w-full h-full gap-6 px-4 py-10 sm:px-8 sm:grid-cols-12">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center sm:col-span-7">
          <h1 className="px-4 py-8 text-lg text-Sorange md:text-xl lg:text-2xl md:px-8">
            GHAR AAPKA...KHOZ HAMARI
          </h1>
          <h1 className="px-4 text-2xl font-bold text-white md:px-8 md:text-4xl lg:text-5xl">
            Endless Real Estate Solution in Your Pocket - HexaHome
          </h1>
          <p className="px-4 text-base font-semibold text-white md:px-8 md:text-lg">
            Property hunting made simple. Find, compare, and move into your dream home with ease. Download Now!
          </p>

          {/* Buttons */}
          <div id="button" className="grid grid-cols-1 gap-4 px-4 mt-6 sm:grid-cols-2 md:px-8">
            {/* First two buttons - half width on small screens */}
            <button className="w-full col-span-1 px-6 py-3 text-white transition duration-300 bg-black border rounded text--800 sm:w-auto ">
              App Store
            </button>
            <button className="w-full col-span-1 px-6 py-3 text-white transition duration-300 bg-black border rounded sm:w-auto ">
              Play Store
            </button>

            {/* Third button - full width below on smaller screens */}
            <button className="w-full col-span-2 px-6 py-3 mt-4 text-blue-500 transition duration-300 bg-white rounded sm:mt-0">
              Explore Property
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex items-center justify-center hidden sm:col-span-5 sm:block">
          <Image
            src="/images/heroimg.png" // Ensure this path is correct
            alt="herobg"
            layout="intrinsic" // Using intrinsic layout for better control
            width={400} // Adjust width
            height={500} // Adjust height
            className="rounded-lg" // Optional: add any additional classes for styling
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
