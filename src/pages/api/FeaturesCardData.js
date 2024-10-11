export default function handler(req, res) {
  // Updated data with SVG icons
  const data = [
    {
      title: "Zero Brokerage",
      description: "Save money with HexaHome enjoy a commission-free experience when buying or renting properties.",
      icon: "/images/ficon1.svg",  // SVG file path
    },
    {
      title: "Unlimited Free Listings",
      description: "Post or browse an unlimited number of property options with no limits, ensuring you find the perfect home without any hidden fees.",
      icon: "/images/ficon2.svg",
    },
    {
      title: "Verified Properties",
      description: "All properties are thoroughly verified for authenticity, giving you peace of mind in every deal.",
      icon: "/images/ficon3.svg",
    },
    {
      title: "Smart Search",
      description: "Find exactly what you’re looking for with intelligent search features that cater to your preferences.",
      icon: "/images/ficon4.svg",
    },
    {
      title: "Advanced Filter",
      description: "Customize your search with detailed filters to match your specific needs and lifestyle at your needful location.",
      icon: "/images/ficon5.svg",
    },
    {
      title: "Track your Activities",
      description: "Keep tabs on saved properties, inquiries, and appointments easily within the app from the verified Tenants & Owners.",
      icon: "/images/ficon6.svg", // Removed leading space
    },
  ];

  res.status(200).json(data);
}
