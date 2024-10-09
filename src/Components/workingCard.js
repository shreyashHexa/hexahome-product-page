import Image from "next/image";

const Workingcard = () => {
  const cards = [
    {
      title: "Create an HexaHome Accounte",
      description: "Sign up/Register with your mobile number/Email, quickly and easily to start listing your property on HexaHome.",
      icon: "/images/icon1.png", // Path to your icon image
    },
    {
      title: "Post Property Ads",
      description: "Create and publish your property ad in just a few clicks, reaching thousands of potential buyers or renters. ",
      icon: "/images/icon2.png",
    },
    {
      title: "Add Details",
      description: "key property details, upload photos, and showcase the best features to attract interested users. ",
      icon: "/images/icon3.png",
    },
    {
      title: "Get Verified by HexaHome",
      description: "Ensure your listing is trustworthy with HexaHome’s quick verification process for added credibility.",
      icon: "/images/icon4.png",
    },
    {
      title: "Check the response",
      description: "Track inquiries and manage interested buyers or renters directly through the app. ",
      icon: "/images/icon5.png",
    },
    {
      title: "Sell/Rent Faster",
      description: "Enjoy increased visibility and connect with serious buyers or renters to close deals quickly. ",
      icon: "/images/icon6.png",
    },
  ];

  return (
    <section className="px-10 bg-white -py-10 ">
      <div className="container mx-auto">
        
        <h2 className="mb-3 text-3xl font-bold text-center text-gray-800">How to List Property in HexaHome</h2>
    

        {/* Responsive Grid for Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg shadow-md bg-lgray hover:shadow-lg"
            >
              {/* Icon at the top-left corner */}
              <div className="absolute top-4 left-4">
                <Image src={card.icon} alt={`${card.title} Icon`} width={30} height={30} />
              </div>

              {/* Card Title */}
              <h3 className="mt-8 mb-2 text-lg font-semibold">{card.title}</h3>

              {/* Card Description */}
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workingcard;
