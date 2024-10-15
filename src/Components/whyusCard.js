import Image from "next/image";
import React from "react";

const WhyUsCard = ({ data }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-5 py-6 bg-lgray">
      {/* Title and Description */}
      <div className="mb-8 text-center">
        <h2 className="text-[36px] font-bold mb-4">Why Property hunters Love Us</h2>
        <p className="text-[20px]">Changing the way people's, Property hunting made simple. Find, compare, and move into your dream home with ease.</p>
      </div>

      <div className="flex flex-col items-center justify-between w-full px-16 py-2 md:flex-row">
        {/* Left Column */}
        <div className="flex flex-col items-center gap-4 md:w-1/4">
          {data.slice(0, 2).map((card) => (
            <div
              key={card.id}
              className="w-[406px] h-[228px] bg-white rounded-lg flex flex-col items-start p-3" 
            >
              <div className="flex flex-col items-start">
                <Image
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  width={52}
                  height={52}
                  className="mb-2"
                />
                <h3 className="text-[20px] font-bold mb-1">{card.title}</h3> 
                <p className="text-[16px] mb-1">{card.description}</p> 
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex items-center justify-center w-full mb-2 md:w-1/4 md:mb-0">
          <Image
            src="/images/whycardimg.png"
            alt="Description of the image"
            width={600}
            height={792}
            className="rounded-lg"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center gap-4 md:w-1/4">
          {data.slice(2, 4).map((card) => (
            <div
              key={card.id}
              className="w-[406px] h-[228px] bg-white rounded-lg flex flex-col items-start p-3" 
            >
              <div className="flex flex-col items-start">
                <Image
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  width={52}
                  height={52}
                  className="mb-2"
                />
                <h3 className="text-[20px] font-bold mb-1">{card.title}</h3> 
                <p className="text-[16px] mb-1">{card.description}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(WhyUsCard);
