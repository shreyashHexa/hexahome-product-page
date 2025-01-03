import Image from "next/image";
import React from "react";

const Workingcard = ({ cards }) => {
  return (
    <section className="py-10 pl-12 bg-white sm:px-10">
      <div className="container px-10 mx-auto">
      <h2 className="flex items-center justify-center text-center max-w-[130px] mx-auto px-2 py-1 text-base font-semibold bg-gradient-to-r from-[#D8E3FF] to-white rounded-full text-tblue">
  How It&apos;s Works
</h2>


        <h2 className="px-2 py-4 mb-3 text-2xl font-bold text-center text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl">
          How to List Property in HexaHome
        </h2>

        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex p-6 rounded-lg bg-lgray"
            >
              {/* Icon at the top-left corner */}
              <div className="flex-shrink-0 mr-4">
                <Image
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  width={60}
                  height={60}
                />
              </div>

              {/* Title and Description Section */}
              <div>
                {/* Card Title */}
                <h3 className="mb-2 text-lg font-medium text-black">{card.title}</h3>

                {/* Card Description */}
                <p className="text-black">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Workingcard);
