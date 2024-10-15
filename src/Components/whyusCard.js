import Image from "next/image";
import React from "react";

const WhyUsCard = ({ data }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-5 py-6 bg-lgray">
      {/* Title and Description */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4 md:text-[36px]">Why Property Hunters Love Us</h2>
        <p className="text-base md:text-[20px]">
          Changing the way people's, Property hunting made simple. Find, compare, and move into your dream home with ease.
        </p>
      </div>

      {/* Cards and Center Image */}
      <div className="flex flex-col items-center justify-between w-full gap-8 md:flex-row">
        {/* Left Column */}
        <div className="flex flex-col items-center w-full gap-4 md:w-1/4">
          {data.slice(0, 2).map((card) => (
            <div
              key={card.id}
              className="w-full max-w-[320px] h-auto bg-white rounded-lg flex flex-col items-start p-4 md:w-[406px] md:h-[228px]"
            >
              <div className="flex flex-col items-start">
                <Image
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  width={52}
                  height={52}
                  className="mb-2"
                />
                <h3 className="text-lg font-bold mb-1 md:text-[20px]">{card.title}</h3>
                <p className="text-sm md:text-[16px]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex items-center justify-center w-full max-w-[320px] md:w-1/4">
          <Image
            src="/images/whycardimg.png"
            alt="Center Image"
            width={600}
            height={792}
            className="rounded-lg"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center w-full gap-4 md:w-1/4">
          {data.slice(2, 4).map((card) => (
            <div
              key={card.id}
              className="w-full max-w-[320px] h-auto bg-white rounded-lg flex flex-col items-start p-4 md:w-[406px] md:h-[228px]"
            >
              <div className="flex flex-col items-start">
                <Image
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  width={52}
                  height={52}
                  className="mb-2"
                />
                <h3 className="text-lg font-bold mb-1 md:text-[20px]">{card.title}</h3>
                <p className="text-sm md:text-[16px]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(WhyUsCard);
