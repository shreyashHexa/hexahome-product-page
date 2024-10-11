// src/pages/api/whyusdata.js

export default function handler(req, res) {
  const cards = [
    {
      title: "Time-Saving",
      description:
        "Find your dream home fast with smart search tools and personalized recommendations, cutting down endless scrolling.",
      icon: "/images/yicon1.svg",
    },
    {
      title: "Expert Support",
      description:
        "Get professional advice and assistance every step of the way, ensuring a smooth and informed home-buying experience.",
      icon: "/images/yicon2.svg",
    },
    {
      title: "User-Friendly",
      description:
        "Navigate effortlessly through our app with its intuitive design, making property hunting simple and enjoyable.",
      icon: "/images/yicon3.svg",
    },
    {
      title: "Verified Listings",
      description:
        "Browse only trusted and authenticated listings, ensuring safe and reliable transactions every time.",
      icon: "/images/yicon4.svg",
    },
    {
      title: "Check the Response",
      description:
        "Track inquiries and manage interested buyers or renters directly through the app.",
      icon: "/images/icon5.svg",
    },
    {
      title: "Sell/Rent Faster",
      description:
        "Enjoy increased visibility and connect with serious buyers or renters to close deals quickly.",
      icon: "/images/icon6.svg",
    },
  ];

  res.status(200).json(cards);
}
