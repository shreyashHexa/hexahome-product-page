import React from "react";
import Image from "next/image";

const FeaturesCard = ({ data }) => {
  return (
    <section className="px-8 py-10 pl-12 bg-lgray">
      <div className="container px-4 mx-auto sm:px-8">
        <h2 className="mb-3 text-2xl font-bold text-center text-gray-800 md:text-3xl">
          Why HexaHome?
        </h2>
        <p className="pb-8 font-medium text-center">
          Find, Compare & Finalize the property that meets all your preferences
        </p>

        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-6 pl-8 bg-white rounded-lg">
              <Image
                src={feature.icon}
                alt={`${feature.title} Icon`}
                className="w-10 h-10 mb-4"
                width={40}
                height={40}
              />
              <div className="text-left text-black">
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(FeaturesCard);
