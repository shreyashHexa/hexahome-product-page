// pages/api/cardData.js

export default function handler(req, res) {
    // Sample data to send as a response
    const data = [
      {
        title: "Zero Brokerage",
        description: "Save money with HexaHome enjoy a commission-free experience when buying or renting properties.",
      },
      {
        title: "Unlimited Free Listings",
        description: "Post or browse an unlimited number of property options with no limits, ensuring you find the perfect home without any hidden fees.",
      },
      {
        title: "Verified Properties",
        description: "All properties are thoroughly verified for authenticity, giving you peace of mind in every deal.",
      },
      {
        title: "Smart Search",
        description: "Find exactly what you’re looking for with intelligent search features that cater to your preferences.",
      },
      {
        title: "Advanced Filter",
        description: "Customize your search with detailed filters to match your specific needs and lifestyle at your needful location.",
      },
      {
        title: "Track your Activities",
        description: "Keep tabs on saved properties, inquiries, and appointments easily within the app from the verified Tenants & Owners.",
      },
    ];
  
    // Sending the JSON response with a 200 status code
    res.status(200).json(data);
  }
  