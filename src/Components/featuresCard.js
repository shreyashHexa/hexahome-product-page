const Card = ({ data }) => {
  return (
    <section className="py-10 bg-lgray">
      <div className="container mx-auto">
        <h2 className="mb-3 text-3xl font-bold text-center text-gray-800">Why HexaHome?</h2>
        <p className='pb-8 font-medium text-center '>Find, Compare & Finalize the property that meets all your preferences</p>
        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 gap-8 px-8 font-bold text-left sm:grid-cols-2 lg:grid-cols-3">
          {data.map((feature, index) => (
            <div key={index} className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
                                                                         