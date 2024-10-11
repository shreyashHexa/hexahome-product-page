export default function handler(req, res) {
  const cards = [
    {
      title: "Create a HexaHome Account",
      description:
        "Sign up/Register with your mobile number/Email, quickly and easily to start listing your property on HexaHome.",
      icon: "/images/icon1.svg",
    },
    {
      title: "Post Property Ads",
      description:
        "Create and publish your property ad in just a few clicks, reaching thousands of potential buyers or renters.",
      icon: "/images/icon2.svg",
    },
    {
      title: "Add Details",
      description:
        "Key property details, upload photos, and showcase the best features to attract interested users.",
      icon: "/images/icon3.svg",
    },
    {
      title: "Get Verified by HexaHome",
      description:
        "Ensure your listing is trustworthy with HexaHome’s quick verification process for added credibility.",
      icon: "/images/icon4.svg",
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
