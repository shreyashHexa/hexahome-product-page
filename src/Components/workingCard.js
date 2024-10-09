import Image from "next/image";

const Workingcard = ({ cards }) => {
  return (
    <section className="px-10 py-10 bg-white">
      <div className="container mx-auto">
        <h2 className="px-2 py-4 mb-3 text-3xl font-bold text-center text-gray-800">
          How to List Property in HexaHome
        </h2>

        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex p-6 rounded-lg shadow-md bg-lgray hover:shadow-lg"
            >
              {/* Icon at the top-left corner */}
              <div className="flex-shrink-0 mr-4">
                <Image
                  src={card.icon}
                  alt={`${card.title} Icon`}
                  width={30}
                  height={30}
                />
              </div>

              {/* Title and Description Section */}
              <div>
                {/* Card Title */}
                <h3 className="text-lg font-medium">{card.title}</h3>

                {/* Card Description */}
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workingcard;
